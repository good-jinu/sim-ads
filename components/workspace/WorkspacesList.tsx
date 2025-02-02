"use client";
import WorkspaceCard from "@/components/workspace/WorkspaceCard";
import { getWorkspaces } from "@/lib/workspaces/getWorkspaces";
import { Suspense, useContext, useEffect } from "react";
import WorkspacesListPagination from "./WorkspacesListPagination";
import { WorkspacesContext } from "@/lib/workspaces/WorkspacesContext";

interface IWorkspacesListProps {
  currentPage: number;
  pageSize: number;
  convertToPathname: (id: string) => string;
}

const WorkspacesList = (props: IWorkspacesListProps) => {
  const { currentPage, pageSize, convertToPathname } = props;
  const workspacesContext = useContext(WorkspacesContext);
  const { workspacesInfo, setWorkspacesInfo } = workspacesContext;
  const { workspaces, isError, totalCount } = workspacesInfo;

  useEffect(() => {
    getWorkspaces(currentPage, pageSize)
      .then((data) => {
        setWorkspacesInfo({
          workspaces: data.workspaces,
          isError: data.isError,
          totalCount: data.totalCount,
        });
      })
      .catch(() => {
        setWorkspacesInfo({
          workspaces: [],
          isError: true,
          totalCount: 0,
        });
      });
  }, [currentPage, pageSize, setWorkspacesInfo]);

  return (
    <>
      {isError ? (
        <div className="text-lg text-red-600">Error has occured</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {workspaces?.map((advertiser) => (
            <WorkspaceCard
              key={advertiser.id}
              workspace={advertiser}
              memberCount={1}
              campaignCount={0}
              convertToPathname={convertToPathname}
            />
          ))}
        </div>
      )}

      <Suspense>
        {totalCount > pageSize && (
          <WorkspacesListPagination
            currentPage={currentPage}
            totalPage={Math.ceil(totalCount / pageSize)}
          />
        )}
      </Suspense>
    </>
  );
};

export default WorkspacesList;
