export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;
  avatar?: string;
  isVerified: boolean;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}