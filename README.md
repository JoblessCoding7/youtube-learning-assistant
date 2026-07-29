# AI YouTube Learning Assistant

An AI-powered learning application that helps users understand long-form
YouTube videos through summaries, timestamp-based question answering, key
topics, and interactive study tools.

## Project Status

🚧 Under active development

The current milestone focuses on building the frontend foundation with React
and TypeScript.

## Planned Features

- Analyze a YouTube video from its URL
- Generate a structured video summary
- Ask questions about the video content
- Find relevant timestamps
- Extract key topics
- Generate flashcards and quizzes
- Save personal study notes

## Technology Stack

### Frontend

- React
- TypeScript
- Vite
- ESLint

### Planned Backend

- Node.js
- Express
- AI model API
- SQLite or PostgreSQL

### Engineering Workflow

- GitHub Issues for feature planning
- Feature branches and pull requests
- GitHub Copilot-assisted implementation
- Human review of AI-generated code
- Automated testing and continuous integration

## Repository Structure

```text
youtube-learning-assistant/
├── frontend/       # React and TypeScript client
├── backend/        # Backend service, planned
├── docs/           # Architecture and development documentation
└── README.md

AI-Assisted Development

GitHub Copilot is used to assist with implementation, refactoring, test
generation, and code review. All generated code is reviewed and validated
before being committed.

Getting Started
Frontend
cd frontend
npm install
npm run dev

The local application will be available at:

http://localhost:5173
Roadmap
 Initialize the React and TypeScript frontend
 Create the landing page
 Add YouTube URL input and validation
 Build the backend API
 Retrieve video transcript data
 Add AI-generated summaries
 Add timestamp-based question answering
 Add automated tests
 Configure GitHub Actions
 Deploy the application