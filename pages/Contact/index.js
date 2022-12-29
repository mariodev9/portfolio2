import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import { GithubIcon, LinkedinIcon } from "../../components/Icons";

export default function ContactPage() {
  const { scrollYProgress } = useScroll();
  const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.8]);

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
      exit={{ opacity: 0 }}
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
        <Heading
          as="h1"
          fontFamily={"Guttie, sans serif"}
          size="4xl"
          textAlign={"center"}
          pb="40px"
        >
          Contacto
        </Heading>
        <Flex justify={"center"}>
          <Text textAlign={"center"} w="90%">
            Mi bandeja de entrada siempre esta abierta para cualquier consulta
            que quieras hacerme. <br></br>Te responderé lo mas rápido posible!
          </Text>
        </Flex>
        <Flex justify={"center"} mt="50px">
          <Button layerStyle={"whiteBox"} w="220px" fontSize="20px" p="25px ">
            Hablemos
          </Button>
        </Flex>
        <Box p="20px 0px">
          <Flex justify={"center"} gap="10px">
            <Button layerStyle={"whiteBox"} w="105px">
              <GithubIcon />
            </Button>
            <Button
              layerStyle={"whiteBox"}
              w="105px"
              _hover={{ bgColor: "none" }}
            >
              <LinkedinIcon />
            </Button>
          </Flex>
        </Box>
      </Flex>
    </motion.div>
  );
}
