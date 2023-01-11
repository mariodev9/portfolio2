import React from "react";
import { motion } from "framer-motion";
import { Flex, Box, Text, Image, Grid, HStack } from "@chakra-ui/react";
import { BitstoreIcon, GithubIcon, SiteIcon } from "../Icons";
import Link from "next/link";

export default function FeatureProject({
  name,
  pos,
  icon,
  backgroundColor,
  urlGithub,
  urlSite,
}) {
  return (
    <motion.div>
      <Flex>
        <Flex
          w={"40%"}
          h={"300px"}
          layerStyle={"whiteBox"}
          justify={"center"}
          align={"center"}
        >
          <BitstoreIcon />
        </Flex>
        <Flex
          w={"50%"}
          direction={"column"}
          justify={"space-around"}
          pos={"relative"}
          right={"0"}
        >
          {/* Si es par o impar end o start */}
          <Text textAlign={"end"} fontSize={"4xl"}>
            Codeparty
          </Text>
          <Box
            pos={"relative"}
            w={"120%"}
            right="20%"
            p={"25px 40px"}
            borderRadius={"15px"}
            bg={"#272727"}
          >
            <Text color={"#fff"} fontWeight={"medium"} fontSize={"18px"}>
              Tienda de camisetas basado en 8bitfootball. Mira las ultimas
              camisetas del momento de una forma divertida y elegí tus
              favoritas!
            </Text>
          </Box>
          <Flex justify={"end"} w={"100%"}>
            <Box>
              <Text fontWeight={"medium"}> Next.js Firebase</Text>
              <HStack justify={"end"} mt="15px" spacing={4}>
                <GithubIcon></GithubIcon>
                <SiteIcon></SiteIcon>
                {/* <Link href={urlGithub} target="_blank">
                  <GithubIcon
                    stroke={backgroundColor === "#272727" ? "#fff" : "#151515"}
                  />
                </Link>
                <Link href={urlSite} target="_blank">
                  <SiteIcon
                    stroke={backgroundColor === "#272727" ? "#fff" : "#151515"}
                  />
                </Link> */}
              </HStack>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </motion.div>
  );
}
