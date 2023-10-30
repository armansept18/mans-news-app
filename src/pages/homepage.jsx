import { Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { NewsList } from "../components/newsList";
import axios from "axios";
import { Loading } from "../components/loading";
import { SearchBar } from "../components/search-bar";

export const Homepage = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchNews = async () => {
    try {
      const res = await axios.get("https://newsapi.org/v2/everything?q=us", {
        headers: {
          "x-api-key": "7dfc11622365402d85a99e0c3b92f379",
        },
      });
      setNews([...res.data.articles]);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchNews();
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <SearchBar />
      {isLoading ? (
        <Loading />
      ) : (
        <Center className=" mt-16">
          <NewsList news={[...news]} fetchNews={fetchNews} />
        </Center>
      )}
    </>
  );
};
