'use client'

import { 
  Box, 
  Button
} from '@chakra-ui/react'
import { Menu } from 'lucide-react'

interface MainContentProps {
  children: React.ReactNode
  onOpenSidebar: () => void
}

export default function MainContent({ children, onOpenSidebar }: MainContentProps) {
  return (
    <Box flex="1" bg="gray.50" overflow="hidden">
      <Box
        display={{ base: 'flex', md: 'none' }}
        h="16"
        px="4"
        alignItems="center"
        bg="white"
        borderBottom="1px"
        borderColor="gray.200"
        shadow="sm"
      >
        <Button
          variant="ghost"
          size="sm"
          aria-label="Open sidebar"
          onClick={onOpenSidebar}
          _focus={{ 
            boxShadow: '0 0 0 2px blue.500' 
          }}
          _hover={{
            bg: 'gray.50'
          }}
        >
          <Menu size={20} />
        </Button>
      </Box>
      <Box
        h={{ base: 'calc(100vh - 4rem)', md: '100vh' }}
        overflow="auto"
        role="main"
        aria-label="Main content"
      >
        {children}
      </Box>
    </Box>
  )
}