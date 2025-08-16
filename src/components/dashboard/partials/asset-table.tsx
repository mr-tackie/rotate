'use client'

import { Box, CardRoot, CardBody, Table, Flex, VStack, Text, Skeleton, SkeletonText } from '@chakra-ui/react'
import { ChevronLeft, ChevronRight, Server } from 'lucide-react'
import { useAssetTableData } from '@/hooks/use-dashboard-content'

export const AssetTable = () => {
  const { data: tableData, isLoading } = useAssetTableData()

  if (isLoading) {
    return (
      <CardRoot shadow="xs" borderRadius="xl">
        <CardBody>
          <Table.Root w="full" border="none">
            <Table.Header>
              <Table.Row>
                {["Asset", "Contextual Risk"].map((header) => (
                  <Table.ColumnHeader
                    key={header}
                    borderBottom="1px solid"
                    borderColor="bg.muted"
                    px="6"
                    py="2.5"
                    fontSize="sm"
                    lineHeight="1.25rem"
                    color="fg.subtle">
                    {header}
                  </Table.ColumnHeader>
                ))}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {Array.from({ length: 2 }).map((_, index) => (
                <Table.Row key={index}>
                  <Table.Cell
                    borderBottom="1px solid"
                    borderColor="bg.muted"
                    p="2">
                    <Flex align="center" gap="2">
                      <Skeleton
                        height="40px"
                        width="40px"
                        borderRadius="full"
                      />
                      <VStack align="start" gap={0} flex="1">
                        <SkeletonText
                          noOfLines={1}
                          width="70%"
                        />
                        <SkeletonText
                          noOfLines={1}
                          width="50%"
                        />
                      </VStack>
                    </Flex>
                  </Table.Cell>
                  <Table.Cell
                    borderBottom="1px solid"
                    borderColor="bg.muted"
                    px="6"
                    py="0">
                    <Skeleton
                      height="24px"
                      width="80px"
                      borderRadius="full"
                    />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </CardBody>
      </CardRoot>
    )
  }

  return (
    <CardRoot borderRadius="15px" borderColor="bg.muted" borderWidth="1px" shadow="xs">
      <CardBody>
        <Table.Root w="full" borderRadius="2xl">
          <Table.Header>
            <Table.Row>
              {["Asset", "Contextual Risk"].map((header) => (
                <Table.ColumnHeader
                  key={header}
                  borderBottom="1px solid"
                  borderColor="bg.muted"
                  px="6"
                  py="2.5"
                  fontSize="sm"
                  lineHeight="1.25rem"
                  color="fg.subtle">
                  {header}
                </Table.ColumnHeader>
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {tableData?.map((risk, index) => (
              <Table.Row key={risk.ip + index}>
                <Table.Cell
                  borderBottom="1px solid"
                  borderColor="bg.muted"
                  p="2">
                  <Flex align="center" gap="2">
                    <Box p={4} bg="blue.subtle" borderRadius="full">
                      <Server size={20} color="#3182CE" />
                    </Box>
                    <VStack align="start" gap={0}>
                      <Text
                        mb="1"
                        fontSize="sm"
                        fontWeight="600"
                        lineHeight="sm"
                        color="fg.muted">
                        {risk.name}
                      </Text>
                      <Text
                        as="span"
                        fontSize="2xs"
                        fontWeight="500"
                        lineHeight="0.625rem"
                        color="fg.subtle">
                        {risk.ip}
                      </Text>
                    </VStack>
                  </Flex>
                </Table.Cell>
                <Table.Cell
                  borderBottom="1px solid"
                  borderColor="bg.muted"
                  px="6"
                  py="0">
                  <Text
                    as="span"
                    borderRadius="38px"
                    bg="red.subtle"
                    px="4"
                    py="1"
                    fontSize="md"
                    fontWeight="600"
                    color="red.solid"
                    textTransform="capitalize">
                    {risk.risk}
                  </Text>
                </Table.Cell>
              </Table.Row>
            ))}
            <Table.Row>
              <Table.Cell colSpan={2} py="3">
                <Flex w="full" align="center" justify="center">
                  <button aria-label="Previous page">
                    <ChevronLeft size={20} color="#C2C6CE" />
                  </button>
                  <Text fontSize="0.875rem" color="#667085">
                    Showing 1-2 of 2
                  </Text>
                  <button aria-label="Next page">
                    <ChevronRight size={20} color="#858D9D" />
                  </button>
                </Flex>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </CardBody>
    </CardRoot>
  )
}