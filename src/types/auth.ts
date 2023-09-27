export interface SignUpData {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
  phone: string;
  address: string;
  stateID: number;
}

export interface ForgotPasswordData {
  email: string;
}

export interface ResetPasswordData {
  password: string;
  repeatPassword: string;
}