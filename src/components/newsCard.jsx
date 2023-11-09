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
import React from "react";

export class NewsCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formattedDate: null,
    };
  }
  componentDidMount() {
    this.setFormattedDate();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.news.publishedAt !== this.props.news.publishedAt) {
      this.setFormattedDate();
    }
  }
  setFormattedDate() {
    const { news } = this.props;

    if (news.publishedAt) {
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
      this.setState({ formattedDate });
    }
  }
  render() {
    const { news } = this.props;
    const { formattedDate } = this.state;

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
              {news.author} - {formattedDate || "Invalid Date"}
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
  }
}
