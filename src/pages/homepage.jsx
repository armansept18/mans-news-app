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

  const fetchNews = async (page = 1, searchTerm = "") => {
    const pageSize = 4;
    try {
      const url = searchTerm
        ? `https://newsapi.org/v2/everything?q=${searchTerm}&sortBy=publishedAt&page=${page}&pageSize=${pageSize}`
        : `https://newsapi.org/v2/top-headlines?country=id&page=${page}&pageSize=${pageSize}`;

      const res = await axios.get(url, {
        headers: {
          "x-api-key": "7dfc11622365402d85a99e0c3b92f379",
        },
      });

      setNews([...res.data.articles]);
      setTotalPages(Math.ceil(res.data.totalResults / pageSize));
      setCurrentPage(page);
    } catch (err) {
      console.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  const handleSearch = (searchTerm) => {
    setIsLoading(true);
    fetchNews(1, searchTerm);
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
    fetchNews(newPage);
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
