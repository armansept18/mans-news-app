import React from "react";
import { Button, Stack } from "@chakra-ui/react";

export default class Pagination extends React.Component {
  constructor(props) {
    super(props);

    this.MAX_PAGES = 5;
    this.OFFSET = Math.floor(this.MAX_PAGES / 2);
  }

  handlePageChange = (newPage) => {
    const { totalPages, onPageChange } = this.props;
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  getPageNumbers = () => {
    const { totalPages, currentPage } = this.props;
    const pageNumber = [];

    if (totalPages <= this.MAX_PAGES) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumber.push(i);
      }
    } else {
      const start = Math.max(1, currentPage - this.OFFSET);
      const end = Math.min(totalPages, currentPage + this.OFFSET);

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

  render() {
    const { currentPage, totalPages } = this.props;

    return (
      <Stack direction="row" spacing={2} mt={4} justify="center">
        <Button
          onClick={() => this.handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          colorScheme="blue"
        >
          Previous
        </Button>
        {this.getPageNumbers().map((page, index) => (
          <Button
            key={index}
            onClick={() =>
              typeof page === "number" ? this.handlePageChange(page) : null
            }
            variant={currentPage === page ? "solid" : "outline"}
            colorScheme={currentPage === page ? "blue" : "gray"}
          >
            {page}
          </Button>
        ))}
        <Button
          onClick={() => this.handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          colorScheme="blue"
        >
          Next
        </Button>
      </Stack>
    );
  }
}
