import React from "react";
import { Box, Text, Flex, Heading } from "@chakra-ui/react";
import { HeaderImage } from "../components/Header/HeaderImage";
import { motion } from "framer-motion";

const headerVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
  hidden: { opacity: 0, y: 20 },
};

export default function index() {
  return (
    <>
      <motion.div
        style={{ position: "absolute" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.75,
          ease: "easeInOut",
        }}
      >
        <Box p={{ base: "0px 20px", desktop: "0px 40px" }}>
          <Flex p={"15vh 0px"} direction={{ base: "column", tablet: "row" }}>
            <motion.div
              variants={headerVariants}
              initial="hidden"
              animate="visible"
            >
              <Text>HOLA, ME DICEN</Text>
              <Text fontFamily={"Guttie, sans serif"} fontSize="100px">
                Mario
              </Text>
              <Text fontSize="25px">
                Desarrollador front end que disfruta de diseñar y plasmar ideas
                creativas en la web.
              </Text>
            </motion.div>
            <Flex
              width={{ base: "100%", tablet: "50vw" }}
              align="center"
              justify={"center"}
            >
              <Box display={{ base: "none", tablet: "flex" }}>
                <HeaderImage />
              </Box>
            </Flex>
          </Flex>
        </Box>
      </motion.div>
    </>
  );
}
