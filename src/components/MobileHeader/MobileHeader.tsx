"use client";

import { Menu } from "@mui/icons-material";

import {
  MenuButtonStyled,
  MobileBrandIconStyled,
  MobileBrandStyled,
  MobileBrandTextStyled,
  MobileHeaderStyled,
} from "./MobileHeader.styles";

type MobileHeaderProps = {
  onMenuClick: () => void;
};

export default function MobileHeader({ onMenuClick }: MobileHeaderProps) {
  return (
    <MobileHeaderStyled>
      <MobileBrandStyled>
        <MobileBrandIconStyled>~</MobileBrandIconStyled>
        <MobileBrandTextStyled>Rise</MobileBrandTextStyled>
      </MobileBrandStyled>

      <MenuButtonStyled onClick={onMenuClick} aria-label="Open navigation">
        <Menu />
      </MenuButtonStyled>
    </MobileHeaderStyled>
  );
}
