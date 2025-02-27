import { user } from "@/type/types";
import { useEffect, useState } from "react";

export function useAuth() {
  const [user, setUser] = useState<user>();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  return user;
}
