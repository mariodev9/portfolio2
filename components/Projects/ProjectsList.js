import { Flex, Box, Text, Image, Grid } from "@chakra-ui/react";
import React from "react";
import { BitstoreIcon, CodepartyIcon, FlashcardsIcon } from "../Icons";
import SingleProject from "./SingleProject";

const list = [
  {
    name: "Codeparty",
    icon: <CodepartyIcon />,
    backgroundColor: "#272727",
    urlGithub: "",
    urlSite: "https://codeparty-v2.vercel.app/Home",
  },
  {
    name: "Flashcards",
    icon: <FlashcardsIcon />,
    backgroundColor: "#fff",
    urlGithub: "",
    urlSite: "",
  },
  {
    name: "8bitstore",
    icon: <BitstoreIcon />,
    backgroundColor: "#fff",
    urlGithub: "",
    urlSite: "",
  },
];

export default function ProjectsList() {
  return (
    <Box>
      <Grid
        p="40px 0px"
        templateColumns={{ base: "repeat(1, 1fr)", desktop: "repeat(3, 1fr)" }}
        gap={6}
        h={{ base: "auto", desktop: "500px" }}
      >
        {list.map((item, index) => (
          <SingleProject
            key={item.name}
            name={item.name}
            pos={index}
            icon={item.icon}
            backgroundColor={item.backgroundColor}
            urlGithub={item.urlGithub}
            urlSite={item.urlSite}
          />
        ))}
      </Grid>
    </Box>
  );
}