import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  CloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

function AlertModal() {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: false });

  return isVisible ? (
    <Alert
      p={"0%"}
      w={"auto"}
      fontWeight={"300"}
      bgColor={"transparent"}
      status="success"
    >
      <AlertIcon w={15} />
      <Box>
        <AlertTitle
          fontSize={14}
          p={"0%"}
          w={"auto"}
          fontWeight={"300"}
          bgColor={"transparent"}
        >
          Copiado!
        </AlertTitle>
      </Box>
      <CloseButton
        alignSelf="flex-start"
        position="relative"
        right={3}
        fontSize={9}
        top={-2}
        onClick={onClose}
      />
    </Alert>
  ) : (
    <Button
      fontSize={16}
      p={"0%"}
      w={"auto"}
      fontWeight={"300"}
      bgColor={"transparent"}
      _hover={{ backgroundColor: "none" }}
      onClick={onOpen}
    >
      Copiar URL
    </Button>
  );
}
export default AlertModal;
