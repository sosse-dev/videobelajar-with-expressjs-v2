import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "sonner";

export default function ProtectedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const navigate = useNavigate();
  const loggedInUser = localStorage.getItem("loggedInUser");

  useEffect(() => {
    if (!loggedInUser) {
      toast.error("Anda belum masuk akun")
      navigate("/signup"); // Redirect user to homepage if user is not logged in
    }
  }, [loggedInUser, navigate]);

  return loggedInUser ? children : null;
}
