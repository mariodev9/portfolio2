import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heading, Box, Flex, Text } from "@chakra-ui/react";
import ProjectsList from "../../components/Projects/ProjectsList";
import OtherProjects from "../../components/Projects/OtherProjects";
import { useEffect } from "react";

const MotionHeading = motion(Heading);

export default function Proyects() {
  const { scrollYProgress } = useScroll();
  const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.8]);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      console.log("Page scroll: ", latest);
    });
  }, []);

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
      <Box p={{ base: "20vh 40px", tablet: "25vh 120px" }}>
        <motion.div>
          {/* <MotionHeading
            as="h1"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            variant={"title"}
            size="4xl"
          >
            Proyectos
          </MotionHeading> */}
          <Text variant={"title"}>Proyectos</Text>
        </motion.div>

        <ProjectsList />

        <OtherProjects />
      </Box>
    </motion.div>
  );
}
