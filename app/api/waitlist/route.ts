import { NextResponse } from 'next/server'

// In-memory storage for rate limiting only
const submissionCache = new Map<string, number>()

// Clean cache every hour
setInterval(() => {
  submissionCache.clear()
}, 60 * 60 * 1000)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, interest } = body

    // Validate input
    if (!name || !email || !interest) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Get IP address
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : 'unknown'

    // Check rate limiting (max 3 submissions per IP per hour)
    const now = Date.now()
    const ipSubmissions = submissionCache.get(ip) || 0
    if (ipSubmissions >= 3) {
      return NextResponse.json(
        { error: 'Too many submissions. Please try again later.' },
        { status: 429 }
      )
    }

    // Normalize data
    const emailLower = email.toLowerCase().trim()
    const nameLower = name.toLowerCase().trim()

    // Get Google Sheets Web App URL from environment variable
    const GOOGLE_SHEETS_URL = process.env.GOOGLE_SHEETS_URL

    if (!GOOGLE_SHEETS_URL) {
      console.error('GOOGLE_SHEETS_URL not configured')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Send data to Google Sheets (will check duplicates there)
    const timestamp = new Date().toISOString()
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        timestamp,
        name: nameLower,
        email: emailLower,
        interest,
        ip
      })
    })

    const result = await response.json()

    // Check if Google Sheets returned an error (duplicate)
    if (!result.success) {
      return NextResponse.json(
        { error: result.error || 'Failed to save data' },
        { status: 400 }
      )
    }

    // Update rate limit cache only on success
    submissionCache.set(ip, ipSubmissions + 1)

    return NextResponse.json({ 
      success: true,
      message: 'Successfully added to waitlist' 
    })

  } catch (error) {
    console.error('Waitlist submission error:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
