import Link from "next/link";
import { Box, Center, HStack } from "@chakra-ui/react";
import {} from "@chakra-ui/react";
export default function Nav() {
  return (
    <Center
      bg="red"
      p={3}
      mb="100px"
      as="nav"
      // sx={{ position: "fixed", width: "100%", bg: "green" }} //stlyes defined using sx overwrite others
    >
      <HStack spacing={10}>
        <Link href="/">
          <a>Svg</a>
        </Link>
        <Link href="/buttons">
          <a>Buttons</a>
        </Link>
        <Link href="/font">
          <a>Font Size</a>
        </Link>
        {/* <Link href="/blog">
          <a>Blog</a>
        </Link> */}
        <Link href="/factory">
          <a>factory</a>
        </Link>
        <Link href="/transition">
          <a>transition</a>
        </Link>
      </HStack>
    </Center>
  );
}
