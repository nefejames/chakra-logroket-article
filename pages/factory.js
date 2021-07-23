import Image from "next/image";
import { Box, Center, chakra, HStack, VStack } from "@chakra-ui/react";
import woman from "../public/woman.jpg";

const ChakraNextImage = chakra(Image);

//add custom link component with hover behavior or border bottom

export default function factory() {
  return (
    <Center>
      <HStack spacing={10}>
        <Box width="400px" h="400px" position="relative">
          <ChakraNextImage
            src={woman}
            alt="an img"
            layout="fill"
            objectFit="cover"
            borderRadius="full"
          />
        </Box>
      </HStack>
    </Center>
  );
}
