import React from "react";
import { ReactFlow, type Node, type Edge } from "@xyflow/react";
import CustomEdge from "./flowchart/edge";
import CustomNode from "./flowchart/node";
import "@xyflow/react/dist/style.css";
import { Box, Text, VStack  } from "@chakra-ui/react";
const nodeStyle: React.CSSProperties = {
  width: "max-content",
};

const FlowDiagram = () => {
  const nodes: Node[] = [
    {
      id: "node1",
      data: { label: "Loremipsumm", type: "start" },
      position: { x: 0, y: 100 },
      type: "custom",
      style: nodeStyle,
    },
    {
      id: "node2",
      data: { label: "Loremipsu", type: "process" },
      position: { x: 200, y: 100 },
      type: "custom",
      style: nodeStyle,
    },
    {
      id: "node3",
      data: { label: "Loremipsu", type: "process" },
      position: { x: 400, y: 100 },
      type: "custom",
      style: nodeStyle,
    },
    {
      id: "node4",
      data: {
        label: () => (
          <VStack textAlign="center">
            <Text
              fontSize="0.875rem"
              fontWeight="600"
              lineHeight="0.875rem"
              color="#525D73">
              Loremipsumdolorsit
            </Text>
            <Text
              as="span"
              fontSize="0.75rem"
              fontWeight="500"
              lineHeight="0.875rem"
              color="#667085">
              192.168.1.1
            </Text>
          </VStack>
        ),
        type: "end",
        endStatus: "error",
      },
      position: { x: 750, y: 25 },
      type: "custom",
      style: nodeStyle,
    },
    {
      id: "node5",
      data: {
        label: () => (
          <VStack textAlign="center">
            <Text
              fontSize="0.875rem"
              fontWeight="600"
              lineHeight="0.875rem"
              color="#525D73">
              Loremipsumdolorsit
            </Text>
            <Text
              as="span"
              fontSize="0.75rem"
              fontWeight="500"
              lineHeight="0.875rem"
              color="#667085">
              192.168.1.2
            </Text>
          </VStack>
        ),
        type: "end",
        endStatus: "error",
      },
      position: { x: 750, y: 175 },
      type: "custom",
      style: nodeStyle,
    },
  ];

  const edges: Edge[] = [
    { id: "edge1", source: "node1", target: "node2", type: "custom" },
    { id: "edge2", source: "node2", target: "node3", type: "custom" },
    { id: "edge3", source: "node3", target: "node4", type: "custom" },
    { id: "edge4", source: "node3", target: "node5", type: "custom" },
  ];

  return (
    <Box h="300px" w="full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={{ custom: CustomNode }}
        edgeTypes={{ custom: CustomEdge }}
      />
    </Box>
  );
};

export default FlowDiagram;