import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { LogoIcon, Menu } from "../../Icons";

const navbarVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
  hidden: { opacity: 0, y: -20 },
};

export default function Navigation() {
  return (
    <motion.div
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      style={{
        // backgroundColor: "blue",
        position: "absolute",
        zIndex: 3,
        width: "100%",
      }}
    >
      <MobileNav />
    </motion.div>
  );
}

const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  return (
    <>
      <Flex
        justify={"space-between"}
        align={"center"}
        // display={{ base: "flex", tablet: "none" }}
        py={{ base: 1 }}
        px={{ base: "40px" }}
      >
        <Box>
          <Link href={"/"}>
            <LogoIcon />
          </Link>
        </Box>
        <Button my={4} onClick={onOpen} bg="none" _hover={{ bg: "none" }}>
          <Menu />
        </Button>
      </Flex>

      {/* Drawer */}
      <Drawer onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay />
        <DrawerContent bg={"#FFF7F0"}>
          <DrawerCloseButton />
          <DrawerBody display={"flex"} justifyContent={"center"}>
            <VStack spacing={10} justify={"center"}>
              {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.title} onClick={onClose}>
                  <Text fontSize={"42px"} fontFamily={"Guttie"}>
                    <Link href={navItem.url}>{navItem.title}</Link>
                  </Text>
                </Box>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const NAV_ITEMS = [
  {
    title: "SOBRE MI",
    url: "/About",
  },
  {
    title: "PROYECTOS",
    url: "/Proyects",
  },
  {
    title: "CONTACTO",
    url: "/Contact",
  },
];
