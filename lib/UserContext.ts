import { createContext } from "react";
import { User } from "@supabase/supabase-js";

export interface UserContextData {
  userLoaded: boolean;
  user: User | null;
  signOut: () => Promise<void>;
}

const UserContext = createContext<UserContextData>({
  userLoaded: false,
  user: null,
  signOut: async () => {},
});

export default UserContext;
