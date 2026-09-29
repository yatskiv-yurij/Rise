"use client";
import { createContext, useEffect, useState, type ReactNode } from "react";

import { authApi } from "@/api/auth.api";
import { authStorage } from "@/utils/authStorage";

import type { AuthUser, SignInPayload, SignUpPayload } from "@/types/auth";

type AuthContextValue = {
  user: AuthUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;

  signIn: (payload: SignInPayload) => Promise<void>;
  signUp: (payload: SignUpPayload) => Promise<void>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined,
);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const isAuthenticated = Boolean(user);

  useEffect(() => {
    const restoreSession = async () => {
      const token = authStorage.getToken();

      if (!token) {
        setIsLoading(false);
        return;
      }

      try {
        const response = await authApi.me();
        setUser(response.data.user);
      } catch {
        authStorage.removeToken();
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    restoreSession();
  }, []);

  const signIn = async (payload: SignInPayload) => {
    const response = await authApi.signIn(payload);
    authStorage.setToken(response.data.token);
    const meResponse = await authApi.me();
    setUser(meResponse.data.user);
  };

  const signUp = async (payload: SignUpPayload) => {
    const response = await authApi.signUp(payload);
    authStorage.setToken(response.data.token);
    const meResponse = await authApi.me();
    setUser(meResponse.data.user);
  };

  const logout = () => {
    authStorage.removeToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, isLoading, isAuthenticated, signIn, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
