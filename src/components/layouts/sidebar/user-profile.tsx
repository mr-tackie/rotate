'use client'

import { Box, HStack, IconButton, Text, VStack } from '@chakra-ui/react'
import { LogOut } from 'lucide-react'
import { Avatar } from '@/components/ui/avatar'

interface UserProfileProps {
  isCollapsed?: boolean
}

export const UserProfile = ({ isCollapsed = false }: UserProfileProps) => {
  return (
    <Box p="4" borderTop="1px" borderColor="gray.200">
      {isCollapsed ? (
        <VStack gap="2">
          <Avatar size="sm" name="mr-tackie" title="mr-tackie" />
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
              mr-tackie
            </Text>
            <Text fontSize="xs" color="gray.500">
              2025-08-15
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
  )
}