import AdvertisersListPage from "./AdvertisersListPage";
import HomeHeader from "./HomeHeader";

const RootPage = async () => {
  return (
    <main>
      <HomeHeader />
      <AdvertisersListPage />
    </main>
  );
};

export default RootPage;
