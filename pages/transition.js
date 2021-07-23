import {
  Box,
  Button,
  Center,
  useDisclosure,
  VStack,
  keyframes,
} from "@chakra-ui/react";
import { LightBulb } from "svgs";

const spin = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg)}

`;

export default function Transition() {
  const { onToggle, isOpen: animate } = useDisclosure();

  const animation = animate ? `${spin} infinite 2s linear` : null;

  return (
    <Center>
      <VStack spacing={20}>
        <Button onClick={onToggle}>Toggle Animation</Button>

        <Box animation={animation}>
          <LightBulb />
        </Box>
      </VStack>
    </Center>
  );
}
