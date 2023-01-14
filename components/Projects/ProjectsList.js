import {
  Flex,
  Box,
  Text,
  Image,
  Grid,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BitstoreIcon, CodepartyIcon, FlashcardsIcon } from "../Icons";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import FeatureProject from "./FeatureProject";

const list = [
  {
    name: "Codeparty",
    icon: <CodepartyIcon />,
    backgroundColor: "#272727",
    tecnologies: ["Next.js, Firebase"],
    urlGithub: "https://github.com/mariodev9/CodepartyV2",
    urlSite: "https://codeparty-v2.vercel.app/Home",
    description:
      "Red social donde puedes conectarte con otros desarrolladores! Puedes crear tu perfil incluyendo tu stack de tecnologias de una forma divertida, compartir, interactuar y comentar publicaciones.",
  },
  {
    name: "8bitstore",
    icon: <BitstoreIcon />,
    backgroundColor: "#fff",
    tecnologies: ["Next.js, Framer-motion, Firebase, Chakra UI"],
    urlGithub: "https://github.com/mariodev9/8bitStore",
    urlSite: "https://8bit-store.vercel.app/",
    description:
      "Tienda de camisetas basado en 8bitfootball. Mira las ultimas camisetas del momento de una forma divertida y elegí tus favoritas!",
  },
  {
    name: "Flashcards",
    icon: <FlashcardsIcon />,
    backgroundColor: "#fff",
    tecnologies: ["Next.js, Typescript, Firebase, Chakra UI"],
    urlGithub: "https://github.com/frontendcafe/air-flashcards",
    urlSite: "",
    description:
      "Esta aplicación resuelve un problema de estudio mediante la creación de colecciones de cartas. A su vez estas cartas te ayudaran a aprender conceptos para facilitar el proceso de aprendizaje",
  },
];

export default function ProjectsList() {
  const [isLargerThan750] = useMediaQuery("(max-width: 750px)");

  return (
    <VStack spacing={5} mt={"10px"}>
      {isLargerThan750
        ? list.map((item, index) => (
            <SingleProject
              key={item.name}
              name={item.name}
              pos={index}
              description={item.description}
              icon={item.icon}
              urlGithub={item.urlGithub}
              urlSite={item.urlSite}
            />
          ))
        : list.map((item, index) => (
            <FeatureProject
              key={item.name}
              name={item.name}
              pos={index}
              icon={item.icon}
              backgroundColor={item.backgroundColor}
              urlGithub={item.urlGithub}
              urlSite={item.urlSite}
              description={item.description}
              tecnologies={item.tecnologies}
            />
          ))}
    </VStack>
  );
}
