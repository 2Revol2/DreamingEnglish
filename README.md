# Dreaming English

Learn English with interesting videos and podcasts tailored for all levels. Master fluency through immersion.

**[Live Demo](https://dreamingenglish.vercel.app/)**

## What is Dreaming English?

Dreaming English is a platform inspired by DreamingSpanish that helps learners master English through engaging video content. It provides:
- Personalized learning paths based on proficiency levels
- Progress tracking with daily goals and streak counting
- AI-powered chat interactions for practice

## Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL database

### Installation

1. Clone and install:
```bash
git clone https://github.com/2Revol2/DreamingEnglish
cd DreamingEnglish
npm install
```

2. Configure environment:
```bash
cp .env.example .env
# Edit .env with your database URL and auth secrets
```

3. Setup database:
```bash
npm run prisma:generate
npm run prisma:migrate
```

4. Start development:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## How It Works

### For Learners
1. **Sign up** with email 
2. **Set daily goal** (default 900 seconds per day)
3. **Browse videos**
4. **Watch and track** progress automatically
5. **Chat with AI** to practice and get feedback
6. **View progress**

### For Developers

The app follows **Feature-Sliced Design (FSD)** architecture for scalability and maintainability:

```
src/
├── app/          # Everything that makes the app run e.g. global styles, providers.
│
├── shared/       # Reusable utilities, hooks, types, UI components
│   ├── api/      # API client and data fetching
│   ├── hooks/    # Custom React hooks
│   ├── lib/      # Utility functions
│   ├── store/    # Zustand stores
│   ├── types/    # TypeScript types
│   └── ui/       # Reusable UI components
│
├── entities/     # Business entities (User, Video, Level, Message)
│   ├── User/
│   ├── Video/
│   ├── Level/
│   └── Message/
│   └── ...
│
├── features/     # User-facing features (Auth, VideoPlayer, Chat)
│   ├── Auth/
│   ├── VideoPlayer/
│   ├── SendMessage/
│   ├── SetDailyGoal/
│   └── ...
│
├── widgets/      # Complex UI sections combining features
│   ├── Header/
│   ├── Sidebar/
│   ├── ChatWindow/
│   └── ...
│
└── pages/        # Page components (HomePage, BrowsePage, VideoPage)
    ├── HomePage/
    ├── BrowsePage/
    ├── VideoPage/
    └── ...
```

**Architecture Principles:**
- **Layers**: Shared → Entities → Features → Widgets → Pages
- **Isolation**: Each slice is independent and reusable
- **Scalability**: Easy to add new features without affecting existing code
- **Testability**: Clear boundaries make testing straightforward

**Getting Started with Development:**
- New feature? Create a folder in `features/` with its own logic and UI
- Need a reusable component? Add it to `shared/ui/`
- Working with data? Use entities and shared API utilities
- Building a page? Combine widgets and features
- Each layer can be tested independently

## Core Features

### Authentication
- Login with Google/GitHub or as a quest

### Learning Management
- Track watch time per video
- Daily statistics and streaks
- Progress by proficiency level
- Video history

### Content
- Videos at 4 levels: SUPER_BEGINNER → ADVANCED
- Transcripts for reference
- Search and filtering


## API Reference

| Endpoint                 | Method   | Purpose                         |
|--------------------------|----------|---------------------------------|
| `/api/videos`            | GET      | List all videos                 |
| `/api/videos/[id]`       | GET      | Get video details               |
| `/api/me`                | GET/PUT  | Current/Update user profile     |
| `/api/stats`             | GET      | User statistics                 |
| `/api/history`           | GET/POST | Get/Update history              |
| `/api/watch-time`        | GET      | Get total watch time            |
| `/api/watch-time/daily`  | GET/POST | Get/update watch time for today |
| `/api/watch-time/manual` | POST     | Add hours outside               |
| `/api/chat`              | POST     | AI chat                         |

## Database Schema

See `prisma/schema.prisma` for full schema.

## Development

### Scripts
```bash
npm run dev              # Start dev server
npm run build            # Build for production
npm run lint             # Check code quality
npm run lint:fix         # Fix linting issues
npm run test:unit        # Run unit tests
npm run prisma:migrate   # Run migrations
```

### Tech Stack
- **Framework**: Next.js 16 + React 19
- **Database**: PostgreSQL + Prisma ORM
- **UI**:  Tailwind CSS 4 + Shadcn 
- **State Management**: Zustand + TanStack Query
- **Auth**: NextAuth.js
- **Video**: React Player + Embla Carousel
- **Virtualization**: TanStack React Virtual
- **Forms & Validation**: Zod
- **Icons**: Lucide React + React Icons
- **Testing**: Vitest + Playwright + React Testing Library
- **Monitoring**: Sentry + Vercel Speed Insights
- **Code Quality**: ESLint 9 + Prettier + TypeScript 5

### Code Quality
- ESLint for standards
- Prettier for formatting
- Husky for git hooks
- Pre-commit checks enabled


## Contributing

1. Create feature branch: `git checkout -b feature/name`
2. Make changes and test: `npm run test:unit`
3. Lint code: `npm run lint:fix`
4. Commit with husky checks
5. Push and create pull request

## License

See LICENSE file.


