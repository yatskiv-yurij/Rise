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

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <FormStyled as="form">
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

      <ForgotPasswordStyled>
        <ForgotPasswordButtonStyled>
          Forgot password?
        </ForgotPasswordButtonStyled>
      </ForgotPasswordStyled>

      <SubmitButtonStyled fullWidth type="submit" variant="contained">
        Sign in
      </SubmitButtonStyled>
      <DividerStyled>or</DividerStyled>
      <SocialButtonStyled>Continue with Google</SocialButtonStyled>
    </FormStyled>
  );
}
