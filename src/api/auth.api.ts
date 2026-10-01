import { apiClient } from "./client";

import type {
  AuthResponse,
  MeResponse,
  SignUpPayload,
  SignInPayload,
} from "../types/auth";

export const authApi = {
  async signIn(payload: SignInPayload): Promise<AuthResponse> {
    const { data } = await apiClient.post<AuthResponse>("/auth/login", payload);
    return data;
  },

  async signUp(payload: SignUpPayload): Promise<AuthResponse> {
    const { data } = await apiClient.post<AuthResponse>(
      "/auth/register",
      payload,
    );
    return data;
  },
  async me(): Promise<MeResponse> {
    const { data } = await apiClient.get<MeResponse>("auth/me");
    return data;
  },
};
