'use client'

import { Box, Flex, useDisclosure } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import Sidebar from './sidebar'
import MainContent from './main-content'
import { ColorModeButton } from '../ui/color-mode'

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  const { open, onOpen, onClose } = useDisclosure()
  const [isCollapsed, setIsCollapsed] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && open) {
        onClose()
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [open, onClose])

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <Flex h={{base: "auto", md: "100vh"}} bg="bg">
      <Box 
        display={{ base: 'none', md: 'block' }}
        w={isCollapsed ? '60px' : '250px'}
        transition="width 0.5s ease"
        bg="bg"
      >
        <Sidebar 
          isDesktop 
          isCollapsed={isCollapsed}
          onToggleCollapse={toggleCollapse}
        />
      </Box>
      <Sidebar 
        isOpen={open} 
        onClose={onClose} 
        isDesktop={false}
      />
      <MainContent onOpenSidebar={onOpen}>
        
        {children}
      </MainContent>
    </Flex>
  )
}