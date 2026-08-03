import { createContext, useContext, useState, type ReactNode } from "react";

interface AuthUser {
  name: string;
}

interface AuthContextValue {
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: (user: AuthUser) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const STORAGE_KEY = "auth-user";

export const MOCK_USER: AuthUser = { name: "John Doe" };

function getInitialUser(): AuthUser | null {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw === null) return MOCK_USER;
  try {
    return JSON.parse(raw) as AuthUser | null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(getInitialUser);

  const login = (nextUser: AuthUser) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser));
    setUser(nextUser);
  };
  const logout = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(null));
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: user !== null, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
