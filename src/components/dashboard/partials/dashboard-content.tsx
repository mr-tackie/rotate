'use client'
import { useDashboardContent } from "@/hooks/use-dashboard-content";
import { Card, Skeleton, SkeletonText, Spacer, Stack, Text, Box } from "@chakra-ui/react"
import { Heading } from "@/components/ui/heading";
import { Divider } from "@/components/ui/divider";
import { DataTable } from "./data-table";
import { ServerAccordion } from "./server-accordion-item";

const DashboardSkeleton = () => {
  return (
    <Stack>
      <Skeleton height="40px" mb={6} />
      <SkeletonText noOfLines={4} />
      <Spacer mb={16} />
      <Skeleton height="40px" mb={6} />
      <SkeletonText noOfLines={4} />
    </Stack>
  )
}

const DescriptionSection = () => {
  const { data: dashboardContent, isLoading } = useDashboardContent();

  if (isLoading) {
    return <DashboardSkeleton />
  }

  return (
    <Box>
      <Heading mb={4}>Description</Heading>
      <Text fontSize="xs" color="fg.muted" lineHeight="21px">{dashboardContent?.description}</Text>
      <Spacer mb={16} />
      <Heading mb={4}>Extra</Heading>
      <Text fontSize="xs" color="fg.muted" lineHeight="21px">
        {dashboardContent?.extra}
      </Text>
    </Box>
  )
}

export default function DashboardContent() {
  return (
    <Card.Root p="20px 30px" boxShadow="dashboardCard" h="100%" bg="bg" borderRadius="2xl" overflowY={{base: "visible", md: "auto"}}
      css={{
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#CBD5E0',
          borderRadius: '24px',
        },
      }}
    >
      <Card.Body>
        <Box>
          <DescriptionSection />
          <Divider mt={8} mb={0} />
          <DataTable />
          <Divider mt={3} mb={4} />
          <ServerAccordion />
        </Box>
      </Card.Body>
    </Card.Root>
  )
}
