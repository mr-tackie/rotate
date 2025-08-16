'use client'

import { 
    Box, 
    Grid,
    GridItem,
} from '@chakra-ui/react'
import DashboardContent from './partials/dashboard-content'
import { InfoSection } from './partials/info-section'
import { ColorModeButton } from '../ui/color-mode'


export default function Dashboard() {
  return (
    <Box bg="bg.subtle" minH="100vh" h={{sm: "100%", md: "auto"}} p="24px">
      <Box display="block" float="right">
        <ColorModeButton />
      </Box>
  <Grid templateColumns={{base: "1fr", md: "2fr 5fr"}} gap={6} h={{md: "calc(100vh - 48px)"}}>
        <GridItem maxH={{base: "auto", md: "calc(100vh - 48px)"}} overflow={{base: "visible", md:"hidden"}}>
          <DashboardContent />
        </GridItem>
      
        <GridItem maxH={{base: "auto", md: "calc(100vh - 48px)" }} overflow={{base: "visible", md:"hidden"}}>
            <InfoSection />
        </GridItem>
      </Grid>
    </Box>
  )
}