<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1a8LcOYvMe2WZffaBQkXrxQEc-18WL26U


## Implementation Workflow

This project follows a structured React development workflow:

1.  **Configuration**: Managed via `tsconfig.json` and `vite.config.ts`.
2.  **Dependencies**: Managed via `package.json`.
3.  **Deployment**: Automated via GitHub Actions for GitHub Pages.

## Deployment

This project is configured to deploy automatically to GitHub Pages using GitHub Actions.

1.  Push changes to the `main` branch.
2.  The "Deploy to GitHub Pages" action will trigger automatically.
3.  Monitor the build status in the "Actions" tab of your GitHub repository.

## Project Setup

**Prerequisites:** Node.js (v20 recommended)

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Environment Setup:**
    - Create a `.env` file (or `.env.local`).
    - Add your API key: `GEMINI_API_KEY=your_key_here`

3.  **Run Locally:**
    ```bash
    npm run dev
    ```

4.  **Build for Production:**
    ```bash
    npm run build
    ```
