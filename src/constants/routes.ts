export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",

  DASHBOARD: "/dashboard",
  PROJECTS: "/projects",
  PROJECT: "/projects/:projectId",

  ISSUES: "/issues",
  CREATE_ISSUE: "/create-issue",

  SETTINGS: "/settings",
  DEMO: "/demo",

  NOT_FOUND: "*",
} as const;
