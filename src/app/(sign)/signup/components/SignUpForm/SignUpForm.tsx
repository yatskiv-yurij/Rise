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

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuth } from "@/hooks/useAuth";

const signupSchema = z
  .object({
    name: z.string().min(1, "Full name is required"),
    email: z.string().min(1, "Email is required").email("Enter a valid email"),
    password: z.string().min(1, "Password is required"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignupFormData = z.infer<typeof signupSchema>;

export default function SignUpForm() {
  const router = useRouter();
  const { signUp } = useAuth();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: SignupFormData) => {
    setError("");
    try {
      await signUp({
        name: data.name,
        email: data.email,
        password: data.password,
      });
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
            "Unable to create your account. Please try again.",
        );
      } else {
        setError("Unable to create your account. Please try again.");
      }
    }
  };
  return (
    <FormStyled as="form" onSubmit={handleSubmit(onSubmit)}>
      <FieldStyled
        fullWidth
        label="Full name"
        type="text"
        placeholder="Alex Johnson"
        variant="outlined"
        {...register("name")}
        autoComplete="name"
        error={Boolean(errors.name)}
        helperText={errors.name?.message}
        disabled={isSubmitting}
        sx={(theme) => ({ marginBottom: theme.spacing(1.5) })}
      />

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
        autoComplete="new-password"
        error={Boolean(errors.password)}
        helperText={errors.password?.message}
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
        {...register("confirmPassword")}
        disabled={isSubmitting}
        autoComplete="new-password"
        error={Boolean(errors.confirmPassword)}
        helperText={errors.confirmPassword?.message}
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

      <SubmitButtonStyled
        fullWidth
        type="submit"
        variant="contained"
        disabled={isSubmitting}>
        {isSubmitting ? "Creating account..." : "Create account"}
      </SubmitButtonStyled>
      <DividerStyled>or</DividerStyled>
      <SocialButtonStyled>Continue with Google</SocialButtonStyled>
    </FormStyled>
  );
}
