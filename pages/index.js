import { useEffect, useState } from "react";
import { Box, Text, Flex, Divider, Stack } from "@chakra-ui/react";
import { HeaderImage } from "../components/Header/HeaderImage";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowIcon,
  GithubIcon,
  LinkedinIcon,
  RotateIcon,
} from "../components/Icons";
import { useRouter } from "next/router";
import Link from "next/link";
import ProjectsButton from "../components/Header/ProjectsButton";
import Loading from "../components/Loading";
import SocialMedia from "../components/Header/SocialMedia";

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const router = useRouter();
  return (
    <>
      {loading ? (
        <Loading isVisible={loading} />
      ) : (
        <motion.div
          style={{
            position: "absolute",
            height: "100vh",
            width: "100%",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ y: 2000 }}
          transition={{
            duration: 0.75,
            ease: "easeInOut",
          }}
        >
          <Flex
            direction={{ base: "column", tablet: "row" }}
            p={{ base: "25vh 10px", tablet: "20vh 120px" }}
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
                variant={"title"}
              >
                Mario
              </Text>

              <Text
                textAlign={{ base: "center", tablet: "initial" }}
                fontSize="20px"
                fontWeight={400}
                // w="400px"
              >
                Desarrollador Front-end que disfruta de dise??ar y plasmar ideas
                creativas en la web.
              </Text>
              <ProjectsButton />
            </motion.div>
            <Flex
              width={{ base: "100%", tablet: "50vw" }}
              align="center"
              justify={"center"}
            >
              <Box
                pos={"absolute"}
                top={{ base: "20vh", tablet: "90px" }}
                right={{ base: "0px", tablet: "12%" }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 1 }}
                >
                  <RotateIcon />
                </motion.div>
              </Box>
              <Box display={{ base: "none", tablet: "flex" }}>
                <HeaderImage />
              </Box>
            </Flex>
          </Flex>
          <SocialMedia />
        </motion.div>
      )}
    </>
  );
}
