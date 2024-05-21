import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const About = () => (
  <Box p={4}>
    <VStack spacing={4} align="stretch">
      <Heading as="h1" size="xl">About Us</Heading>
      <Text>We are a rock band dedicated to bringing you the best music experience.</Text>
    </VStack>
  </Box>
);

export default About;