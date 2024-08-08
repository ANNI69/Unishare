import { createContext, useContext, useState, PropsWithChildren } from "react";
import { User } from "../types/User";

const AuthContext = createContext<User | null>(null);
interface AuthProviderProps extends PropsWithChildren {
  isUserLoggedIn: boolean;
}

export default function AuthProvider({
  children,
  isUserLoggedIn,
}: AuthProviderProps) {
  const [user] = useState<User | null>(isUserLoggedIn ? { id: 1 } : null);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
