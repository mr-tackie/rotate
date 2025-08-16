import React from "react";
import { Handle, Position } from "@xyflow/react";
import StacksIcon from "@/assets/stacks-icon";
import { ShieldCheck, ShieldX } from "lucide-react";
import MaskIcon from "@/assets/mask-icon";
import {
  Box, Flex, Text, Grid, HoverCardRoot,
  HoverCardContent,
  HoverCardTrigger,
  Portal
} from "@chakra-ui/react";
import {
  StartNodeContent,
  ProcessNodeContent,
  EndNodeContent,
} from "./content";

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
    <HoverCardRoot unstyled>
      <HoverCardTrigger asChild>
        <Box position="relative">
          <Flex direction="column" align="center" gap="1.5">
            {data.type === "start" ? (
              <MaskIcon style={{ height: "3.25rem", width: "3.25rem" }} />
            ) : (
              <Box position="relative">
                <StacksIcon style={{ height: "3.25rem", width: "3.25rem" }} />
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
                    }>
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
        zIndex="popover"
        w="auto" >
        {data.type === "start" && <StartNodeContent />}
        {data.type === "process" && <ProcessNodeContent />}
        {data.type === "end" && <EndNodeContent status={data.endStatus} />}
      </HoverCardContent>
    </HoverCardRoot>
  );
};

export default CustomNode;
