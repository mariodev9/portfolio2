import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { RotateIcon } from "../components/Icons";
import Loading from "../components/Loading";
// header components
import ProjectsButton from "../components/Header/ProjectsButton";
import { HeaderImage } from "../components/Header/HeaderImage";
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
            h={"100vh"}
            direction={{ base: "column", tablet: "row" }}
            p={{ base: "25vh 10px", tablet: "20vh 120px" }}
            justify={"center"}
            align={"center"}
          >
            <motion.div
              variants={headerVariants}
              initial="hidden"
              animate="visible"
              style={{
                padding: "0px 30px",
                order: 2,
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
                Desarrollador Front-end que disfruta de diseñar y plasmar ideas
                creativas en la web.
              </Text>
              <ProjectsButton />
            </motion.div>
            <Flex
              width={{ base: "100%", tablet: "50vw" }}
              align="center"
              justify={"center"}
            >
              {/* Rotate Icon */}
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
              {/* Header Image */}
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
