import React from "react";
import { motion } from "framer-motion";
import { Flex, Box, Text, Image, Grid, HStack } from "@chakra-ui/react";
import { BitstoreIcon, GithubIcon, SiteIcon } from "../Icons";
import Link from "next/link";

export default function FeatureProject({
  name,
  pos,
  description,
  icon,
  urlGithub,
  urlSite,
}) {
  const invert = pos % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <Flex m="40px 0px" align={"center"}>
        <Flex
          w={"50%"}
          direction={"column"}
          justify={"space-around"}
          align={invert ? "start" : "end"}
          order={invert ? 1 : 2}
        >
          <Text textAlign={"start"} fontSize={"4xl"}>
            {name}
          </Text>
          <Box
            w={"120%"}
            p={"25px 40px"}
            borderRadius={"15px"}
            bg={"#272727"}
            zIndex={99}
          >
            <Text
              color={"#fff"}
              fontWeight={"medium"}
              fontSize={{ base: "12px", desktop: "18px" }}
            >
              {description}
            </Text>
          </Box>

          <Flex justify={invert ? "start" : "end"} w={"100%"}>
            <Box>
              <Text mt={"5px"} fontWeight={"medium"}>
                Next.js Firebase
              </Text>

              <HStack justify={invert ? "start" : "end"} mt="15px" spacing={4}>
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
        <Flex
          w={"50%"}
          h={{ base: "200px", tablet: "250px", desktop: "300px" }}
          layerStyle={"whiteBox"}
          justify={"center"}
          align={"center"}
          pos={"relative"}
          right={"0"}
          order={invert ? 2 : 1}
        >
          {icon}
        </Flex>
      </Flex>
    </motion.div>
  );
}
