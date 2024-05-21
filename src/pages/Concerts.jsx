import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Concerts = () => (
  <Box p={4}>
    <VStack spacing={4} align="stretch">
      <Heading as="h1" size="xl">Upcoming Concerts</Heading>
      <Text>Stay tuned for our upcoming concerts!</Text>
    </VStack>
  </Box>
);

export default Concerts;