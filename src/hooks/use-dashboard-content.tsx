import { useQuery } from '@tanstack/react-query'
import { getAssetTableData, getDashboardContent, getNetworkData, getRiskSummaryData, getServerData, getTableData } from '@/services/dashbord-service'

export const useDashboardContent = () => {
    return useQuery({
        queryKey: ['dashboard', 'content'],
        queryFn: async () => {
            const response = await getDashboardContent();
            return response.data
        },
    })
}

export const useNetworkData = () => {
    return useQuery({
        queryKey: ['dashboard', 'network'],
        queryFn: async () => {
            const response = await getNetworkData()
            return response.data
        },
    })
}

export const useTableData = () => {
    return useQuery({
        queryKey: ['dashboard', 'table'],
        queryFn: async () => {
            const response = await getTableData()
            return response.data
        },
    })
}

export const useServerData = () => {
    return useQuery({
        queryKey: ['dashboard', 'servers'],
        queryFn: async () => {
            const response = await getServerData()
            return response.data
        },
    })
}


export const useAssetTableData = () => {
    return useQuery({
        queryKey: ['dashboard', 'assets'],
        queryFn: async () => {
            const { data } = await getAssetTableData();
            return data;
        }
    })
}

export const useRiskSummaryData = () => {
    return useQuery({
        queryKey: ['dashboard', 'risk-summary'],
        queryFn: async () => {
            const { data } = await getRiskSummaryData();
            return data;
        }
    })
}