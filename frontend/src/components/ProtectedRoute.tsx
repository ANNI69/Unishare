import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const navigate = useNavigate();

  useEffect(() => {
    // Check for the authentication token in cookies
    const token = Cookies.get("token");

    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return <>{children}</>;
}
