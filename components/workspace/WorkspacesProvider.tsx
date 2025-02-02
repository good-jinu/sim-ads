"use client";
import {
  WorkspacesContext,
  WorkspacesContextType,
} from "@/lib/workspaces/WorkspacesContext";
import { FC, PropsWithChildren, useState } from "react";

const WorkspacesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [workspaces, setWorkspaces] = useState<WorkspacesContextType>({
    workspaces: [],
    isError: false,
    totalCount: 0,
  });

  return (
    <WorkspacesContext.Provider
      value={{
        workspacesInfo: workspaces,
        setWorkspacesInfo: setWorkspaces,
      }}
    >
      {children}
    </WorkspacesContext.Provider>
  );
};

export default WorkspacesProvider;
