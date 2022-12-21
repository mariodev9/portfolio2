import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import interfaces from "../../public/interfaces.jpg";
import codeparty from "../../public/codepartyScreen.jpg";
import Image from "next/image";

export default function Interfaces() {
  return (
    <Box>
      <Text align={"center"} fontSize={"20px"}>
        Ademas de desarrollar, disfruto de crear interfaces divertidas
      </Text>
      <Flex>
        <Image src={codeparty} alt="project screen" />
      </Flex>
      <Image src={interfaces} alt="project screen" />
    </Box>
  );
}
