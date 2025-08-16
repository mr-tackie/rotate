'use client'

import { 
  Box,
  CardBody,
  CardRoot, 
} from '@chakra-ui/react'
import { NetworkFlowChart } from './network-flow-chart'
import { Divider } from '@/components/ui/divider'
import { RiskData } from './risk-data'

export const InfoSection = () => {
  return (
    <CardRoot p={6} bg="bg">
      <CardBody>
        <Box>
          <NetworkFlowChart />
          <Divider mt={8} mb={3} />
          <RiskData />
        </Box>
      </CardBody>
    </CardRoot>
  )
}