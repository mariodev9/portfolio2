import React from "react";
import { motion } from "framer-motion";
import { Heading } from "@chakra-ui/react";

const MotionHeading = motion(Heading);

export default function index() {
  return (
    <motion.div
      style={{
        position: "absolute",
        height: "110vh",
        width: "100%",
        backgroundColor: "#fffae8",
      }}
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.75,
        ease: "easeInOut",
      }}
    >
      <motion.div className="section-title">
        <MotionHeading
          as="h1"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          fontFamily={"Guttie, sans serif"}
          size="4xl"
        >
          Sobre mi
        </MotionHeading>
      </motion.div>
    </motion.div>
  );
}
