export type AuthProvider = {
  provider: string;
  providerId: string;
};

export type AuthUser = {
  _id: string;
  name: string;
  email: string;
  avatarUrl: string | null;
  providers: AuthProvider[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type AuthUserBasic = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string | null;
};

export type SignInPayload = {
  email: string;
  password: string;
};

export type SignUpPayload = {
  name: string;
  email: string;
  password: string;
};

export type AuthResponse = {
  success: boolean;
  data: {
    user: AuthUserBasic;
    token: string;
  };
};

export type MeResponse = {
  success: boolean;
  data: {
    user: AuthUser;
  };
};
