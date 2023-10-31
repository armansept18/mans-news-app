import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import { NewsCard } from "./newsCard";

export const NewsList = ({ news = [], fetchNews }) => {
  console.log("NewsList - News Data:", news);
  const columns = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 4 });
  return (
    <Grid
      templateColumns={`repeat(${columns}, 1fr)`}
      gap={8}
      className=" ml-5 mr-5"
    >
      {news?.map((e, idx) => (
        <GridItem key={idx} className="flex gap-5">
          <NewsCard news={e} fetchNews={fetchNews} />
        </GridItem>
      ))}
    </Grid>
  );
};
