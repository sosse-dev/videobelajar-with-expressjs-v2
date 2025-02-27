import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedLoginSignupRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const navigate = useNavigate();
  const loggedInUser = localStorage.getItem("loggedInUser");

  useEffect(() => {
    if (loggedInUser) {
      navigate("/"); // Redirect user to homepage, if user is logged in
    }
  }, [loggedInUser, navigate]);

  return !loggedInUser ? children : null; // Only render children if not logged in
}