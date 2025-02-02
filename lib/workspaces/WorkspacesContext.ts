import { createContext } from "react";
import { Database } from "@/lib/Database.types";

export type WorkspacesContextType = {
  workspaces: Database["public"]["Tables"]["workspaces"]["Row"][];
  isError: boolean;
  totalCount: number;
};

export const WorkspacesContext = createContext<{
  workspacesInfo: WorkspacesContextType;
  setWorkspacesInfo: (value: WorkspacesContextType) => void;
}>({
  workspacesInfo: {
    workspaces: [],
    isError: false,
    totalCount: 0,
  },
  setWorkspacesInfo: () => null,
});
