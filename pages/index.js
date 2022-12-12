import React from "react";
import {
  Box,
  Text,
  Flex,
  Heading,
  Button,
  Divider,
  Stack,
} from "@chakra-ui/react";
import { HeaderImage } from "../components/Header/HeaderImage";
import { motion } from "framer-motion";
import { ArrowIcon, GithubIcon, LinkedinIcon } from "../components/Icons";
import { useRouter } from "next/router";
import Link from "next/link";

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

export default function Index() {
  const router = useRouter();
  return (
    <>
      <motion.div
        style={{
          position: "absolute",
          height: "100vh",
          width: "100%",

          // backgroundColor: "green",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ x: -2000 }}
        transition={{
          duration: 0.75,
          ease: "easeInOut",
        }}
      >
        <Flex
          direction={{ base: "column", tablet: "row" }}
          p={{ base: "10vh 10px", tablet: "10vh 120px" }}
          justify={"center"}
        >
          <motion.div
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            style={{
              padding: "0px 30px",
            }}
          >
            <Text textAlign={{ base: "center", tablet: "initial" }}>
              Hola, me dicen
            </Text>
            <Text
              textAlign={{ base: "center", tablet: "initial" }}
              fontFamily={"Guttie, sans serif"}
              fontSize="80px"
            >
              Mario
            </Text>
            <Text
              textAlign={{ base: "center", tablet: "initial" }}
              fontSize="20px"
              fontWeight={400}
              // w="400px"
            >
              Desarrollador Front-end que disfruta de diseñar y plasmar ideas
              creativas en la web.
            </Text>
            <Flex
              justify={{ base: "center", tablet: "flex-start" }}
              mt="50px"
              onClick={() => router.push("/Proyects")}
            >
              <Flex width="200px" align={"center"} cursor={"pointer"}>
                <ArrowIcon />
                <Box p="0px 20px" fontSize={"22px"}>
                  <Text textTransform={"uppercase"}>Ver </Text>
                  <Text textTransform={"uppercase"}> Proyectos</Text>
                </Box>
              </Flex>
            </Flex>
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
        <Stack
          direction="column"
          pos={"absolute"}
          justify="center"
          align={"center"}
          bottom="60px"
          left={"30px"}
          h="180px"
          display={{ base: "none", tablet: "flex" }}
        >
          <Link href={"https://github.com/mariodev9/"} target={"_blank"}>
            <GithubIcon />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/luciano-mariotti/"}
            target={"_blank"}
          >
            <LinkedinIcon />
          </Link>

          <Divider orientation="vertical" w="1px" bg={"#151515"} opacity="1" />
        </Stack>
      </motion.div>
    </>
  );
}
