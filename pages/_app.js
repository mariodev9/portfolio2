import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { theme } from "../styles";
import "../styles/globals.css";
import { useRouter } from "next/router";
import Navigation from "../components/Layout/Navigation";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ChakraProvider theme={theme}>
      {/* se eliminito initial: false */}
      <AnimatePresence mode={"wait"}>
        <Navigation />
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </ChakraProvider>
  );
}

export default MyApp;
