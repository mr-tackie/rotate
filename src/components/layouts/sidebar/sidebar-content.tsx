'use client'

import { Box, IconButton, VStack } from '@chakra-ui/react'
import { 
  ChevronLeft, 
  ChevronRight,
  LayoutDashboard,
  Shield,
  Database,
  Server,
  Users,
  Settings,
} from 'lucide-react'
import { useState } from 'react'
import { NavItem } from './nav-item'
import { UserProfile } from './user-profile'

interface SidebarContentProps {
  isCollapsed?: boolean
  onToggleCollapse?: () => void
  onItemClick?: () => void
}

export const SidebarContent = ({ 
  isCollapsed = false, 
  onToggleCollapse, 
  onItemClick 
}: SidebarContentProps) => {
  const [activeItem, setActiveItem] = useState('Dashboard')

  const navItems = [
    { icon: <LayoutDashboard size={16} />, label: 'Dashboard', id: 'dashboard' },
    { icon: <Shield size={16} />, label: 'Security', id: 'security' },
    { icon: <Database size={16} />, label: 'Assets', id: 'assets' },
    { icon: <Server size={16} />, label: 'Network', id: 'network' },
    { icon: <Users size={16} />, label: 'Users', id: 'users' },
    { icon: <Settings size={16} />, label: 'Settings', id: 'settings' },
  ]

  const handleItemClick = (itemLabel: string) => {
    setActiveItem(itemLabel)
    onItemClick?.()
  }

  return (
    <VStack gap="0" h="full" align="stretch" position="relative">
      {onToggleCollapse && (
        <Box position="absolute" top="4" right="-12px" zIndex="10">
          <IconButton
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            size="sm"
            variant="solid"
            borderRadius="full"
            onClick={onToggleCollapse}
            bg="green.800"
            color="white"
            _hover={{ bg: 'green.600' }}
            _focus={{ 
              boxShadow: '0 0 0 2px green.200' 
            }}
            w="6"
            h="6"
            minW="6"
          >
            {isCollapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
          </IconButton>
        </Box>
      )}
      <Box flex="1" py="4" role="menu">
        <VStack gap="1" px={isCollapsed ? '2' : '3'}>
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              isActive={activeItem === item.label}
              isCollapsed={isCollapsed}
              onClick={() => handleItemClick(item.label)}
            />
          ))}
        </VStack>
      </Box>
      <UserProfile isCollapsed={isCollapsed} />
    </VStack>
  )
}