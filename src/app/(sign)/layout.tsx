"use client";

import { MainLayoutProps } from "./types";

import {
  BrandIconStyled,
  BrandingContentStyled,
  BrandingFooterStyled,
  BrandingSectionStyled,
  BrandingTitleStyled,
  BrandNameStyled,
  BrandStyled,
  ConsistencyImageStyled,
  SignPageStyled,
} from "./sign.styled";

export default function SignMain({ children }: MainLayoutProps) {
  return (
    <SignPageStyled>
      <BrandingSectionStyled>
        <BrandStyled>
          <BrandIconStyled
            src="/rise.svg"
            width={200}
            height={200}
            alt="Rise"
          />
          <BrandNameStyled>Rise</BrandNameStyled>
        </BrandStyled>

        <BrandingContentStyled>
          <BrandingTitleStyled>
            Small habits. <br /> Big changes.
          </BrandingTitleStyled>

          <BrandingFooterStyled>Consistency map</BrandingFooterStyled>
          <ConsistencyImageStyled
            src="/consistency.svg"
            width={200}
            height={200}
            alt="Consistency map"
          />
        </BrandingContentStyled>
        <BrandingFooterStyled>
          Build consistency, one day at a time.
        </BrandingFooterStyled>
      </BrandingSectionStyled>

      {children}
    </SignPageStyled>
  );
}
