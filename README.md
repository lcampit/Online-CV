# Online CV

My very own Curriculum Vitae, Online!

Built with React, typescript, Tailwind, deployed with Vercel and tested with Cypress

## Environment Variables

To enable the GitHub contributions feature, you need to set up the following environment variables in a `.env.local` file:

```env
GITHUB_TOKEN=your_github_personal_access_token
GITHUB_USERNAME=your_github_username
```

### GitHub Personal Access Token Setup

1. Go to [GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Give it a descriptive name (e.g., "Online CV - GitHub Contributions")
4. Select the `read:user` scope (this gives read-only access to your public profile data)
5. Click "Generate token"
6. Copy the token and add it to your `.env.local` file

The GitHub API allows 5,000 authenticated requests per hour. The application caches contribution data for 1 hour to stay well within rate limits.
