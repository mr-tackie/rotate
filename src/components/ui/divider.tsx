'use client'

import { Box, BoxProps } from '@chakra-ui/react'

interface CustomDividerProps extends BoxProps {
  orientation?: 'horizontal' | 'vertical'
}

export function Divider({ 
  orientation = 'horizontal',
  my = 4,
  mx = 0,
  ...props 
}: CustomDividerProps) {
  if (orientation === 'vertical') {
    return (
      <Box 
        w="1px" 
        h="auto" 
        mx={mx}
        alignSelf="stretch"
        bg="bg.muted" 
        {...props} 
      />
    )
  }

  return (
    <Box 
      h="1px" 
      w="100%" 
      my={my} 
      bg="bg.muted" 
      {...props} 
    />
  )
}