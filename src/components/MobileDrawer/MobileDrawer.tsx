"use client";

import { Close } from "@mui/icons-material";
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
            <DrawerBrandIconStyled>~</DrawerBrandIconStyled>
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
          <DrawerProfileStyled>
            <DrawerAvatarStyled>A</DrawerAvatarStyled>
            <DrawerProfileNameStyled>Alex</DrawerProfileNameStyled>
          </DrawerProfileStyled>
        </DrawerBottomStyled>
      </DrawerContentStyled>
    </Drawer>
  );
}
