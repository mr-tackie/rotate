'use client'

import { Button, HStack, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface NavItemProps {
  icon: ReactNode
  label: string
  isActive?: boolean
  isCollapsed?: boolean
  onClick?: () => void
}

export const NavItem = ({ 
  icon, 
  label, 
  isActive = false, 
  isCollapsed = false, 
  onClick 
}: NavItemProps) => {
  return (
    <Button
      variant="ghost"
      justifyContent={isCollapsed ? 'center' : 'flex-start'}
      w="full"
      h="12"
      px={isCollapsed ? '2' : '4'}
      bg={isActive ? 'green.50' : 'transparent'}
      color={isActive ? 'green.fg' : 'gray.fg'}
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