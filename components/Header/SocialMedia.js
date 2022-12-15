import React from "react";
import { Stack, Divider } from "@chakra-ui/react";
import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "../Icons";
import { motion } from "framer-motion";

export default function SocialMedia() {
  const MotionStack = motion(Stack);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
    >
      <Stack
        direction="column"
        pos={"absolute"}
        justify="center"
        align={"center"}
        bottom="0px"
        left={"35px"}
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
  );
}
