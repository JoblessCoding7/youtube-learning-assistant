# YouTube Learning Assistant

An AI-powered web application that transforms YouTube videos into structured learning materials.

Users simply paste a YouTube URL, and the application retrieves the video's transcript, laying the foundation for AI-generated summaries, question answering, quizzes, and other learning experiences.

> **Status:** 🚧 In Active Development

---

## Features

### ✅ Implemented

* Modern React + TypeScript frontend
* Express + TypeScript backend
* YouTube URL normalization
* YouTube URL validation
* Video ID extraction
* Transcript retrieval from YouTube
* REST API architecture
* Modular service-based backend structure
* AI-generated summaries

### 🚧 Planned

* Interactive AI chat about video content
* Quiz generation
* Key topics extraction
* Timestamp navigation
* Learning notes export

---

## Tech Stack

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* shadcn/ui

### Backend

* Node.js
* Express
* TypeScript

### External Services

* youtube-transcript

---

## Project Structure

```text
youtube-learning-assistant
├── frontend/
│   ├── src/
│   └── ...
│
└── backend/
    ├── src/
    │   ├── routes/
    │   ├── services/
    │   ├── utils/
    │   └── server.ts
    └── ...
```

---

## API Flow

```text
User
 │
 ▼
Frontend
 │
 ▼
POST /api/analyze
 │
 ▼
Normalize URL
 │
 ▼
Validate URL
 │
 ▼
Extract Video ID
 │
 ▼
Retrieve Transcript
 │
 ▼
Return JSON Response
```

---

## API Example

### Request

```http
POST /api/analyze
Content-Type: application/json
```

```json
{
  "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}
```

### Response

```json
{
  "success": true,
  "videoId": "dQw4w9WgXcQ",
  "transcript": [
    {
      "text": "Hello everyone...",
      "offset": 0,
      "duration": 2.4
    }
  ]
}
```

---

## Development Roadmap

* [x] Project initialization
* [x] Backend setup
* [x] Express API
* [x] Route refactoring
* [x] URL validation
* [x] Video ID extraction
* [x] Transcript retrieval
* [ ] AI summarization
* [ ] AI chat
* [ ] Quiz generation
* [ ] Persistent storage
* [ ] User authentication

---

## Getting Started

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npx tsx src/server.ts
```

---

## Design Principles

This project emphasizes clean software engineering practices:

* Small, focused GitHub Issues
* Feature branches for every task
* Small pull requests
* Modular architecture
* Separation of concerns
* Reusable utility and service layers
* Type-safe APIs with TypeScript

---

## Future Vision

The long-term goal is to build a complete AI learning platform where users can:

* Learn from any YouTube video
* Ask questions about video content
* Generate summaries instantly
* Review key concepts
* Practice with AI-generated quizzes
* Build structured learning notes
