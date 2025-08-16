'use client'

import { 
    Box, 
    Grid,
    GridItem,
} from '@chakra-ui/react'
import DashboardContent from './partials/dashboard-content'
import { InfoSection } from './partials/info-section'


export default function Dashboard() {
  return (
    <Box bg="bg.subtle" minH="100vh" p="24px">
      <Grid templateColumns={{base: "1fr", md: "1fr 3fr"}} gap={6} h="calc(100vh - 48px)">
        <GridItem maxH={{base: "auto", md: "calc(100vh - 48px)"}} overflow="hidden">
          <DashboardContent />
        </GridItem>
        
        <GridItem maxH={{base: "auto", md: "calc(100vh - 48px)" }}overflow="hidden">
            <InfoSection />
        </GridItem>
      </Grid>
    </Box>
  )
}