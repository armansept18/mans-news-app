import { Button } from "@chakra-ui/react";
import React from "react";

export class Navbar extends React.Component {
  render() {
    return (
      <nav
        className="flex items-center justify-between"
        style={{
          backgroundColor: "lightblue",
          padding: "10px 40px",
          position: "fixed",
          top: "0",
          maxWidth: "100vw",
          width: "100vw",
          zIndex: "100",
        }}
      >
        <b>Man's News</b>
        {/* <div className="flex items-center justify-around gap-8">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact Us</a>
      </div> */}
        <div className="flex items-center justify-around gap-4">
          <Button colorScheme="green">Login</Button>
          <Button colorScheme="facebook">Register</Button>
        </div>
      </nav>
    );
  }
}
