import { Grid, GridItem } from "@chakra-ui/react";
import { NewsCard } from "./newsCard";

export const NewsList = ({ news = [], fetchNews }) => {
  console.log("NewsList - News Data:", news);
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={8}>
      {news?.map((e, idx) => (
        <GridItem key={idx} className="flex gap-5">
          <NewsCard news={e} fetchNews={fetchNews} />
        </GridItem>
      ))}
    </Grid>
  );
};
