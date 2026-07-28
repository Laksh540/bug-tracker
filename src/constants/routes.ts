export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",

  DASHBOARD: "/dashboard",
  PROJECTS: "/projects",
  PROJECT: "/projects/:projectId",

  ISSUES: "/issues",
  CREATE_ISSUE: "/issues/create",

  SETTINGS: "/settings",

  NOT_FOUND: "*",
} as const;
