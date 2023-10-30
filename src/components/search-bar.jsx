import {
  Button,
  Center,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export const SearchBar = () => {
  return (
    <Center>
      <InputGroup className="mt-20 gap-5" maxW="2xl">
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input type="text" placeholder="Search Here ..." />
        <Button colorScheme="linkedin">Search</Button>
      </InputGroup>
    </Center>
  );
};
