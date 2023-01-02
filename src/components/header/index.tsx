import React, { useState } from "react";
import {
  Flex,
  Box,
  IconButton,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { MdOutlineGridView } from "react-icons/md";
import { VscSymbolNamespace } from "react-icons/vsc";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { Link, Center } from '@chakra-ui/react'
import NextLink from 'next/link'
import BasicUsage from "../modal";

export interface NavItem {
  label: string;
  subLabel?: string;
  href?: string;
  nav?: string;
}

export interface NavItemProps {
  label?: string;
  href?: string;
  children?: NavItem[];
  nav?: string;
}


export const NAV_ITEMS: NavItemProps[] = [
  {
    label: "SOBRE",
    href: "sobre",
  },
  {
    label: "PROJETOS",
    href: "projetos",
  },
  {
    label: "CONTATO",
    href: "contato",
  },
];

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  return (
    <>
      <Flex
        background={'08060cf1'}
        color={useColorModeValue("gray.200", "gray.200")}
        minH={"60px"}
        py={{ base: 0 }}
        px={{ base: 4 }}
        borderBottom={1}
        paddingTop={2}
        align={"center"}
      >
        <Link
        as={NextLink}
        fontSize={25}
        fontWeight={700}
        href={'/'}
        className="logo">
          {'ryanvs'}
        </Link>
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
            onClick={() => setIsComponentVisible(true)}
          />
        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
      <Center ml={'1%'} w={'100%'}>
      <Box zIndex={'10'} className="margin"> 
      {isComponentVisible && <BasicUsage closemodal={() =>setIsComponentVisible(false)}/>}
      </Box>
      </Center>

    </>
  );
}
