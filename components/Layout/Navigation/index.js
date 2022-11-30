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
import { Menu } from "../../Icons";

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
  const { isOpen, onToggle } = useDisclosure();

  return (
    <motion.div variants={navbarVariants} initial="hidden" animate="visible">
      <Flex
        display={{ base: "none", tablet: "flex" }}
        align={"center"}
        justify={"space-between"}
        p={{ tablet: "20px 40px" }}
      >
        <Box>MARIODEV.</Box>
        <DesktopNav />
      </Flex>
      <MobileNav />
    </motion.div>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.title}>
          <Link href={navItem.url}>{navItem.title}</Link>
        </Box>
      ))}
      <Box>github - linkedin</Box>
    </Stack>
  );
};

const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        justify={"space-between"}
        align={"center"}
        display={{ base: "flex", tablet: "none" }}
        py={{ base: 1 }}
        px={{ base: "20px" }}
      >
        <Box>MARIODEV.</Box>
        <Button my={4} onClick={onOpen}>
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
    title: "Inicio",
    url: "/",
  },
  {
    title: "Sobre mi",
    url: "/About",
  },
  {
    title: "Proyectos",
    url: "/Proyects",
  },
  {
    title: "Contacto",
    url: "/Contact",
  },
];
