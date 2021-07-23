import Head from "next/head";
import { Button, Center, Stack, useColorMode, Box } from "@chakra-ui/react";

import { LightBulb, Moon, Sun, Vercel } from "../svgs";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Head>
        <title>Next Chakra UI Theme</title>
      </Head>

      <Center>
        <Box>
          <Center>
            <Button onClick={toggleColorMode}>
              Switch to {colorMode === "light" ? "Dark" : "Light"}
            </Button>
          </Center>

          <Stack direction={["column", "row"]} spacing="24px" mt={14}>
            <LightBulb colorMode={colorMode} />
            <Moon colorMode={colorMode} />
            <Sun colorMode={colorMode} />
            <Vercel colorMode={colorMode} />
          </Stack>
        </Box>
      </Center>
    </div>
  );
}
