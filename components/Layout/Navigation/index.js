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
import { motion, useScroll, useViewportScroll } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import PrimaryButton from "../../Common/PrimaryButton";
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
        position: "absolute",
        zIndex: 3,
        width: "100%",
        background: "rgba( 255, 255, 255, 0 )",
        backdropFilter: "blur( 7px )",
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
      <Flex justify={"space-between"} align={"center"} py="10px" px="40px">
        <Box>
          <Link href={"/"}>
            {/* <LogoIcon /> */}
            <PrimaryButton padding={"8px 23px"}>
              <Text>M</Text>
            </PrimaryButton>
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
                  <Text variant={"title"} fontSize={"42px"}>
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
