'use client'

import { 
  Box, 
  VStack, 
  HStack, 
  Text, 
  Button,
  IconButton
} from '@chakra-ui/react'
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
} from '@chakra-ui/react'
import { 
  LayoutDashboard,
  Server,
  LogOut,
  X,
  ChevronLeft,
  ChevronRight,
  TriangleAlert,
  Cuboid,
  Unplug,
  FileText
} from 'lucide-react'
import { useState } from 'react'
import { Avatar } from '@/components/ui/avatar'
import { ColorModeButton } from '../ui/color-mode'

interface SidebarProps {
  isDesktop?: boolean
  isCollapsed?: boolean
  onToggleCollapse?: () => void
  isOpen?: boolean
  onClose?: () => void
  onOpen?: () => void
}

interface NavItemProps {
  icon: React.ReactNode
  label: string
  isActive?: boolean
  isCollapsed?: boolean
  onClick?: () => void
}

const NavItem = ({ icon, label, isActive = false, isCollapsed = false, onClick }: NavItemProps) => {
  return (
    <Button
      variant="ghost"
      justifyContent={isCollapsed ? 'center' : 'flex-start'}
      w="full"
      h="12"
      px={isCollapsed ? '2' : '4'}
      bg={isActive ? 'green.50' : 'transparent'}
      color={isActive ? 'green.700' : 'gray.600'}
      _hover={{ bg: 'green.50', color: 'green.700' }}
      _focus={{ 
        boxShadow: '0 0 0 2px green.500',
        bg: 'green.50' 
      }}
      onClick={onClick}
      role="menuitem"
      title={isCollapsed ? label : undefined}
    >
      {isCollapsed ? (
        icon
      ) : (
        <HStack gap="3" w="full">
          {icon}
          <Text fontSize="sm" fontWeight={isActive ? 'semibold' : 'medium'}>
            {label}
          </Text>
        </HStack>
      )}
    </Button>
  )
}

const SidebarContent = ({ 
  isCollapsed = false, 
  onToggleCollapse, 
  onItemClick 
}: { 
  isCollapsed?: boolean
  onToggleCollapse?: () => void
  onItemClick?: () => void 
}) => {
  const [activeItem, setActiveItem] = useState('dashboard')

  const navItems = [
    { icon: <LayoutDashboard fill="#A3A9B6" stroke='#A3A9B6' size={16} />, label: 'Lorem', id: 'dashboard' },
    { icon: <TriangleAlert fill='#A3A9B6' stroke='#A3A9B6' size={16} />, label: 'Lorem', id: 'security' },
    { icon: <Cuboid fill='#A3A9B6' stroke='#A3A9B6' size={16} />, label: 'Lorem', id: 'assets' },
    { icon: <Server fill='#A3A9B6' stroke='#A3A9B6' size={16} />, label: 'Lorem', id: 'network' },
    { icon: <Unplug fill='#A3A9B6' stroke='#A3A9B6' size={16} />, label: 'Lorem', id: 'users' },
    { icon: <FileText fill='#A3A9B6' stroke='#A3A9B6' size={16} />, label: 'Lorem', id: 'settings' },
    { icon: <FileText fill='#A3A9B6' stroke='#A3A9B6' size={16} />, label: 'Lorem', id: 'end' },
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
              isActive={activeItem === item.id}
              isCollapsed={isCollapsed}
              onClick={() => handleItemClick(item.id)}
            />
          ))}
        </VStack>
      </Box>
      <Box p="4" borderTop="1px" borderColor="gray.200">
        {isCollapsed ? (
          <VStack gap="2">
            <Avatar size="md" />
            <IconButton
              aria-label="Logout"
              size="sm"
              variant="ghost"
              _focus={{ 
                boxShadow: '0 0 0 2px blue.500' 
              }}
              title="Logout"
              w="8"
              h="8"
            >
              <LogOut size={16} />
            </IconButton>
          </VStack>
        ) : (
          <HStack gap="3">
            <Avatar size="sm" name="mr-tackie" />
            <VStack gap="0" align="start" flex="1">
              <Text fontSize="sm" fontWeight="medium" color="gray.800">
                Lorem
              </Text>
              <Text fontSize="xs" color="gray.500">
                Lorem
              </Text>
            </VStack>
            <IconButton
              aria-label="Logout"
              size="sm"
              variant="ghost"
              _focus={{ 
                boxShadow: '0 0 0 2px blue.500' 
              }}
              w="8"
              h="8"
            >
              <LogOut size={16} />
            </IconButton>
          </HStack>
        )}
      </Box>
    </VStack>
  )
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
        bg="bg"
      >
        <SidebarContent 
          isCollapsed={isCollapsed}
          onToggleCollapse={onToggleCollapse}
        />
      </Box>
    )
  }

  // Mobile drawer
  return (
    <DrawerRoot 
      open={isOpen} 
      onOpenChange={(details: {open: boolean}) => {
        if (details.open) {
          onOpen?.()
        } else {
          onClose?.()
        }
      }}
    >
      <DrawerBackdrop />
      <DrawerContent>
        <DrawerHeader>
          <DrawerCloseTrigger asChild>
            <Button variant="ghost" size="sm" aria-label="Close sidebar" onClick={onClose}>
              <X size={16} />
            </Button>
          </DrawerCloseTrigger>
        </DrawerHeader>
        <DrawerBody p="0">
          <ColorModeButton />
          <SidebarContent onItemClick={onClose} />
        </DrawerBody>
      </DrawerContent>
    </DrawerRoot>
  )
}