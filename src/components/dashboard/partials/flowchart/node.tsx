import React from "react";
import { Handle, Position } from "@xyflow/react";
import { ShieldCheck, ShieldX, Server, VenetianMask } from "lucide-react";
import { Box, Flex, Text, Grid, HoverCard, HoverCardTrigger, HoverCardContent } from "@chakra-ui/react";
import { EndNodeContent, ProcessNodeContent, StartNodeContent } from "./content";
interface CustomNodeProps {
  data: {
    label: string | (() => React.JSX.Element);
    type: "start" | "process" | "end";
    endStatus?: "success" | "error" | "warning";
  };
}

const CustomNode = ({ data }: CustomNodeProps) => {
  const endStatusColors = {
    success: "#02983E",
    error: "#E5372B",
    warning: "#FF9500",
  };

  return (
    <HoverCard.Root>
      <HoverCardTrigger asChild>
        <Box>
          <Flex direction="column" align="center" gap="1.5">
            {data.type === "start" ? (
              <Box p={4} bg="red.subtle" borderRadius="full">
                <VenetianMask color="#E6372B" height={30} width={30} />
              </Box>
            ) : (
              <Box position="relative">
                <Box p={4} bg="blue.subtle" borderRadius="full">
                  <Server height={30} width={30} color="#3182CE" />
                </Box>
                {data.type === "end" && (
                  <Grid
                    position="absolute"
                    top="-1.5"
                    right="-1.5"
                    h="6"
                    w="6"
                    placeItems="center"
                    borderRadius="full"
                    bg={
                      data.endStatus
                        ? endStatusColors[data.endStatus]
                        : "transparent"
                    }
                  >
                    {data.endStatus === "success" ? (
                      <ShieldCheck size={16} color="white" />
                    ) : (
                      <ShieldX size={16} color="white" />
                    )}
                  </Grid>
                )}
              </Box>
            )}
            {typeof data.label === "string" ? (
              <Text fontSize="0.875rem" fontWeight="600" color="#525D73">
                {data.label}
              </Text>
            ) : (
              <data.label />
            )}
          </Flex>
          {data.type === "start" && (
            <Handle type="source" position={Position.Right} />
          )}
          {data.type === "process" && (
            <>
              <Handle type="target" position={Position.Left} />
              <Handle type="source" position={Position.Right} />
            </>
          )}
          {data.type === "end" && (
            <Handle type="target" position={Position.Left} />
          )}
        </Box>
      </HoverCardTrigger>
      <HoverCardContent
        position="absolute"
        top="100%"
        left="50%"
        transform="translate(-50%, 10px)"
        zIndex="popover"
        bg="white"
        boxShadow="lg"
        borderRadius="md"
        p={4}
      >
        {data.type === "start" && <StartNodeContent />}
        {data.type === "process" && <ProcessNodeContent />}
        {data.type === "end" && <EndNodeContent />}
      </HoverCardContent>
    </HoverCard.Root>
  );
};

export default CustomNode;