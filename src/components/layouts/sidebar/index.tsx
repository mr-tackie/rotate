'use client'

import { Box } from '@chakra-ui/react'
import { SidebarContent } from './sidebar-content'
import { MobileSidebar } from './mobile-sidebar'

interface SidebarProps {
  isDesktop?: boolean
  isCollapsed?: boolean
  onToggleCollapse?: () => void
  isOpen?: boolean
  onClose?: () => void
  onOpen?: () => void
}

export default function Sidebar({ 
  isDesktop = false, 
  isCollapsed = false,
  onToggleCollapse,
  isOpen = false, 
  onClose, 
  onOpen 
}: SidebarProps) {
  if (isDesktop) {
    return (
      <Box
        as="nav"
        role="navigation"
        aria-label="Main navigation"
        h="full"
        bg="green"
      >
        <SidebarContent 
          isCollapsed={isCollapsed}
          onToggleCollapse={onToggleCollapse}
        />
      </Box>
    )
  }
  
  return (
    <MobileSidebar
      isOpen={isOpen}
      onClose={onClose}
      onOpen={onOpen}
    />
  )
}