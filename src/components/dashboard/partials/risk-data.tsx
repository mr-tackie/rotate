'use client'

import { Heading } from '@/components/ui/heading'
import { Box, Grid, GridItem, } from '@chakra-ui/react'
import { AssetTable } from './asset-table';
import { RiskSummary } from './risk-summary';

export const RiskData = () => {
  return (
    <Box p={4}>
      <Heading>Lorem Ipsum Dolor Sint</Heading>
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={{ base: 4, md: 6 }}>
        <GridItem>
          <AssetTable />
        </GridItem>
        <GridItem>
          <RiskSummary />
        </GridItem>
      </Grid>
    </Box>
  )
}