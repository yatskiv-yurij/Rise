"use client";

import { useState } from "react";

import Sidebar from "@/components/Sidebar/Sidebar";
import MobileDrawer from "@/components/MobileDrawer/MobileDrawer";
import MobileHeader from "@/components/MobileHeader/MobileHeader";

import { MainLayoutRootStyled, MainStyled } from "./main.styles";
import { MainLayoutProps } from "./types";

export default function MainLayout({ children }: MainLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <MainLayoutRootStyled>
      <Sidebar />

      <MainStyled as="main">
        <MobileHeader onMenuClick={() => setMobileMenuOpen(true)} />
        {children}
      </MainStyled>
      <MobileDrawer
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </MainLayoutRootStyled>
  );
}
