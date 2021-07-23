import { Button, Center, VStack, Stack } from "@chakra-ui/react";

export default function Buttons() {
  return (
    <Center>
      <Stack direction={["column", "row"]} spacing="24">
        <VStack spacing={6}>
          <Button variant="primary" size="small">
            Primary
          </Button>
          <Button variant="primaryGhost" size="small">
            Primary
          </Button>
          <Button variant="primary" size="medium">
            Primary
          </Button>
          <Button variant="primary" size="large">
            Primary
          </Button>
        </VStack>
        <VStack spacing={6}>
          <Button variant="secondary" size="small">
            Secondary
          </Button>
          <Button variant="secondaryGhost" size="small">
            Secondary
          </Button>
          <Button variant="secondary" size="medium">
            Secondary
          </Button>
          <Button variant="secondary" size="large">
            Secondary
          </Button>
        </VStack>
      </Stack>
    </Center>
  );
}
