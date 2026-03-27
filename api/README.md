# MCA Guide Article API

Simple API to create, list, and delete articles on The MCA Guide.

## Setup

1. Create a GitHub Personal Access Token with `repo` scope
2. Copy `.env.example` to `.env` and fill in values
3. Install: `npm install`
4. Run: `npm run dev`

## Endpoints

### Create Article
POST /api/articles
Header: x-api-key: your-api-key

Body:
{
  "slug": "my-new-article",
  "title": "My New Article Title",
  "description": "Article description for SEO",
  "content": "Your MDX content here...",
  "category": "before-mca",
  "pillar": "mca-alternatives",
  "tags": ["mca", "business"],
  "heroImage": "/images/articles/cashflow.png",
  "type": "article"
}

### List Articles
GET /api/articles
Header: x-api-key: your-api-key

### Delete Article
DELETE /api/articles/my-article-slug?type=article
Header: x-api-key: your-api-key

## How It Works

1. API receives article data
2. Creates MDX file with frontmatter via GitHub API
3. Commits to main branch
4. Cloudflare detects the push and rebuilds automatically
