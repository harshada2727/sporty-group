# Sports Leagues Explorer

A responsive React SPA that fetches sports league data from [TheSportsDB API](https://www.thesportsdb.com/) with search, filter and caching capabilities.

---

## Highlights & Strengths

- Functional Component Architecture: Cleanly structured with separation of concerns.
- Custom Components: `SearchBar`, `SportFilter`, `LeagueCard`, `FootballLoader` enable modularity and reuse.
- Live Filtering: Real-time filtering of leagues by name and sport.
- API Integration: Uses `fetchLeagues()` and `fetchSeasonBadge()` with async/await and graceful fallbacks.
- Implements a fallback mechanism in fetchSeasonBadge to reliably return the first available non-null strBadge from seasons, enhancing robustness when some season entries lack badge data.
- Responsive Design: Media queries ensure usability across screen sizes.
- Smooth UX: Subtle animations and intuitive UI elements enhance the experience.
- Basic Caching: `seasonCache` avoids redundant badge fetches.
- Theming: Gradient backgrounds, hover effects, and consistent typography.

---

## Scope of Improvement

- Debounce Search: Add input delay to avoid frequent filtering.
- If a badge doesn't exist then don't show the loader.
- Loading/Error States: Handle API failures and loading UX across components.
- Accessibility: Improve ARIA roles, semantic HTML, and keyboard navigation.
- Memoization: Use useMemo/useCallback to optimize expensive calculations and prop stability.
- Component Generalization: Extract reusable logic (e.g., badge fetch/loading) via hooks or utilities.
- Pagination/Virtualization: Support large data sets efficiently in LeagueList.
- Clear UI Controls: Add reset buttons for filters and search inputs.

---

## AI Tools Disclosure

This project benefited from productivity enhancements through AI-assisted development using Windsurf , including:

- Initial webpack setup instructions
- Component scaffolding and refactoring suggestions
- CSS styling especially football bounce animation
- Documentation, Summarization in README.md file

---

## Key Design Decisions

- Minimalist UI : Kept interface clean and distraction-free, prioritizing content.
- Stateless Filters : Lifted state to parent (`App.jsx`) for centralized control.
- One-Click Filtering : Combined dropdowns and inputs to avoid multi-step filtering.
- Progressive Enhancement : Components like `FootballLoader` enhance UX without being critical for function.
- Mobile-First Layout : Started with a single-column grid, expanded for wider screens.

---

> This README serves as documentation to reviewers, mentors, or interviewers to understand the app's strengths, development process, and improvement roadmap.
