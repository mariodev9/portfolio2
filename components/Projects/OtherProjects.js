import { Box, Flex, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { MariodevIcon, PokeappIcon } from "../Icons";
import { motion } from "framer-motion";

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
      </motion.div>
    </Box>
  );
}
