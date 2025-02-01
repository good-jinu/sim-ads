"use client";
import PaginationComposed from "@/components/ui/PaginationComposed";
import { usePathname, useSearchParams } from "next/navigation";

type AdvertisersListPaginationProps = {
  currentPage: number;
  totalPage: number;
};

const AdvertisersListPagination = (props: AdvertisersListPaginationProps) => {
  const { currentPage, totalPage } = props;

  const searchParams = useSearchParams();
  const pathname = usePathname();

  const createHref = (page: number) => {
    const params = new URLSearchParams(searchParams);
    if (page) {
      params.set("page", page.toString());
    } else {
      params.delete("page");
    }
    return `${pathname}?${params.toString()}`;
  };

  return (
    <PaginationComposed
      createHref={createHref}
      currentPage={currentPage}
      totalPage={totalPage || 1}
    />
  );
};

export default AdvertisersListPagination;
