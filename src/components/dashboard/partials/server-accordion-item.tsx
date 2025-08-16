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

export const ServerAccordion = () => {
  const {data: serverItems, isLoading} = useServerData();

  if (isLoading) {
    return (
      <Skeleton height="100px" mb={6} />
    )
  }

  return (
    <Accordion multiple variant="plain">
      <VStack gap="5" align="stretch" mt={4}>
        {serverItems?.map((item) => (
          <AccordionItem 
            key={item.id}
            value={item.title}
            borderRadius="xl"
            bg="bg"
            boxShadow="sm"
            px="4"
            py="3"
          >
            <AccordionItemTrigger>
              <VStack cursor="pointer" gap="3" align="stretch" w="full">
                <Text fontSize="15px" fontWeight="bold" color="slate">
                  {item.title}
                </Text>
                
                <Flex 
                  flexWrap={{base: "wrap", xl: "nowrap"}}
                  align="center" 
                  gap="4"
                  px="4"
                  py="1.5"
                >
                  <Flex 
                    align="center" 
                    justify="center"
                    gap="2"
                    pr={{xl: "4"}}
                    borderRight={{xl: "1px solid"}}
                    borderColor="bg.muted"
                  >
                    <Box bg="blue.subtle" p={4} borderRadius="full">
                      <Server size={22} color="#3182CE" />
                    </Box>
                    
                    <Flex align="center" justify="center" direction="column">
                      <Text
                        fontSize="sm"
                        fontWeight="semibold"
                        color="slate"
                      >
                        {item.subtitle}
                      </Text>
                      <Text
                        fontSize="xs"
                        fontWeight="medium"
                        color="slate"
                      >
                        Server
                      </Text>
                    </Flex>
                  </Flex>
                  
                  <Text fontSize="sm" color="fg.muted">
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
  )
}