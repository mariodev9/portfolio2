import React from "react";
import { motion } from "framer-motion";
import { Heading, Box, Text, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Tecnologies from "../../components/About/Tecnologies";
import Interfaces from "../../components/About/Interfaces";

const MotionTitle = motion(Text);

export default function Index() {
  return (
    <motion.div
      style={{
        position: "absolute",
        height: "110vh",
        overflow: "scroll",
        width: "100%",
        backgroundColor: "#10101A",
        color: "white",
      }}
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ y: 2000 }}
      transition={{
        duration: 0.75,
        ease: "easeInOut",
      }}
    >
      <Box p={{ base: "20vh 40px", tablet: "25vh 120px" }}>
        <motion.div>
          <MotionTitle
            as="h1"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            variant={"title"}
            fontSize={{ base: "55px", tablet: "80px" }}
          >
            Sobre mi
          </MotionTitle>
        </motion.div>
        {/* Texto */}
        <Flex justify={"center"} pl={{ base: 0, tablet: "120px" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            style={{ marginTop: "50px" }}
          >
            <Text fontSize={"22px"} mb="5px">
              Hola, mi nombre es Luciano Mariotti.
            </Text>
            <Text fontSize={"20px"}>
              Soy un programador web con gran afán por el diseño, resolver cosas
              interesantes, planear y concebir ideas creativas en el código. Me
              considero una persona curiosa por el mundo del desarollo web y
              trabajo dia a dia para mejorar mis habilidades.
            </Text>
          </motion.div>
        </Flex>

        <Tecnologies />
        <Interfaces />
      </Box>
    </motion.div>
  );
}
