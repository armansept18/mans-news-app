import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export const NewsCard = ({ news }) => {
  const publishedDate = new Date(news.publishedAt);
  const formattedDate = publishedDate.toLocaleDateString("us-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "Asia/Jakarta",
  });
  return (
    <Card maxW="sm" style={{ maxHeight: "750px" }}>
      <CardBody className="flex flex-col items-center">
        {news.urlToImage && (
          <Image
            src={news.urlToImage}
            alt="News"
            borderRadius="lg"
            maxW="250px"
            maxH="150px"
            height="100vh"
          />
        )}
        <Stack mt="6" spacing="3" style={{ width: "300px", height: "300px" }}>
          <Heading size="md">{news.title}</Heading>
          <Text fontWeight="200">
            {news.author} - {formattedDate}
          </Text>
          {news.description && (
            <Text className="text-ellipsis">{news.description}</Text>
          )}
        </Stack>
      </CardBody>
      <CardFooter>
        <a href={news.url} target="_blank" rel="noopener noreferrer">
          <Button variant="solid" colorScheme="blue">
            Read More ...
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};
