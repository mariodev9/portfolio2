import { Flex } from "@chakra-ui/react";
import { LogoLoader } from "../Icons";
import { motion, AnimatePresence } from "framer-motion";

export default function Loading({ isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 0, opacity: 0 }}
          transition={{ delay: 4.5 }}
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
