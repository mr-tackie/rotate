'use client'

import { Text, BoxProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface HeadingProps extends BoxProps {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export function Heading({ 
  children, 
  as = 'h2',
  ...props 
}: HeadingProps) {
  return (
    <Text
      as={as}
      color="#02983E"
      fontWeight={700}
      fontSize="20px"
      lineHeight="1.2"
      mb={4}
      {...props}
    >
      {children}
    </Text>
  )
}