import { useAuth } from "@/context/AuthProvider";
import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
type ProtectedRouteProps = PropsWithChildren;
export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const user = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/login", { replace: true });
    }
  }, [user, navigate]);
  return <>{children}</>;
}
