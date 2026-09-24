"use client";

import { Close, LogoutOutlined } from "@mui/icons-material";
import { Drawer, IconButton } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

import { navigationItems } from "@/app/constants";

import {
  DrawerAvatarStyled,
  DrawerBottomStyled,
  DrawerBrandIconStyled,
  DrawerBrandStyled,
  DrawerBrandTextStyled,
  DrawerContentStyled,
  DrawerHeaderStyled,
  DrawerNavigationLinkStyled,
  DrawerNavigationStyled,
  DrawerProfileDividerStyled,
  DrawerProfileNameStyled,
  DrawerProfileStyled,
  DrawerWrapperStyled,
  LogoutButtonStyled,
} from "./MobileDrawer.styles";

type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (href: string) => {
    onClose();
    router.push(href);
  };

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <DrawerContentStyled>
        <DrawerHeaderStyled>
          <DrawerBrandStyled>
            <DrawerBrandIconStyled
              src="/rise.svg"
              width={24}
              height={24}
              alt="Rise icon"
            />
            <DrawerBrandTextStyled>Rise</DrawerBrandTextStyled>
          </DrawerBrandStyled>

          <IconButton onClick={onClose} aria-label="Close navigation">
            <Close />
          </IconButton>
        </DrawerHeaderStyled>

        <DrawerNavigationStyled as="nav" aria-label="Mobile navigation">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <DrawerNavigationLinkStyled
                key={item.href}
                href={item.href}
                active={isActive}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavigation(item.href);
                }}>
                <Icon />
                {item.label}
              </DrawerNavigationLinkStyled>
            );
          })}
        </DrawerNavigationStyled>

        <DrawerBottomStyled>
          <DrawerProfileDividerStyled />
          <DrawerWrapperStyled>
            <DrawerProfileStyled>
              <DrawerAvatarStyled
                src="/avatar.png"
                width={24}
                height={24}
                alt="User icon"
              />
              <DrawerProfileNameStyled>Alex</DrawerProfileNameStyled>
            </DrawerProfileStyled>
            <LogoutButtonStyled aria-label="Logout">
              <LogoutOutlined sx={{ fontSize: 14 }} />
            </LogoutButtonStyled>
          </DrawerWrapperStyled>
        </DrawerBottomStyled>
      </DrawerContentStyled>
    </Drawer>
  );
}
