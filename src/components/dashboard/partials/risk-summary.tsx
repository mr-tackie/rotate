'use client'

import { Box, CardRoot, CardBody, VStack, Flex, HStack, Text, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { useRiskSummaryData } from '@/hooks/use-dashboard-content'

export const RiskSummary = () => {
    const { data: dashboardContent, isLoading } = useRiskSummaryData()

    const CONTEXTUAL_RISK = [
        { text: "Critical", value: dashboardContent?.critical || 0, color: "red.600" },
        { text: "High", value: dashboardContent?.high || 0, color: "orange.500" },
        { text: "Medium", value: dashboardContent?.medium || 0, color: "yellow.500" },
        { text: "Low", value: dashboardContent?.low || 0, color: "green.600" },
    ]

    if (isLoading) {
        return (
            <CardRoot shadow="xs" bg="bg">
                <CardBody>
                    <VStack align="stretch" gap="4" p={4}>
                        <SkeletonText noOfLines={1} skeletonHeight="20px" width="40%" startColor="gray.100" endColor="gray.200" />
                        <Flex align="center" justify="flex-start" wrap="wrap" gap="12">
                            <VStack align="stretch" gap="4">
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <HStack key={index} spacing="1">
                                        <SkeletonCircle size="8px" startColor="gray.100" endColor="gray.200" />
                                        <SkeletonText noOfLines={1} h={2} w="30%"  />
                                    </HStack>
                                ))}
                            </VStack>
                            <SkeletonCircle size="144px" startColor="gray.100" endColor="gray.200" />
                        </Flex>
                    </VStack>
                </CardBody>
            </CardRoot>
        )
    }

    return (
        <CardRoot shadow="xs" bg="bg">
            <CardBody p="10px 30px">
                <VStack align="stretch" gap="4">
                    <Text
                        fontSize="lg"
                        fontWeight="md"
                        lineHeight="1.5"
                        color="fg.muted">
                        Contextual Risk
                    </Text>

                    <Flex
                        align="center"
                        justify="flex-start"
                        wrap="wrap"
                        gap={{ base: 4, md: 12 }}>
                        <VStack align="stretch" gap="4">
                            {CONTEXTUAL_RISK.map((risk) => (
                                <HStack
                                    key={risk.text}
                                    spacing={4}
                                    fontSize="md"
                                    lineHeight="normal"
                                    color="fg.muted">
                                    <Box
                                        h="2"
                                        w="2"
                                        borderRadius="full"
                                        bg={risk.color}
                                    />
                                    <Text fontWeight="semibold">{risk.value}</Text>
                                    <Text>{risk.text}</Text>
                                </HStack>
                            ))}
                        </VStack>
                        <Box
                            h="36"
                            w="36"
                            display="grid"
                            placeItems="center"
                            borderRadius="full"
                            border="10px solid"
                            borderColor="red.fg">
                            <Text
                                fontSize="3xl"
                                fontWeight="600"
                                lineHeight="1.5"
                                color="fg.muted">
                                2
                            </Text>
                        </Box>
                    </Flex>
                </VStack>
            </CardBody>
        </CardRoot>
    )
}