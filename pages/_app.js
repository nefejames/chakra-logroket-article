import { ChakraProvider, ScaleFade } from "@chakra-ui/react";
import theme from "theme";
import Nav from "Nav";
function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <ScaleFade
        key={router.route}
        // animate={{ y: 0, opacity: 1 }}
        // initial={{ y: -16, opacity: 0 }}
        initialScale={0.9}
        in="true"
      >
        <Component {...pageProps} />
      </ScaleFade>
    </ChakraProvider>
  );
}

export default MyApp;
