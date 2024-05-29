"use client";

import { usePathname, useRouter } from "next/navigation";
import { createContext, useCallback, useEffect, useState } from "react";

export const AuthContext = createContext<IAuthContext>({});

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathName = usePathname();

  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState<IUser>();

  const checkAuth = useCallback(async () => {
    setLoading(true);

    try {
      const firstName = localStorage.getItem("firstName");
      const lastName = localStorage.getItem("lastName");

      if (!firstName || !lastName) {
        setLoggedIn(false);
        router.push("/");
      } else {
        setLoggedIn(true);
        setUser({ firstName, lastName });
        if (pathName === "/") {
          router.push("/dashboard");
        }
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoggedIn(false);
      setLoading(false);
      router.replace("/");
    }
  }, [router, pathName]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
