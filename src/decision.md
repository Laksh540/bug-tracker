# Bug Tracker App - Project Decisions

> Source: [Bug tracker app](https://app.notion.com/p/346b8d37c285807882cacdcc57368337)

## Product Definition

Bug tracking system for small dev team where testers log issues, developers resolve them, and admin manages project and users.

## Roles

| Role | Permissions |
|------|------------|
| **Admin** | Light oversight role. Can create projects and issues. |
| **Tester** | Creates/updates issues and comments. |
| **Developer** | Updates status, resolves issues, and comments. |

## Screens & Decisions

### 1. Entry Screen
- Two options: **"Try Demo"** or **"Login/Signup"**
- "Try Demo" → takes user to dashboard as a **tester** (for recruiter showcase, no Firebase storage)
- "Try Demo" data stored in `src/mockData/` + session storage
- Demo mode uses fixed 500ms delay for data fetching (consistency with skeleton loaders)
- Content and sidebar remain same for demo and authenticated users

### 2. Authentication (Login / Signup)
- Login: email + password, sign-up link, "Try Demo" link
- Signup: email, role, username, password, confirm password — via Firebase Auth

### 3. Projects
- Card layout with image, name, team members (multiselect: "Name · Role")
- Create project dialog: name, image upload, member assignment, validation (unique name)
- Kebab menu with delete option (warning popup — cannot undo)
- Delete disabled if project has issues (tooltip: "Cannot delete project with existing issues.")
- After login → redirect to projects screen (or dashboard if only one project)
- Selected project appears in sidebar (top-left dropdown)
- Sidebar options (Create Issue, Issues, Dashboard) scoped to selected project
- Admin has **"All Project"** dropdown option to see across all projects

### 4. Issues Table
- Columns: Issue ID (e.g. `OSS-23`), Title, Priority, Assignee, Status, Created At, Created By, Due Date
- Filters:
  - Global search for title + issue ID
  - Multiselect dropdowns: Priority, Assignee (searchable), Status
  - Filter icon in column headers → overlay → selected filters shown above table
- Sort: Created At (default desc), Due Date — click cycle: ascending ↑ → descending ↓ → default (no icon)
- Editable inline columns: Priority (dropdown), Assignee (single-select searchable), Status (dropdown) — show loader on cell during API call, error toast on failure
- Title truncated with tooltip (only if truncated)
- Click title → opens Issue Details dialog

### 5. Issue Details Dialog
- Layout: Issue ID + title (top) → quick editable row (Status, Priority, Assignee, Due Date) → Attachments → Description → Comments/Activity
- **Hybrid save**: Status, Priority, Due Date, Attachments → autosave. Title, Description → manual save (save/cancel buttons appear on edit)
- Attachments: thumbnail grid, + Add tile, +N more indicator, image preview with navigation/pan/zoom
- Timeline (descending): activity + comments mixed
  - Comment: avatar + name + text
  - Activity: dot + "User changed X to Y"
  - Edited comments: show "edited 2:05 PM" below
  - Comment input + send at bottom

### 6. Create Issue
- Centered container (~800-1000px max-width)
- Layout: Title (full) → Description (full) → 2-column grid (Status/Priority, Assignee/Due Date) → Attachments (full) → Cancel | Save (bottom-right, 50% width)
- Back/cancel checks dirty form → discard warning popup
- Save or back navigates to Issue listing

### 7. Dashboard
- Four cards:
  - **Top Summary**: Total Issues, Open, In Progress, Resolved, High Priority (with optional trend)
  - **Work Distribution**: Donut chart with dropdown (by status or by priority)
  - **Recent Activity**: Dropdown for "All Activities" / "My Activities", activity batching (same action + user + field within 5min window), expandable, click navigates to issue detail
  - **Quick Access Shortcuts**: Role-based buttons (Developer, Tester, Admin) with URL params (e.g. `status=open`)
- Navigation from cards/issues → Issue listing page with URL params

### 8. Responsiveness (Desktop-First)
- Collapse sidebar into drawer on mobile
- Stack table into scrollable view (horizontal scroll)
- Convert 2-column forms to single column
- Dialogs full-screen on mobile
- Buttons/inputs usable without zooming

## V2 Ideas
- AI chat feature: help users find relevant issues (e.g. "issues which can be quick fix"), admin can ask AI about weekly progress

## Related
- [Milestone 2](https://app.notion.com/p/Milestone-2-388b8d37c28580b0a486fd8e78283a2d)
