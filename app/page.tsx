import WorkspacesProvider from "@/components/workspace/WorkspacesProvider";
import HomeHeader from "./HomeHeader";
import WorkspacesListPage from "./WorkspacesListPage";

const RootPage = async () => {
  return (
    <main>
      <HomeHeader />
      <WorkspacesProvider>
        <WorkspacesListPage />
      </WorkspacesProvider>
    </main>
  );
};

export default RootPage;
