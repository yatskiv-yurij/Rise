import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppThemeProvider } from "@/theme/ThemeProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { AuthProvider } from "@/context/AuthContext";
import AuthGuard from "@/components/AuthGuard/AuthGuard";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Rise",
  description: "Build consistency, one day at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <AppRouterCacheProvider>
          <AuthProvider>
            <AuthGuard>
              <AppThemeProvider>{children}</AppThemeProvider>
            </AuthGuard>
          </AuthProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
