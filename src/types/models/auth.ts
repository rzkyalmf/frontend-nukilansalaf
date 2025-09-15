export interface TokenData {
  token: string;
}

export interface AuthResponse {
  id: string;
  isVerified: boolean;
  onBanned: boolean;
  role: string;
}