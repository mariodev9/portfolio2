import React, { useState } from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ArrowIcon } from "../Icons";
import { useRouter } from "next/router";
import PrimaryButton from "../Common/PrimaryButton";

export default function ProjectsButton() {
  const [isHovered, setHovered] = useState(false);

  const router = useRouter();

  return (
    <Flex
      justify={{ base: "center", tablet: "flex-start" }}
      mt="10vh"
      onClick={() => router.push("/Proyects")}
    >
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: "200px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
        }}
      >
        <PrimaryButton padding={"15px 20px"}>
          <ArrowIcon isHovered={isHovered} />
        </PrimaryButton>
        <Box p="0px 20px" fontSize={"22px"}>
          <Text textTransform={"uppercase"}>Ver </Text>
          <Text textTransform={"uppercase"}> Proyectos</Text>
        </Box>
      </motion.div>
    </Flex>
  );
}
