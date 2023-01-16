import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import {
  GithubIcon,
  LinkedinIcon,
  MariodevIcon,
  PokeappIcon,
  SiteIcon,
} from "../Icons";
import { motion } from "framer-motion";
import Link from "next/link";

const list = [
  {
    name: "Portfolio",
    icon: <MariodevIcon />,
    tecnologies: ["React.js, Bootstrap, Framer-motion"],
    urlGithub: "https://github.com/mariodev9/portfolio",
    urlSite: "https://mariodev.netlify.app/",
    description: "Portfolio donde cuento mis historia y mis projectos.",
  },
  {
    name: "Pokeapp",
    icon: <PokeappIcon />,
    tecnologies: ["React.js, Bootstrap"],
    urlGithub: "https://github.com/mariodev9/pokeappV3",
    urlSite: "https://pokemario.netlify.app/",
    description: "Una simple app donde puedes encontrar todos los pokemones",
  },
];

export default function OtherProjects() {
  return (
    <Box mt={"50px"}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Text fontSize={"25px"}>Otros Proyectos</Text>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <Wrap mt="20px" py="10px">
          {list.map((item, index) => (
            <WrapItem key={item.name} pb="15px">
              <Flex
                w="240px"
                h="300px"
                direction={"column"}
                justify={"center"}
                align="center"
                layerStyle={"whiteBox"}
                p={"20px"}
              >
                <HStack justify={"end"} w={"100%"} spacing={4}>
                  <Link href={item.urlGithub} target="_blank">
                    <GithubIcon width={"25px"} />
                  </Link>
                  <Link href={item.urlSite} target="_blank">
                    <SiteIcon width={"25px"} />
                  </Link>
                </HStack>

                <Flex
                  justify={"center"}
                  mt={"30px"}
                  h={"60px"}
                  align={"center"}
                >
                  {item.icon}
                </Flex>
                <Text
                  textAlign={"center"}
                  color={"#595959"}
                  fontWeight={"light"}
                  fontSize={"14px"}
                  mt={"20px"}
                >
                  {item.description}
                </Text>

                <HStack spacing={10} mt="10px">
                  {item.tecnologies.map((item) => (
                    <Text
                      key={item}
                      color={"#595959"}
                      fontWeight={"light"}
                      fontFamily={"monospace"}
                      fontSize={{ base: "10px", desktop: "12px" }}
                    >
                      {item}
                    </Text>
                  ))}
                </HStack>
              </Flex>
            </WrapItem>
          ))}
        </Wrap>
      </motion.div>
    </Box>
  );
}
