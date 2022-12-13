import React from "react";
import { motion } from "framer-motion";
import { Heading, Box, Text, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Tecnologies from "../../components/About/Tecnologies";
import interfaces from "../../public/interfaces.jpg";
import codeparty from "../../public/codepartyScreen.jpg";

import Image from "next/image";

const MotionHeading = motion(Heading);

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
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.75,
        ease: "easeInOut",
      }}
    >
      <Box p={{ base: "20vh 40px", tablet: "30vh 120px" }}>
        <motion.div>
          <MotionHeading
            as="h1"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            fontFamily={"Guttie, sans serif"}
            size="4xl"
          >
            Sobre mi
          </MotionHeading>
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

        <Text align={"center"}>
          Ademas de desarrollar, disfruto de crear interfaces divertidas
        </Text>

        <Image src={interfaces} />
        <Image src={codeparty} />
      </Box>
    </motion.div>
  );
}
