import React from "react";
import { Text, Box, Flex, Wrap } from "@chakra-ui/react";
import { motion } from "framer-motion";

const tecnologiesList = [
  "HTML",
  "CSS",
  "Javascript",
  "React.js",
  "Next.js",
  "Typescript",
  "PHP",
  "SQL",
  "Firebase",
  "Git",
  "Bootstrap",
  "Chakra UI",
  "Styled Components",
  "Framer Motion",
  "React-Hook-Form",
];

const MotionWrap = motion(Wrap);

const list = {
  hidden: { opacity: 0.1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const skill = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

export default function Tecnologies() {
  return (
    <>
      <Box m="20vh 0px">
        <Text fontSize={"30px"}>Tecnologias</Text>
        <MotionWrap
          mt="40px"
          spacing={"15px"}
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {tecnologiesList.map((item) => (
            <motion.div variants={skill} key={item}>
              <Box layerStyle={"skill"}>{item}</Box>
            </motion.div>
          ))}
        </MotionWrap>
      </Box>
    </>
  );
}
