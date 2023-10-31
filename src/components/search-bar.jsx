import {
  Button,
  Center,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";

export const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSearch = () => {
    onSearch(searchTerm);
  };
  return (
    <Center>
      <InputGroup className="mt-20 gap-5" maxW="2xl">
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Search Here ..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <Button colorScheme="linkedin" onClick={handleSearch}>
          Search
        </Button>
      </InputGroup>
    </Center>
  );
};
