import WorkspacesProvider from "@/components/workspace/WorkspacesProvider";
import HomeHeader from "./HomeHeader";
import WorkspacesListPage from "./WorkspacesListPage";
import { Suspense } from "react";

const RootPage = async () => {
  return (
    <main>
      <HomeHeader />
      <WorkspacesProvider>
        <Suspense>
          <WorkspacesListPage />
        </Suspense>
      </WorkspacesProvider>
    </main>
  );
};

export default RootPage;
