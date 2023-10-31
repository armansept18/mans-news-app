import { Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { NewsList } from "../components/newsList";
import axios from "axios";
import { Loading } from "../components/loading";
import { SearchBar } from "../components/search-bar";
import { Pagination } from "../components/pagination";

export const Homepage = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchNews = async (page = 1, term = "") => {
    const pageSize = 4;
    try {
      const url = searchTerm
        ? `https://newsapi.org/v2/everything?q=${term}&sortBy=publishedAt&page=${page}&pageSize=${pageSize}`
        : `https://newsapi.org/v2/top-headlines?country=id&sortBy=publishedAt&page=${page}&pageSize=${pageSize}`;

      const res = await axios.get(url, {
        headers: {
          "x-api-key": process.env.REACT_APP_NEWS_API_KEY,
        },
      });

      setNews([...res.data.articles]);
      setTotalPages(Math.ceil(res.data.totalResults / pageSize));
      setCurrentPage(page);
      setSearchTerm(term);
    } catch (err) {
      console.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  const handleSearch = (newSearchTerm) => {
    setIsLoading(true);
    fetchNews(1, newSearchTerm);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };
  useEffect(() => {
    fetchNews();
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  const handlePageChange = (newPage) => {
    fetchNews(newPage, searchTerm);
  };
  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {isLoading ? (
        <Loading />
      ) : (
        <Center className="flex flex-col mt-16">
          <NewsList news={[...news]} fetchNews={fetchNews} />
          <Pagination
            className="mt-8"
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </Center>
      )}
    </>
  );
};
