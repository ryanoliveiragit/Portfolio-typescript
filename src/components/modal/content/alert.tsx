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
      <AlertIcon color={"pink.300"} w={15} />
      <Box>
        <AlertTitle
          fontSize={14}
          p={"0%"}
          w={"auto"}
          fontWeight={"300"}
          bgColor={"transparent"}
        >
          Copiado
        </AlertTitle>
      </Box>
      <CloseButton
        alignSelf="flex-start"
        position="relative"
        right={4}
        fontSize={8}
        top={-1}
        onClick={onClose}
      />
    </Alert>
  ) : (
    <button onClick={onOpen}>Copiar URL</button>
  );
}
export default AlertModal;
