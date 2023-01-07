import React from "react";
import { Box, Text, Flex, Image, VStack } from "@chakra-ui/react";
// import interfaces from "../../public/interfaces.jpg";
// import codeparty from "../../public/codepartyScreen.jpg";
// import Image from "next/image";

export default function Interfaces() {
  return (
    <Box>
      <Text align={"center"} fontSize={"20px"} mb="30px">
        Ademas de desarrollar, disfruto de crear interfaces divertidas
      </Text>
      <Flex>
        <Flex align={"center"} w="20%">
          <Image
            src={"images/codepartyScreen1.jpg"}
            alt="project screen"
            borderRadius={"15px"}
          />
        </Flex>
        <VStack spacing={2} m="0px 10px" w="20%">
          <Image
            src={"images/8bitfootballScreen1.png"}
            alt="project screen"
            borderRadius={"15px"}
          />
          <Image
            src={"images/pokemarioscreen.png"}
            alt="project screen"
            borderRadius={"15px"}
          />
          <Image
            src={"images/rickScreen1.png"}
            alt="project screen"
            borderRadius={"15px"}
            w="200px"
          />
        </VStack>
        <VStack spacing={2} justify={"center"} w="20%">
          <Image
            src={"images/codepartyScreen2.png"}
            alt="project screen"
            borderRadius={"15px"}
          />
          <Image
            src={"images/8bitfootballscreen4.jpg"}
            alt="project screen"
            borderRadius={"15px"}
          />
        </VStack>
        <VStack spacing={2} justify={"center"} m="0px 10px" w="20%">
          <Image
            src={"images/8bitfootballscreen3.png"}
            alt="project screen"
            borderRadius={"15px"}
          />
        </VStack>
        <VStack spacing={2} justify={"center"} m="0px 10px" w="20%">
          <Image
            src={"images/mariodev1screen.png"}
            alt="project screen"
            borderRadius={"15px"}
          />
          <Image
            src={"images/8bitfootballscreen2.png"}
            alt="project screen"
            borderRadius={"15px"}
          />
        </VStack>
      </Flex>
    </Box>
  );
}
