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
        <MobileBrandIconStyled
          src="/rise.svg"
          width={24}
          height={24}
          alt="Rise icon"
        />
        <MobileBrandTextStyled>Rise</MobileBrandTextStyled>
      </MobileBrandStyled>

      <MenuButtonStyled onClick={onMenuClick} aria-label="Open navigation">
        <Menu />
      </MenuButtonStyled>
    </MobileHeaderStyled>
  );
}
