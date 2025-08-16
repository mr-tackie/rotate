'use client'

import { Button } from '@chakra-ui/react'
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
} from '@chakra-ui/react'
import { X } from 'lucide-react'
import { SidebarContent } from './sidebar-content'

interface MobileSidebarProps {
  isOpen?: boolean
  onClose?: () => void
  onOpen?: () => void
}

export const MobileSidebar = ({ 
  isOpen = false, 
  onClose, 
  onOpen 
}: MobileSidebarProps) => {
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
        <DrawerHeader bg="bg">
          <DrawerCloseTrigger asChild>
            <Button variant="ghost" size="sm" aria-label="Close sidebar">
              <X size={16} />
            </Button>
          </DrawerCloseTrigger>
        </DrawerHeader>
        <DrawerBody p="0">
          <SidebarContent onItemClick={onClose} />
        </DrawerBody>
      </DrawerContent>
    </DrawerRoot>
  )
}