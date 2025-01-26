import { createContext } from "react";
import { Session } from "@supabase/supabase-js";

const UserContext = createContext<{
  userLoaded: boolean;
  user: Session | null;
  signOut: () => Promise<void>;
}>({
  userLoaded: false,
  user: null,
  signOut: async () => {},
});

export default UserContext;
