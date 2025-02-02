"use client";
import PaginationComposed from "@/components/ui/PaginationComposed";
import { usePathname, useSearchParams } from "next/navigation";

type WorkspacesListPaginationProps = {
  currentPage: number;
  totalPage: number;
};

const WorkspacesListPagination = (props: WorkspacesListPaginationProps) => {
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

export default WorkspacesListPagination;
