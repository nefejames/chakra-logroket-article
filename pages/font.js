import { Text, Heading, Box, Stack, Center } from "@chakra-ui/react";

export default function Font() {
  return (
    <Center>
      <Stack direction="column" spacing="5">
        <Heading size="small">Heading small</Heading>
        <Heading size="medium">Heading medium</Heading>
        <Heading size="large">Heading large</Heading>
      </Stack>
    </Center>
  );
}
