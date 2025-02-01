"use client";
import AdvertiserCard from "@/components/advertiser/AdvertiserCard";
import { getAdvertisers } from "@/lib/advertiser/getAdvertisers";
import { Database } from "@/lib/Database.types";
import { Suspense, useEffect, useState } from "react";
import AdvertisersListPagination from "./AdvertisersListPagination";

interface IAdvertisersListProps {
  currentPage: number;
  pageSize: number;
}

const AdvertisersList = (props: IAdvertisersListProps) => {
  const { currentPage, pageSize } = props;
  const [advertisrsGetInfo, setAdvertisrsGetInfo] = useState<{
    advertisers: Database["public"]["Tables"]["advertisers"]["Row"][];
    isError: boolean;
    totalCount: number;
  }>({
    advertisers: [],
    isError: false,
    totalCount: 0,
  });
  const { advertisers, isError, totalCount } = advertisrsGetInfo;

  useEffect(() => {
    getAdvertisers(currentPage, pageSize)
      .then((data) => {
        setAdvertisrsGetInfo({
          advertisers: data.advertisers,
          isError: data.isError,
          totalCount: data.totalCount,
        });
      })
      .catch(() => {
        setAdvertisrsGetInfo({
          advertisers: [],
          isError: true,
          totalCount: 0,
        });
      });
  }, [currentPage, pageSize]);

  return (
    <>
      {isError ? (
        <div className="text-lg text-red-600">Error has occured</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {advertisers?.map((advertiser) => (
            <AdvertiserCard
              key={advertiser.id}
              advertiser={advertiser}
              memberCount={1}
              campaignCount={0}
            />
          ))}
        </div>
      )}

      <Suspense>
        <AdvertisersListPagination
          currentPage={currentPage}
          totalPage={Math.ceil(totalCount / pageSize)}
        />
      </Suspense>
    </>
  );
};

export default AdvertisersList;
