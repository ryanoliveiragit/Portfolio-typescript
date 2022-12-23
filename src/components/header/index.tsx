import React from "react";
import {
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  color,
} from "@chakra-ui/react";
import { MdOutlineGridView } from "react-icons/md";
import { VscSymbolNamespace } from "react-icons/vsc";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export interface NavItem {
  label: string;
  subLabel?: string;
  href?: string;
  title?: string;
}

export interface NavItemProps {
  label?: string;
  href?: string;
  children?: NavItem[];
}

const iconStyle: React.CSSProperties = {
  backgroundColor: "#f3f3f3",
  fontSize: "2.5rem",
  padding: "0.5rem",
  borderRadius: "100%",
};

const iconSelect: React.CSSProperties = {
  backgroundColor: "#34D399",
  color: "white",
  fontSize: "2.7rem",
  padding: "0.5rem",
  borderRadius: "100%",
};

export const NAV_ITEMS: NavItemProps[] = [
  {
    label: "SHOP",
    href: "#",
  },
  {
    label: "SOBRE",
    href: "#",
  },
  {
    label: "PROJETOS",
    href: "#",
  },
  {
    label: "SETUP",
    href: "#",
  },
  {
    label: "SHOP",
    href: "#",
  },
];

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Flex
        bg={useColorModeValue("#08070b", "gray.800")}
        color={useColorModeValue("gray.500", "gray.500")}
        minH={"60px"}
        py={{ base: 0 }}
        px={{ base: 4 }}
        borderBottom={1}
        paddingTop={2}
        align={"center"}
      >
        <Text 
        fontSize={25}
        fontWeight={700}
        className="logo">
          {'ryanvs'}
        </Text>
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: 1 }}
          display={{ base: "flex", md: "none" }}
          justifyItems={{ base: "space-between" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "center" }}>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <MdOutlineGridView
            size={25}
            href={"#"}
            cursor={"pointer"}
            color={"white"}
          ></MdOutlineGridView>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </>
  );
}
