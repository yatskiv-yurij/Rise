"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";

import { useAuth } from "@/hooks/useAuth";

export default function NotFound() {
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (isAuthenticated) {
      redirect("/dashboard");
      return;
    }
    redirect("/login");
  }, [isAuthenticated, isLoading]);

  return null;
}
