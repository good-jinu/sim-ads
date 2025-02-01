import AddAdvertiserButton from "@/components/advertiser/AddAdvertiserButton";
import AdvertisersList from "./AdvertisersList";

const AdvertisersListPage = async (props: {
  searchParams?: Promise<{
    page?: string;
  }>;
}) => {
  const searchParams = await props.searchParams;
  const currentPage = Number(searchParams?.page) || 1;
  const limit = 16;

  return (
    <article className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
        Advertisers
      </h1>
      {/* Add Advertiser Button */}
      <div className="mt-4 mb-6 flex justify-end">
        <AddAdvertiserButton />
      </div>
      <AdvertisersList pageSize={limit} currentPage={currentPage} />
    </article>
  );
};

export default AdvertisersListPage;
