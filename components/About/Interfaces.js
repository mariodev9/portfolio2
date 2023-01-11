import React from "react";
import { Box, Text, Flex, Image, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Interfaces() {
  return (
    <Box pt={"30vh "}>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: -100 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        {/* <Text align={"center"} fontSize={"20px"} mb="30px">
        Ademas de desarrollar, disfruto de crear interfaces divertidas
      </Text> */}
        <Flex>
          <Flex align={"center"} w="20%">
            <Image
              src={"images/codepartyScreen1.jpg"}
              alt="project screen"
              borderRadius={{ base: "2px", tablet: "10px" }}
            />
          </Flex>
          <VStack spacing={2} m="0px 10px" w="20%">
            <Image
              src={"images/8bitfootballscreen1.png"}
              alt="project screen"
              borderRadius={{ base: "2px", tablet: "10px" }}
            />
            <Image
              src={"images/pokemarioscreen.png"}
              alt="project screen"
              borderRadius={{ base: "2px", tablet: "10px" }}
            />
            <Image
              src={"images/rickScreen1.png"}
              alt="project screen"
              borderRadius={{ base: "2px", tablet: "10px" }}
              w="200px"
            />
          </VStack>
          <VStack spacing={2} justify={"center"} w="20%">
            <Image
              src={"images/codepartyScreen6.jpg"}
              alt="project screen"
              borderRadius={{ base: "2px", tablet: "10px" }}
            />
            <Image
              src={"images/8bitfootballscreen4.jpg"}
              alt="project screen"
              borderRadius={{ base: "2px", tablet: "10px" }}
            />
          </VStack>
          <VStack spacing={2} justify={"center"} m="0px 10px" w="20%">
            <Image
              src={"images/8bitfootballscreen3.png"}
              alt="project screen"
              borderRadius={{ base: "2px", tablet: "10px" }}
            />
          </VStack>
          <VStack spacing={2} justify={"center"} m="0px 10px" w="20%">
            <Image
              src={"images/mariodev1screen.png"}
              alt="project screen"
              borderRadius={{ base: "2px", tablet: "10px" }}
            />
            <Image
              src={"images/8bitfootballscreen2.png"}
              alt="project screen"
              borderRadius={{ base: "2px", tablet: "10px" }}
            />
          </VStack>
        </Flex>
      </motion.div>
    </Box>
  );
}
