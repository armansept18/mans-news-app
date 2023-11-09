import { Center } from "@chakra-ui/react";
import React from "react";

export class Loading extends React.Component {
  render() {
    return (
      <Center className="gap-5 mt-14">
        <div className="loading loading-dots loading-lg"></div>
      </Center>
    );
  }
}
