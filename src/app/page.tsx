"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/hooks/useAuth";

export default function HomePage() {
  const router = useRouter();

  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (isLoading) return;

    if (isAuthenticated) {
      router.replace("/dashboard");
      return;
    }

    router.replace("/login");
  }, [isAuthenticated, isLoading, router]);

  return null;
}
