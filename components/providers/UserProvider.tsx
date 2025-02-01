"use client";
import { supabase } from "@/lib/supabase";
import UserContext from "@/lib/UserContext";
import { Session, User } from "@supabase/supabase-js";
import { usePathname, useRouter } from "next/navigation";
import { FC, PropsWithChildren, useEffect, useState } from "react";

const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const [userLoaded, setUserLoaded] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    function saveSession(
      /** @type {Awaited<ReturnType<typeof supabase.auth.getSession>>['data']['session']} */
      session?: Session | null,
    ) {
      const currentUser = session?.user;
      // if (session) {
      //   const jwt = jwtDecode(session.access_token);
      //   currentUser.appRole = jwt.user_role;
      // }
      setUser(currentUser ?? null);
      setUserLoaded(!!currentUser);

      if (["/login", "/signup"].includes(pathname)) {
        return;
      }

      if (!currentUser) {
        router.push("/login");
      }
    }

    supabase.auth
      .getSession()
      .then(({ data: { session } }) => saveSession(session));

    const {
      data: { subscription: authListener },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      saveSession(session);
    });

    return () => {
      authListener?.unsubscribe();
    };
  }, [router, pathname]);

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.refresh();
    }
  };

  return (
    <UserContext.Provider
      value={{
        userLoaded,
        user,
        signOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
