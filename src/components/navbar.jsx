import { Button } from "@chakra-ui/react";

export const Navbar = () => {
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
      <div className="flex items-center justify-around gap-14">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact Us</a>
      </div>
      <div className="flex items-center justify-around gap-7">
        <Button colorScheme="green">Login</Button>
        <Button colorScheme="facebook">Register</Button>
      </div>
    </nav>
  );
};
