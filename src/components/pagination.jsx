import { Button, Stack } from "@chakra-ui/react";

export const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const MAX_PAGES = 5;
  const OFFSET = Math.floor(MAX_PAGES / 2);
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };
  const getPageNumbers = () => {
    const pageNumber = [];

    if (totalPages <= MAX_PAGES) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumber.push(i);
      }
    } else {
      const start = Math.max(1, currentPage - OFFSET);
      const end = Math.min(totalPages, currentPage + OFFSET);

      for (let i = start; i <= end; i++) {
        pageNumber.push(i);
      }
      if (start > 1) {
        pageNumber.unshift("...");
      }
      if (end < totalPages) {
        pageNumber.push("...");
      }
    }
    return pageNumber;
  };

  return (
    <Stack direction="row" spacing={2} mt={4} justify="center">
      <Button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        colorScheme="blue"
      >
        Previous
      </Button>
      {getPageNumbers().map((page, index) => (
        <Button
          key={index}
          onClick={() =>
            typeof page === "number" ? handlePageChange(page) : null
          }
          variant={currentPage === page ? "solid" : "outline"}
          colorScheme={currentPage === page ? "blue" : "gray"}
        >
          {page}
        </Button>
      ))}
      <Button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        colorScheme="blue"
      >
        Next
      </Button>
    </Stack>
  );
};
