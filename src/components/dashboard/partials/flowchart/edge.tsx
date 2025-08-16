import React from "react";
import { BaseEdge, type EdgeProps, getBezierPath } from "@xyflow/react";

const CustomMarker = () => (
  <marker
    id="custom-arrow"
    viewBox="0 0 4 4"
    markerWidth="4"
    markerHeight="4"
    refX="4"
    refY="2"
    orient="auto"
  >
    <path d="M 0 0 L 4 2 L 0 4 Z" fill="#525D73" />
  </marker>
);

const CustomEdge = ({
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
}: EdgeProps) => {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <defs>
        <CustomMarker />
      </defs>
      <BaseEdge
        path={edgePath}
        markerEnd="url(#custom-arrow)"
        style={{
          ...style,
          stroke: "#525D73",
          strokeWidth: 1,
        }}
      />
    </>
  );
};

export default CustomEdge;
