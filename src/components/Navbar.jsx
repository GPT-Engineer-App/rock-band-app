import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <Box bg="brand.700" p={4}>
    <Flex justify="space-around">
      <Link as={NavLink} to="/" color="white" _hover={{ textDecoration: "none", color: "gray.300" }}>
        Home
      </Link>
      <Link as={NavLink} to="/concerts" color="white" _hover={{ textDecoration: "none", color: "gray.300" }}>
        Concerts
      </Link>
      <Link as={NavLink} to="/about" color="white" _hover={{ textDecoration: "none", color: "gray.300" }}>
        About Us
      </Link>
    </Flex>
  </Box>
);

export default Navbar;