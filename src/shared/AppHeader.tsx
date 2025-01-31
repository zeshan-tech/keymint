import { Box, Card, Heading } from "@chakra-ui/react";

export default function AppHeader() {
  return (
    <Box p={4} as={Card}>
      <Heading fontSize={"x-large"} textAlign={"center"} fontWeight="bold">
        Key Mint <small>(Password Generator)</small>
      </Heading>
    </Box>
  );
}
