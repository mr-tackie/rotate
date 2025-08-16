'use client'

import {
  Box,
  CardBody,
  CardRoot,
  VStack,
  Flex,
} from '@chakra-ui/react'
import { Heading } from '@/components/ui/heading'
import NetworkFlowChart from './network-flow-chart'
import { Divider } from '@/components/ui/divider'
import { RiskData } from './risk-data'
import Legend from './flowchart/legend'

export const InfoSection = () => {
  return (
    <CardRoot p={6} bg="bg" borderRadius="xl" boxShadow="dashboardCard">
      <CardBody
        order={{ base: 1, lg: 2 }}
        flexGrow="1"
        h={{ lg: "calc(100dvh - 3.5rem)" }}
        overflowY="scroll"
        borderRadius="2xl"
        bg="bg"
        boxShadow="0px 1px 3px 0px #0000000D"
      >
        <Box>
          <VStack gap="4" align="stretch" mb="4">
            <Heading>
              Lorem Lorem Lorem
            </Heading>
            <VStack
              gap="2.5"
              borderRadius="lg"
              px="2"
              py="4"
              bg="white"
              align="stretch">
              <NetworkFlowChart />
              <Divider mt={8} mb={3} />
              <Flex wrap="wrap">
                <Legend status="error" />
                <Legend status="warning" />
                <Legend status="success" />
              </Flex>
            </VStack>
          </VStack>
          <RiskData />
        </Box>
      </CardBody>
    </CardRoot>
  )
}