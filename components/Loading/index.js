import { Flex } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

export const LogoLoader = (props) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="171"
        height="155"
        viewBox="0 0 171 155"
        fill="none"
      >
        {/* SOMBRA */}
        <motion.rect
          initial={{ opacity: 0, scale: 2.7, y: 0 }}
          animate={{ opacity: 1, scale: 1, y: 5 }}
          transition={{
            default: {
              duration: 5,
              ease: [0, 0.1, 0.5, 0.8],
              type: "spring",
            },
            y: {
              delay: 1.7,
              type: "spring",
              damping: 2.5,
              stiffness: 80,
              restDelta: 1,
            },
          }}
          x="50"
          y="53"
          width="72"
          height="52"
          rx="15"
          fill="#BFB9B4"
        />
        <motion.g
          initial={{ opacity: 0, y: -200, scale: 1.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            default: {
              duration: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
              delay: 1.5,
            },
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 40,
              restDelta: 0.001,
            },
          }}
        >
          {/* Costados button */}
          <rect x="50" y="53" width="72" height="50" rx="15" fill="#8F8F8F" />

          {/* Parte de arriba */}
          <motion.g
            initial={{ y: -200 }}
            animate={{ y: -5 }}
            transition={{
              default: {
                transition: 0.5,
                ease: "easeOut",
                delay: 0.5,
              },
              y: {
                type: "spring",
                damping: 3.5,
                stiffness: 80,
                restDelta: 1,
              },
            }}
          >
            <rect x="50" y="49" width="72" height="50" rx="15" fill="white" />
            <path
              d="M97.424 65L94.424 81.992H89.12L90.608 73.544L86.504 81.992H81.944L80.816 73.472L79.328 81.992H74L77 65H83.528L85.472 75.224L90.92 65H97.424Z"
              fill="black"
            />
          </motion.g>
        </motion.g>
      </svg>
    </>
  );
};

export default function Loading({ isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: -100, opacity: 0 }}
          transition={{ delay: 4.5, duration: 1, type: "spring" }}
        >
          <Flex
            position={"absolute"}
            h="100vh"
            w="100%"
            bg="background.100"
            zIndex={6}
            justify={"center"}
            align="center"
          >
            <LogoLoader width="80px" height="80px" />
          </Flex>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
