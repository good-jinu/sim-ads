"use client";
import AddWorkspaceButton from "@/components/workspace/AddWorkspaceButton";
import { WorkspacesContext } from "@/lib/workspaces/WorkspacesContext";
import { getWorkspaces } from "@/lib/workspaces/getWorkspaces";
import { useSearchParams } from "next/navigation";
import { useContext } from "react";
import WorkspacesList from "../components/workspace/WorkspacesList";

const WorkspacesListPage = () => {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const limit = 16;
  const workspacesContext = useContext(WorkspacesContext);

  return (
    <article className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
        Workspaces
      </h1>
      {/* Add Workspace Button */}
      <div className="mt-4 mb-6 flex justify-end">
        <AddWorkspaceButton
          onSuccess={() => {
            getWorkspaces(currentPage, limit)
              .then((data) => {
                workspacesContext.setWorkspacesInfo({
                  workspaces: data.workspaces,
                  isError: data.isError,
                  totalCount: data.totalCount,
                });
              })
              .catch(() => {
                workspacesContext.setWorkspacesInfo({
                  workspaces: [],
                  isError: true,
                  totalCount: 0,
                });
              });
          }}
        />
      </div>
      <WorkspacesList
        pageSize={limit}
        currentPage={currentPage}
        convertToPathname={(id: string) => `/${id}`}
      />
    </article>
  );
};

export default WorkspacesListPage;
