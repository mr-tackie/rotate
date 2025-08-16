'use client'

import {
    VStack,
    Grid,
    GridItem,
    Text,
    HStack,
    SkeletonText
} from '@chakra-ui/react'
import { Check } from 'lucide-react'
import { useTableData } from '@/hooks/use-dashboard-content'


export const DataTable = () => {
    const {data: tableData, isLoading} = useTableData();

    if (isLoading) {
        return (
            <SkeletonText noOfLines={6} />
        )
    }

    return (
        <VStack gap="0" align="stretch">
            <VStack gap="0" align="stretch" mt="16px">
                {tableData?.map((item, index) => (
                    <Grid
                        key={index}
                        templateColumns="1fr 1fr"
                        py="8px"
                        borderBottom={index < tableData.length - 1 ? "1px" : "none"}
                        borderColor="#F9FAFB"
                    >
                        <GridItem>
                            <Text fontSize="15px" fontWeight="600" color="slate">
                                {item.label}
                            </Text>
                        </GridItem>
                        <GridItem>
                            {item.type === 'check' ? (
                                <HStack spacing="2px" align="center">
                                    <Check size={15} color="#10B981" />
                                    <Text fontSize="15px" color="fg.muted">
                                        {item.value}
                                    </Text>
                                </HStack>
                            ) : (
                                <Text fontSize="15px" color="fg.muted">
                                    {item.value}
                                </Text>
                            )}
                        </GridItem>
                    </Grid>
                ))}
            </VStack>
        </VStack>
    )
}