import { useState } from "react";
import {
  Box,
  Flex,
  GridItem,
  Icon,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { CodepartyIcon, GithubIcon, SiteIcon } from "../Icons";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SingleProject({
  name,
  pos,
  icon,
  backgroundColor,
  urlGithub,
  urlSite,
}) {
  const [isHovered, setHovered] = useState(false);
  const [isLargerThan900] = useMediaQuery("(max-width: 900px)");

  const MotionFlex = motion(Flex);

  return (
    <GridItem
      alignSelf={
        pos === 1
          ? { base: "start", desktop: "center" }
          : pos === 2 && { base: "start", desktop: "end" }
      }
    >
      <MotionFlex
        justify={"center"}
        align="center"
        borderRadius="15px"
        h="200px"
        w="250px"
        bg={backgroundColor}
        boxShadow="0px 5px 4px #00000012"
        cursor="pointer"
        onMouseEnter={() => !isLargerThan900 && setHovered(true)}
        onMouseLeave={() => !isLargerThan900 && setHovered(false)}
        onTap={() => isLargerThan900 && setHovered(!isHovered)}
      >
        <motion.div
          animate={{ scale: isHovered ? 1 : 0 }}
          initial={{ scale: isHovered ? 0 : 1 }}
          style={{ position: "absolute" }}
        >
          <Flex gap="10">
            {/* agregar que si bg === #272727 se ponga blanco los icons */}
            <Link href={urlGithub} target="_blank">
              <GithubIcon
                stroke={backgroundColor === "#272727" ? "#fff" : "#151515"}
              />
            </Link>
            <Link href={urlSite} target="_blank">
              <SiteIcon
                stroke={backgroundColor === "#272727" ? "#fff" : "#151515"}
              />
            </Link>
          </Flex>
        </motion.div>
        <motion.div
          animate={{ scale: isHovered ? 0 : 1 }}
          initial={{ scale: isHovered ? 1 : 0 }}
        >
          {icon}
        </motion.div>
      </MotionFlex>
      <Text p="10px 0px" fontSize={"18px"}>
        {name}
      </Text>
      <Flex
        position={"relative"}
        left="210px"
        bottom="65px"
        justify={"center"}
        align="center"
        h="40px"
        w="50px"
        bg="black.100"
        borderRadius="10px"
      >
        <Text color="white">{pos + 1}</Text>
      </Flex>
    </GridItem>
  );
}
