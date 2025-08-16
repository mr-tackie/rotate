import { IBM_Plex_Mono } from "next/font/google";
import { ReceiptText, ShieldCheck, ShieldX } from "lucide-react";
import { Server } from "lucide-react";
import { Box, Flex, Text, Grid, VStack } from "@chakra-ui/react";

const ibmPlex = IBM_Plex_Mono({
  weight: "600",
  subsets: ["latin"],
});

export const Pill = ({ color, bg }: { color: string; bg: string }) => (
  <Text
    as="span"
    borderRadius="md"
    px="1"
    py="0.5"
    fontSize="0.875rem"
    fontWeight="600"
    fontFamily={ibmPlex.style.fontFamily}
    color={color}
    bg={bg}>
    1.2.3.4
  </Text>
);

export const StartNodeContent = () => (
  <Box
    w="460px"
    borderRadius="20px"
    bg="#FAFAFA"
    px="7"
    py="5"
    boxShadow="xsm"
    fontSize="0.875rem"
    fontWeight="600"
    lineHeight="1.5rem"
    fontFamily={ibmPlex.style.fontFamily}>
    <Box mb="3" color="#E5372B">
      <Text mb="3" w="216px" borderRadius="lg" bg="#FFF1F0">
        Lorem Ipsum Dolor Sit
      </Text>
      <Flex wrap="wrap" justify="flex-end" gap="1">
        {["1.2.3.4", "1.2.3.4", "1.2.3.4", "1.2.3.4", "1.2.3.4", "1.2.3.4"].map(
          (text, index) => (
            <Text key={index} w="110px" borderRadius="lg" bg="#FFF1F0">
              {text}
            </Text>
          )
        )}
      </Flex>
    </Box>
    <Box display="inline-block" borderRadius="lg" bg="#F2EDFF" px="1" py="0.5">
      <Text color="#6236CC">Lorem: 1.2.3.4</Text>
    </Box>
  </Box>
);

export const ProcessNodeContent = () => (
  <VStack
    w="374px"
    gap="1.5"
    borderRadius="lg"
    bg="#FAFAFA"
    px="4"
    py="2.5"
    boxShadow="0px 4px 4px 0px #00000040"
    align="stretch">
    <Flex align="center" gap="3">
      <Box p={4} bg="blue.subtle" borderRadius="full">
            <Server height={30} width={30} color="#3182CE" />
        </Box>
      <Text fontSize="0.875rem" fontWeight="600" color="#525D73">
        Loremipsu
      </Text>
    </Flex>
    <Flex
      wrap="wrap"
      align="center"
      gap="1"
      fontSize="1rem"
      fontWeight="700"
      lineHeight="1.5"
      color="#525D73">
      <ReceiptText size={16} color="#858D9D" />
      <Text as="span">Lorem:</Text>
      <Text as="span">Loremipsum Loremipsum</Text>
      <Pill color="#6236CC" bg="#F2EDFF" />
    </Flex>
    <Flex
      wrap="wrap"
      align="center"
      gap="1"
      fontWeight="700"
      lineHeight="1.5"
      color="#525D73">
      <Pill color="#6236CC" bg="#F2EDFF" />
      <Text as="span">Loremipsum</Text>
      <Pill color="#6236CC" bg="#F2EDFF" />
      <Pill color="#6236CC" bg="#F2EDFF" />
    </Flex>
  </VStack>
);

export const EndNodeContent = ({
  status,
}: {
  status?: "success" | "error" | "warning";
}) => {
  const endStatusColors = {
    success: "#02983E",
    error: "#E5372B",
    warning: "#FF9500",
  };

  return (
    <VStack
      w="288px"
      gap="1.5"
      borderRadius="lg"
      bg="#FAFAFA"
      px="4"
      py="2.5"
      boxShadow="0px 4px 4px 0px #00000040"
      align="stretch">
      <Flex align="center" gap="3">
        <Box position="relative">
          <Server style={{ height: "2.5rem", width: "2.5rem" }} />
          <Grid
            position="absolute"
            top="-1.5"
            right="-1.5"
            h="6"
            w="6"
            placeItems="center"
            borderRadius="full"
            bg={status ? endStatusColors[status] : "transparent"}>
            {status === "success" ? (
              <ShieldCheck size={16} color="white" />
            ) : (
              <ShieldX size={16} color="white" />
            )}
          </Grid>
        </Box>
        <VStack align="stretch" gap="1">
          <Text fontSize="0.875rem" fontWeight="600" color="#525D73">
            Loremipsumdolorsit
          </Text>
          <Text
            fontSize="0.75rem"
            fontWeight="600"
            lineHeight="0.875rem"
            color="#667085">
            192.168.1.1
          </Text>
        </VStack>
      </Flex>

      <Flex wrap="wrap" align="center" gap="1">
        <ReceiptText size={16} color="#858D9D" />
        <Text
          as="span"
          fontSize="1rem"
          lineHeight="1.5"
          fontWeight="700"
          color="#525D73">
          Lorem:
        </Text>
        <Text
          as="span"
          borderRadius="md"
          bg="#FFF9ED"
          px="1"
          py="0.5"
          fontSize="0.875rem"
          lineHeight="1.5"
          fontWeight="600"
          fontFamily={ibmPlex.style.fontFamily}
          color="#EBA622">
          Lorem &quot;ipsum&quot;
        </Text>
      </Flex>

      <Flex wrap="wrap" align="center" gap="1">
        <Text
          as="span"
          fontSize="1rem"
          lineHeight="1.5"
          fontWeight="700"
          color="#525D73">
          Loremipsum
        </Text>
        <Text
          as="span"
          borderRadius="md"
          bg="#ECF5FF"
          px="1"
          py="0.5"
          fontSize="0.875rem"
          lineHeight="1.5"
          fontWeight="600"
          fontFamily={ibmPlex.style.fontFamily}
          color="#0053B5">
          Lorem 1234,5678
        </Text>
      </Flex>
    </VStack>
  );
};
