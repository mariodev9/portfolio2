import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
} from "@chakra-ui/react";

import { Menu } from "../../Icons";

export default function Navigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        display={{ base: "none", tablet: "flex" }}
        py={{ base: 5 }}
        align={"center"}
        justify={"space-between"}
      >
        <Box>MARIODEV.</Box>
        <DesktopNav />
      </Flex>

      <MobileNav />
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.title}>{navItem.title}</Box>
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
        px={{ base: 2 }}
      >
        <Box>MARIODEV.</Box>
        <Button m={4} onClick={onOpen}>
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
                <Box key={navItem.title}>
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
    title: "Sobre mi",
    url: "/about",
  },
  {
    title: "Proyectos",
    url: "/proyects",
  },
  {
    title: "Contacto",
    url: "/contact",
  },
];
