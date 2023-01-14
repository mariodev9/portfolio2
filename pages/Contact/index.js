import {
  Box,
  Button,
  Flex,
  Heading,
  shouldForwardProp,
  Text,
} from "@chakra-ui/react";
import {
  isValidMotionProp,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import React from "react";
import { GithubIcon, LinkedinIcon } from "../../components/Icons";
import { chakra } from "@chakra-ui/react";
import PrimaryButton from "../../components/Common/PrimaryButton";
import Link from "next/link";

export default function ContactPage() {
  const MotionButton = chakra(motion.button, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });

  return (
    <motion.div
      style={{
        position: "absolute",
        height: "110vh",
        width: "100%",
        overflow: "scroll",
      }}
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ y: 2000 }}
      transition={{
        duration: 0.75,
        ease: "easeInOut",
      }}
    >
      <Flex
        p={{ base: "20vh 40px", tablet: "25vh 120px" }}
        justify="center"
        direction="column"
      >
        <Text
          textAlign={"center"}
          pb="40px"
          variant={"title"}
          fontSize={{ base: "55px", tablet: "80px" }}
        >
          Contacto
        </Text>
        <Flex justify={"center"}>
          <Text textAlign={"center"} w="90%">
            Mi bandeja de entrada siempre esta abierta para cualquier consulta
            que quieras hacerme. <br></br>Te responderé lo mas rápido posible!
          </Text>
        </Flex>
        <Flex justify={"center"} mt="50px">
          <Link href={"mailto:luciano.mariotti99@gmail.com"}>
            <PrimaryButton width={"230px"}>Hablemos</PrimaryButton>
          </Link>
        </Flex>
        <Box p="20px 0px">
          <Flex justify={"center"} gap="5px">
            <Link href={"https://github.com/mariodev9/"} target={"_blank"}>
              <PrimaryButton>
                <GithubIcon />
              </PrimaryButton>
            </Link>
            <Link
              href={"https://www.linkedin.com/in/luciano-mariotti/"}
              target={"_blank"}
            >
              <PrimaryButton>
                <LinkedinIcon />
              </PrimaryButton>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </motion.div>
  );
}
