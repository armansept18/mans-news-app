import React from "react";
import { Center } from "@chakra-ui/react";
import { NewsList } from "../components/newsList";
import axios from "axios";
import { Loading } from "../components/loading";
import SearchBar from "../components/search-bar";
import Pagination from "../components/pagination";

export class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
      isLoading: true,
      currentPage: 1,
      totalPages: 1,
      searchTerm: "",
    };
  }

  fetchNews = async (page = 1, term = "") => {
    const pageSize = 4;
    try {
      const url = term
        ? `https://newsapi.org/v2/everything?q=${term}&sortBy=publishedAt&page=${page}&pageSize=${pageSize}`
        : `https://newsapi.org/v2/top-headlines?country=id&sortBy=publishedAt&page=${page}&pageSize=${pageSize}`;

      const res = await axios.get(url, {
        headers: {
          "x-api-key": process.env.REACT_APP_NEWS_API_KEY,
        },
      });

      this.setState({
        news: [...res.data.articles],
        totalPages: Math.ceil(res.data.totalResults / pageSize),
        currentPage: page,
        searchTerm: term,
      });
    } catch (err) {
      console.error(err.message);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSearch = (newSearchTerm) => {
    this.setState({ isLoading: true });
    this.fetchNews(1, newSearchTerm);
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  };

  componentDidMount() {
    this.fetchNews();
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }

  handlePageChange = (newPage) => {
    const { searchTerm } = this.state;
    this.fetchNews(newPage, searchTerm);
  };

  render() {
    const { news, isLoading, currentPage, totalPages } = this.state;

    return (
      <>
        <SearchBar onSearch={this.handleSearch} />
        {isLoading ? (
          <Loading />
        ) : (
          <Center className="flex flex-col mt-16">
            <NewsList news={[...news]} fetchNews={this.fetchNews} />
            <Pagination
              className="mt-8"
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </Center>
        )}
      </>
    );
  }
}
