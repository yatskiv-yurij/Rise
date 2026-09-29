"use client";

import Link from "next/link";
import {
  FormContainerStyled,
  FormHeaderStyled,
  FormSectionStyled,
  FormSubtitleStyled,
  FormTitleStyled,
  RegisterButtonStyled,
  RegisterTextStyled,
} from "../sign.styled";
import LoginForm from "./components/LoginForm/LoginForm";

export default function LoginPage() {
  return (
    <FormSectionStyled>
      <FormContainerStyled>
        <FormHeaderStyled>
          <FormTitleStyled>Welcome back</FormTitleStyled>
          <FormSubtitleStyled>
            Continue building better habits.
          </FormSubtitleStyled>
        </FormHeaderStyled>

        <LoginForm />

        <RegisterTextStyled>
          Don't have an account?
          <RegisterButtonStyled as={Link} href="/signup">
            Create account
          </RegisterButtonStyled>
        </RegisterTextStyled>
      </FormContainerStyled>
    </FormSectionStyled>
  );
}
