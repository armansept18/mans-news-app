import React from "react";
import {
  Button,
  Center,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSearch = () => {
    const { onSearch } = this.props;
    const { searchTerm } = this.state;
    onSearch(searchTerm);
  };

  render() {
    const { searchTerm } = this.state;

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
            onChange={this.handleInputChange}
          />
          <Button colorScheme="linkedin" onClick={this.handleSearch}>
            Search
          </Button>
        </InputGroup>
      </Center>
    );
  }
}
