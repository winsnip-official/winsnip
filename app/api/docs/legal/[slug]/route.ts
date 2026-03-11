import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params
    const docsPath = path.join(process.cwd(), 'public', 'docs', 'legal', `${slug}.md`)
    
    if (!fs.existsSync(docsPath)) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }
    
    const content = fs.readFileSync(docsPath, 'utf-8')
    return NextResponse.json({ content })
  } catch (error) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 })
  }
}
