"use client";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  DividerStyled,
  FieldStyled,
  ForgotPasswordButtonStyled,
  ForgotPasswordStyled,
  FormStyled,
  PasswordAdornmentStyled,
  PasswordToggleButtonStyled,
  SocialButtonStyled,
  SubmitButtonStyled,
} from "../../../sign.styled";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <FormStyled as="form">
      <FieldStyled
        fullWidth
        label="Full name"
        type="text"
        placeholder="Alex Johnson"
        variant="outlined"
        sx={(theme) => ({ marginBottom: theme.spacing(1.5) })}
      />

      <FieldStyled
        fullWidth
        label="Email address"
        type="email"
        placeholder="alex@example.com"
        variant="outlined"
        sx={(theme) => ({ marginBottom: theme.spacing(1.5) })}
      />

      <FieldStyled
        fullWidth
        label="Password"
        type={showPassword ? "text" : "password"}
        placeholder="**********"
        variant="outlined"
        sx={(theme) => ({ marginBottom: theme.spacing(1.5) })}
        slotProps={{
          input: {
            endAdornment: (
              <PasswordAdornmentStyled position="end">
                <PasswordToggleButtonStyled
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((prev) => !prev)}
                  edge="end">
                  {showPassword ? (
                    <VisibilityOff fontSize="small" />
                  ) : (
                    <Visibility fontSize="small" />
                  )}
                </PasswordToggleButtonStyled>
              </PasswordAdornmentStyled>
            ),
          },
        }}
      />

      <FieldStyled
        fullWidth
        label="Confirm password"
        type={showConfirmPassword ? "text" : "password"}
        placeholder="**********"
        variant="outlined"
        slotProps={{
          input: {
            endAdornment: (
              <PasswordAdornmentStyled position="end">
                <PasswordToggleButtonStyled
                  type="button"
                  aria-label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  edge="end">
                  {showConfirmPassword ? (
                    <VisibilityOff fontSize="small" />
                  ) : (
                    <Visibility fontSize="small" />
                  )}
                </PasswordToggleButtonStyled>
              </PasswordAdornmentStyled>
            ),
          },
        }}
      />

      <SubmitButtonStyled fullWidth type="submit" variant="contained">
        Create account
      </SubmitButtonStyled>
      <DividerStyled>or</DividerStyled>
      <SocialButtonStyled>Continue with Google</SocialButtonStyled>
    </FormStyled>
  );
}
