"use client";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  DividerStyled,
  FieldStyled,
  ForgotPasswordButtonStyled,
  ForgotPasswordStyled,
  FormErrorStyled,
  FormStyled,
  PasswordAdornmentStyled,
  PasswordToggleButtonStyled,
  SocialButtonStyled,
  SubmitButtonStyled,
} from "../../../sign.styled";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const router = useRouter();

  const { signIn } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setError("");
    try {
      await signIn(data);
      router.replace("/dashboard");
    } catch (error) {
      if (error && typeof error === "object" && "response" in error) {
        const response = (
          error as {
            response?: {
              data?: {
                message?: string;
              };
            };
          }
        ).response;

        setError(
          response?.data?.message ||
            "Unable to sign in. Please check your credentials.",
        );
      } else {
        setError("Unable to sign in. Please try again.");
      }
    }
  };

  return (
    <FormStyled as="form" onSubmit={handleSubmit(onSubmit)}>
      <FieldStyled
        fullWidth
        label="Email address"
        type="email"
        placeholder="alex@example.com"
        variant="outlined"
        {...register("email")}
        autoComplete="email"
        error={Boolean(errors.email)}
        helperText={errors.email?.message}
        disabled={isSubmitting}
        sx={(theme) => ({ marginBottom: theme.spacing(1.5) })}
      />

      <FieldStyled
        fullWidth
        label="Password"
        type={showPassword ? "text" : "password"}
        placeholder="**********"
        variant="outlined"
        {...register("password")}
        disabled={isSubmitting}
        autoComplete="current-password"
        error={Boolean(errors.password)}
        helperText={errors.password?.message}
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

      {error && <FormErrorStyled severity="error">{error}</FormErrorStyled>}

      <SubmitButtonStyled
        fullWidth
        type="submit"
        variant="contained"
        disabled={isSubmitting}>
        {isSubmitting ? "Signing in..." : "Sign in"}
      </SubmitButtonStyled>
      <DividerStyled>or</DividerStyled>
      <SocialButtonStyled>Continue with Google</SocialButtonStyled>
    </FormStyled>
  );
}
