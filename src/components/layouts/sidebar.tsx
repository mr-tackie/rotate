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
  LogOut,
  X,
  ChevronLeft,
  ChevronRight,
  LogIn
} from 'lucide-react'
import { useState } from 'react'
import { Avatar } from '@/components/ui/avatar'
import { ColorModeButton } from '../ui/color-mode'
import DashboardIcon from "@/assets/dashboard-icon";
import TriangleAlert from "@/assets/triangle-alert";
import CuboidIcon from "@/assets/cuboid-icon";
import ShrinkIcon from "@/assets/shrink-icon";
import UnplugIcon from "@/assets/unplug-icon";
import DocIcon from "@/assets/doc-icon ";
import BarsIcon from "@/assets/bars-icon";
import SettingsIcon from "@/assets/settings-icon ";
import NotificationIcon from "@/assets/notification-icon";
import LogoutIcon from "@/assets/logout-icon";
import { Divider } from '../ui/divider'

interface SidebarProps {
  isDesktop?: boolean
  isCollapsed?: boolean
  onToggleCollapse?: () => void
  isOpen?: boolean
  onClose?: () => void
  onOpen?: () => void
}

interface NavItemProps {
  icon: React.ElementType
  label: string
  isActive?: boolean
  isCollapsed?: boolean
  onClick?: () => void
}

const NavItem = ({ icon: Icon, label, isActive = false, isCollapsed = false, onClick }: NavItemProps) => {
  return (
    <Button
      variant="ghost"
      justifyContent={isCollapsed ? 'center' : 'flex-start'}
      w="full"
      h="12"
      p={isCollapsed ? '2' : '4'}
      bg={isActive ? 'active' : 'transparent'}
      color="menuItem"
      _hover={{ bg: 'gray.50', color: "gray.fg" }}
      _focus={{
        bg: 'active'
      }}
      fontWeight="normal"
      onClick={onClick}
      role="menuitem"
      title={isCollapsed ? label : undefined}
      css={{
        '&:hover span': {
          color: 'gray.800', 
        },
      }}
    >
      {isCollapsed ? (
        <Box as="span" color={isActive ? "gray.800" : "#A3A9B6"} transition="color 0.2s ease-in-out" _hover={{ color: "gray.800" }}>
          <Icon />
        </Box>
      ) : (
        <HStack gap="3" w="full">
          <Box as="span" color={isActive ? "gray.800" : "#A3A9B6"} transition="color 0.2s ease-in-out" _hover={{ color: "gray.800" }}>
            <Icon />
          </Box>
          <Text fontSize="sidebar" color="menuItem">
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
  const [activeItem, setActiveItem] = useState('network')

  const navItems = [
    { icon: DashboardIcon, label: 'Lorem', id: 'dashboard' },
    { icon: TriangleAlert, label: 'Lorem', id: 'security' },
    { icon: CuboidIcon, label: 'Lorem', id: 'assets' },
    { icon: ShrinkIcon, label: 'Lorem', id: 'network' },
    { icon: UnplugIcon, label: 'Lorem', id: 'users' },
    { icon: DocIcon, label: 'Lorem', id: 'settings' },
    { icon: BarsIcon, label: 'Lorem', id: 'end' },
  ]

  const bottomNavItems = [
    {
      icon: SettingsIcon, label: 'Lorem', id: 'settings2'
    },
    {
      icon: NotificationIcon, label: 'Lorem', id: 'notifications'
    }
  ]

  const handleItemClick = (itemLabel: string) => {
    setActiveItem(itemLabel)
    onItemClick?.()
  }

  return (
    <VStack
      gap="0"
      h="full"
      align="stretch"
      position="relative"
      boxShadow="sidebar"
      borderRadius="xl"
      p="28px 16px"
    >
      {onToggleCollapse && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="absolute"
          top="12"
          right="-12px"
          zIndex="10"
          bg="bg.muted"
          h="32px"
          w="32px"
          borderRadius="full">
          <IconButton
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            size="sm"
            variant="solid"
            borderRadius="full"
            onClick={onToggleCollapse}
            bg="primary"
            color="white"
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
      <Box>
        <Box py="4" px={isCollapsed ? '-3' : '3'} role="menu">
        {bottomNavItems.map((item) => (
          <NavItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            isActive={activeItem === item.id}
            isCollapsed={isCollapsed}
            onClick={() => handleItemClick(item.id)}
          />
        ))}
        </Box>
        <Divider />
        {isCollapsed ? (
          <VStack gap="2">
            <Avatar src="/user-img.png" size="md" />
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
            <Avatar src="/user-img.png" size="xl" name="mr-tackie" />
            <VStack gap="0" align="start" flex="1">
              <Text fontSize="sidebar" color="menuItem">
                Lorem
              </Text>
              <Text fontSize="sidebar" color="menuItem">
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
              <LogIn size={16} />
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
      >
        <SidebarContent
          isCollapsed={isCollapsed}
          onToggleCollapse={onToggleCollapse}
        />
      </Box>
    )
  }

  return (
    <DrawerRoot
      open={isOpen}
      onOpenChange={(details: { open: boolean }) => {
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