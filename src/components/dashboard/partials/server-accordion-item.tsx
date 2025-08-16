'use client'

import {
  Box,
  Flex,
  Text,
  VStack,
  Skeleton
} from '@chakra-ui/react'
import { Server } from 'lucide-react'
import {
  AccordionRoot as Accordion,
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemContent
} from '@/components/ui/accordion'
import { useServerData } from '@/hooks/use-dashboard-content';
import { Divider } from '@/components/ui/divider';

export const ServerAccordion = () => {
  const {data: serverItems, isLoading} = useServerData();

  if (isLoading) {
    return (
      <Skeleton height="100px" mb={6} />
    )
  }

  return (
    <Box>
    <Text fontSize="15px" fontWeight="700" color="slate">Lorem Ipsum Dolor Sit</Text>
    <Accordion multiple variant="plain">
      <VStack gap="5" align="stretch" mt={4}>
        {serverItems?.map((item) => (
          <AccordionItem 
            key={item.id}
            value={item.title}
            borderRadius="15px"
            bg="bg"
            boxShadow="xs"
            px="4"
            py="3"
            border="1px solid accordionBorder"
          >
            <AccordionItemTrigger
              indicatorPlacement="none"
            >
              <VStack cursor="pointer" gap="3" align="stretch" w="full">
                <Text fontSize="15px" fontWeight="bold" color="slate">
                  {item.title}
                </Text>
                
                <Flex 
                  flexWrap={{base: "wrap", xl: "nowrap"}}
                  align="center" 
                  justify="space-between"
                  gap="4"
                  px="4"
                  py="1.5"
                >
                  <Flex 
                    align="center" 
                    justify="start"
                    gap="2"
                    pr={{base: "14", sm: "12", md: "8", xl: "4"}}
                    borderRight="1px solid #E6E6E6"
                  >
                    <Box bg="blue.subtle" p={4} borderRadius="full">
                      <Server size={22} color="#3182CE" />
                    </Box>
                    
                    <Flex align="start" justify="center" direction="column">
                      <Text
                        fontSize="12px"
                        fontWeight="semibold"
                        color="#404A60"
                        mb={0}
                        lineHeight="12px"
                      >
                        {item.subtitle}
                      </Text>
                      <Text
                        fontSize="10px"
                        fontWeight="medium"
                        color="#667085"
                        lineHeight="10px"
                        mt={0}
                      >
                        Server
                      </Text>
                    </Flex>
                  </Flex>
                  <Text fontSize="13px" color="fg.muted">
                    {item.description}
                  </Text>
                </Flex>
              </VStack>
            </AccordionItemTrigger>
            
            {item.details && (
              <AccordionItemContent padding={0}>
                <Text pt="4" fontSize="sm" color="#525D73">
                  {item.details}
                </Text>
              </AccordionItemContent>
            )}
          </AccordionItem>
        ))}
      </VStack>
    </Accordion>
    </Box>
  )
}