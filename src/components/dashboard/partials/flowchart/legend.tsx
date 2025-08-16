import { ShieldCheck, ShieldX } from "lucide-react";
import { Flex, Grid, Text } from "@chakra-ui/react";

type LegendProps = {
  status: "success" | "error" | "warning";
};

const Legend = ({ status }: LegendProps) => {
  const statusColors = {
    success: "#02983E",
    error: "#E5372B",
    warning: "#FF9500",
  };

  return (
    <Flex mx="3" align="center" gap="2">
      <Grid
        h="6"
        w="6"
        placeItems="center"
        borderRadius="full"
        bg={statusColors[status]}>
        {status === "success" ? (
          <ShieldCheck size={16} color="white" />
        ) : (
          <ShieldX size={16} color="white" />
        )}
      </Grid>
      <Text
        fontSize="0.9375rem"
        fontWeight="700"
        lineHeight="2.375rem"
        color={statusColors[status]}>
        Lorem
      </Text>
    </Flex>
  );
};

export default Legend;
