import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Fetch star count from GitHub API for the soniqaudio organization
    // We'll get stars from all repos and sum them, or use a specific repo
    // For now, let's use the organization's main repos
    const repos = ['tone', 'chroma'] // Add more repos as needed
    
    let totalStars = 0
    
    for (const repo of repos) {
      try {
        const response = await fetch(
          `https://api.github.com/repos/soniqaudio/${repo}`,
          {
            headers: {
              'Accept': 'application/vnd.github.v3+json',
              // Optional: Add GitHub token for higher rate limits
              // 'Authorization': `token ${process.env.GITHUB_TOKEN}`,
            },
            next: { revalidate: 3600 }, // Revalidate every hour
          }
        )
        
        if (response.ok) {
          const data = await response.json()
          totalStars += data.stargazers_count || 0
        }
      } catch (error) {
        console.error(`Error fetching stars for ${repo}:`, error)
      }
    }
    
    return NextResponse.json({ stars: totalStars })
  } catch (error) {
    console.error('Error fetching GitHub stars:', error)
    return NextResponse.json(
      { error: 'Failed to fetch star count' },
      { status: 500 }
    )
  }
}

