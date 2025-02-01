import { FC } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./Pagination";

type PaginationProps = {
  createHref: (page: number) => string;
  currentPage: number;
  totalPage: number;
  visiblePages?: number;
};

const PaginationComposed: FC<PaginationProps> = (props) => {
  const {
    createHref = (page) => `${page}`,
    currentPage,
    totalPage,
    visiblePages = 5,
  } = props;

  // Set the lowestPage to display
  let lowestPage = currentPage - Math.floor(visiblePages / 2) - 1;

  if (lowestPage < 0) {
    lowestPage = 0;
  }

  // Set the highestPage to display
  const highestPage =
    lowestPage + visiblePages < totalPage
      ? lowestPage + visiblePages
      : totalPage;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={createHref(currentPage > 1 ? currentPage - 1 : currentPage)}
            aria-disabled={currentPage <= 1 ? "true" : "false"}
          />
        </PaginationItem>
        {lowestPage > 0 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {new Array(highestPage - lowestPage).fill(0).map((_, index) => {
          const newPage = lowestPage + index + 1;
          return (
            <PaginationItem key={newPage}>
              <PaginationLink
                href={createHref(newPage)}
                isActive={currentPage === newPage}
              >
                {newPage}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        {highestPage < totalPage && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationNext
            href={createHref(
              currentPage < totalPage ? currentPage + 1 : currentPage,
            )}
            aria-disabled={currentPage >= totalPage ? "true" : "false"}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComposed;
