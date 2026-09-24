"use client";

import { BarChartOutlined, LogoutOutlined } from "@mui/icons-material";

import { usePathname } from "next/navigation";

import {
  BrandIconStyled,
  BrandStyled,
  BrandTextStyled,
  LogoutButtonStyled,
  NavigationLinkStyled,
  NavigationStyled,
  ProfileDividerStyled,
  ProfileInfoStyled,
  ProfileNameStyled,
  ProfileAvatarStyled,
  ProfileStyled,
  SidebarBottomStyled,
  SidebarRootStyled,
} from "./Sidebar.styles";

import { navigationItems } from "@/app/constants";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <SidebarRootStyled>
      <BrandStyled>
        <BrandIconStyled
          src="/rise.svg"
          width={24}
          height={24}
          alt="Rise icon"
        />
        <BrandTextStyled>Rise</BrandTextStyled>
      </BrandStyled>
      <NavigationStyled as="nav" aria-label="Mainnavigation">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <NavigationLinkStyled
              key={item.href}
              href={item.href}
              active={isActive}
              aria-current={isActive ? "page" : undefined}>
              <Icon />
              {item.label}
            </NavigationLinkStyled>
          );
        })}
      </NavigationStyled>

      <SidebarBottomStyled>
        <ProfileDividerStyled />

        <ProfileStyled>
          <ProfileInfoStyled>
            <ProfileAvatarStyled
              src="/avatar.png"
              width={24}
              height={24}
              alt="User icon"
            />
            <ProfileNameStyled>Alex</ProfileNameStyled>
          </ProfileInfoStyled>

          <LogoutButtonStyled aria-label="Logout">
            <LogoutOutlined sx={{ fontSize: 14 }} />
          </LogoutButtonStyled>
        </ProfileStyled>
      </SidebarBottomStyled>
    </SidebarRootStyled>
  );
}
