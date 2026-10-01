"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

type AuthGuardProps = {
  children: ReactNode;
};

const publicPaths = ["/login", "/signup"];

export default function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated, isLoading } = useAuth();

  const isPublicPath = publicPaths.includes(pathname);

  useEffect(() => {
    if (isLoading) return;

    if (!isAuthenticated && !isPublicPath) {
      router.replace("/login");
      return;
    }

    if (isAuthenticated && isPublicPath) {
      router.replace("/dashboard");
      return;
    }
  }, [isLoading, isAuthenticated, isPublicPath, router]);

  if (isLoading) return null;

  if (!isAuthenticated && !isPublicPath) return null;

  if (isAuthenticated && isPublicPath) return null;

  return children;
}
