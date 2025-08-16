import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Box, Flex, Text, Grid } from "@chakra-ui/react";
import { Handle, Position } from "@xyflow/react";
import { ShieldCheck, ShieldX } from "lucide-react";
import MaskIcon from "@/assets/mask-icon";
import StacksIcon from "@/assets/stacks-icon";
import {
  StartNodeContent,
  ProcessNodeContent,
  EndNodeContent,
} from "./content";

interface CustomNodeProps {
  data: {
    id: string;
    label: string | (() => React.JSX.Element);
    type: "start" | "process" | "end" | "process2";
    endStatus?: "success" | "error" | "warning";
  };
}

const CustomNode = ({ data }: CustomNodeProps) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const [popoverPosition, setPopoverPosition] = useState({ top: 0, left: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const endStatusColors = {
    success: "#02983E",
    error: "#E5372B",
    warning: "#FF9500",
  };

  useEffect(() => {
    if (isHovered && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPopoverPosition({
        top: rect.top + window.scrollY + rect.height + 10, // Adjust position below the trigger
        left: rect.left + window.scrollX, // Align with the trigger
      });
    }
  }, [isHovered]);

  return (
    <>
      <Box
        ref={triggerRef}
        position="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
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
        {(data.type === "process" || data.type === "process2") && (
          <>
            <Handle type="target" position={Position.Left} />
            <Handle type="source" position={Position.Right} />
          </>
        )}
        {data.type === "end" && (
          <Handle type="target" position={Position.Left} />
        )}
      </Box>
      {isHovered &&
        ReactDOM.createPortal(
          <Box
            position="absolute"
            zIndex="9999"
            bg="white"
            boxShadow="lg"
            borderRadius="md"
            w="auto"
            style={{
              position: "absolute",
              top: `${popoverPosition.top}px`,
              left: `${popoverPosition.left}px`,
            }}
          >
            {data.type === "start" && <StartNodeContent />}
            {data.type === "process" && <ProcessNodeContent id={data.id}/>}
            {data.type === "end" && <EndNodeContent status={data.endStatus} />}
          </Box>,
          document.body
        )}
    </>
  );
};

export default CustomNode;