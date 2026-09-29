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
import SignUpForm from "./components/SignUpForm/SignUpForm";

export default function SignUpPage() {
  return (
    <FormSectionStyled>
      <FormContainerStyled>
        <FormHeaderStyled>
          <FormTitleStyled>Create your account</FormTitleStyled>
          <FormSubtitleStyled>
            Start building better habits today.
          </FormSubtitleStyled>
        </FormHeaderStyled>

        <SignUpForm />

        <RegisterTextStyled>
          Already have an account?
          <RegisterButtonStyled as={Link} href="/login">
            Sign in
          </RegisterButtonStyled>
        </RegisterTextStyled>
      </FormContainerStyled>
    </FormSectionStyled>
  );
}
