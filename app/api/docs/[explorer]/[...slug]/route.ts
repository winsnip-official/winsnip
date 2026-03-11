import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(
  request: NextRequest,
  { params }: { params: { explorer: string; slug: string[] } }
) {
  try {
    const { explorer, slug } = params
    const filePath = slug.join('/')
    const docsPath = path.join(process.cwd(), 'public', 'docs', explorer, `${filePath}.md`)
    
    if (!fs.existsSync(docsPath)) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }
    
    const content = fs.readFileSync(docsPath, 'utf-8')
    return NextResponse.json({ content })
  } catch (error) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 })
  }
}