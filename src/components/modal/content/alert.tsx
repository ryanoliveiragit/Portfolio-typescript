import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  CloseButton,
  useDisclosure,
  Text,
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
      <Box>
        <AlertTitle
          fontSize={14}
          p={"0%"}
          w={"auto"}
          fontWeight={"300"}
          bgColor={"transparent"}
        >
          <Text fontSize={14}>Copiado</Text>
        </AlertTitle>
      </Box>
      <CloseButton
        alignSelf="flex-start"
        position="relative"
        right={5}
        display={'none'}
        fontSize={5}
        color={'pink.300'}
        top={-1}
        onClick={onClose}
      />
    </Alert>
  ) : (
    <Text onClick={onOpen} fontSize={14}>Copiar URL</Text>
  );
}
export default AlertModal;
