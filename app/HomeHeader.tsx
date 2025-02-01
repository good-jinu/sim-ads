"use client";
import SimAdsIcon from "@/components/icons/SimAdsIcon";
import ThemeToggle from "@/components/ThemeToggle";
import { supabase } from "@/lib/supabase";
import UserContext from "@/lib/UserContext";
import { User } from "@supabase/supabase-js";
import { LogIn, LogOut } from "lucide-react";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

const HomeHeader = () => {
  const [user, setUser] = useState<User | null>(null);
  const { signOut } = useContext(UserContext);

  const getUser = async () => {
    return (await supabase.auth.getUser())?.data?.user ?? null;
  };

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      window.alert(error);
    }
  };

  useEffect(() => {
    getUser().then((user) => setUser(user));
  }, []);

  return (
    <header className="bg-white dark:bg-neutral-800 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <SimAdsIcon className="w-12 h-12" />
          <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Sim-ads
          </h1>
        </div>
        <nav className="flex space-x-4">
          <ThemeToggle />
          {user ? (
            <LogOut onClick={handleLogout} className="cursor-pointer" />
          ) : (
            <Link href="/login">
              <LogIn />
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default HomeHeader;
