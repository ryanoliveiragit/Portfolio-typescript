import {
  Box,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { NAV_ITEMS } from ".";
import NextLink from "next/link";
import DesktopSubNav from "./DesktopSubNav";

const DesktopNav = () => {
  const linkColor = useColorModeValue("#8f9ba8", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        // eslint-disable-next-line react/jsx-key
        <Box>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                as={NextLink}
                p={4}
                href={navItem.href ?? "#"}
                fontSize={"12px"}
                letterSpacing={"1.2px"}
                fontWeight={500}
                color={linkColor}
                textDecoration={"none"}
                className={"animate"}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                m={-4}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child, idx) => (
                    <DesktopSubNav key={idx} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

export default DesktopNav;
