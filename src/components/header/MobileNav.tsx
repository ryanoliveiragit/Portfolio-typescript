import { Stack, useColorModeValue } from "@chakra-ui/react";
import { NAV_ITEMS } from ".";
import MobileNavItem from "./MobileNavItem";

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("transparent", "gray.400")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem, idx) => (
        <MobileNavItem key={idx} {...navItem} />
      ))}
    </Stack>
  );
};

export default MobileNav;
