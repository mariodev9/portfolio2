import { Box, Flex, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import { MariodevIcon, PokeappIcon } from "../Icons";

const list = [
  {
    name: "Codeparty",
    icon: <MariodevIcon />,
    urlGithub: "",
    urlSite: "https://codeparty-v2.vercel.app/Home",
  },
  {
    name: "Pokeapp",
    icon: <PokeappIcon />,
    urlGithub: "",
    urlSite: "",
  },
  {
    name: "8bitstore",
    icon: "StickStore",
    urlGithub: "",
    urlSite: "",
  },
];

export default function OtherProjects() {
  return (
    <Box>
      <Text fontSize={"25px"}>Otros Proyectos</Text>
      <Wrap mt="50px" py="10px">
        {list.map((item, index) => (
          <WrapItem key={item.name} pb="15px">
            <Flex
              w="200px"
              h="150px"
              justify={"center"}
              align="center"
              bg="#fff"
              borderRadius="15px"
              boxShadow="0px 5px 4px #00000012"
            >
              {item.icon}
            </Flex>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
}
