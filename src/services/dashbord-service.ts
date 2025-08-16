import { api } from "@/lib/api/axios";
import { 
  ApiResponse, 
  AssetTableItem, 
  DashboardContent, 
  NetworkData,
  RiskSummaryData,
  ServerItem,
  TableItem
} from "@/lib/types/request-types";

/**
 * Fetches dashboard content (description and extra sections)
 */
export const getDashboardContent = async (): Promise<ApiResponse<DashboardContent>> => {
  console.log("called")
  const { data } = await api.get<ApiResponse<DashboardContent>>('/content');
  return data;
};

/**
 * Fetches network diagram data
 */
export const getNetworkData = async (): Promise<ApiResponse<NetworkData>> => {
  const { data } = await api.get<ApiResponse<NetworkData>>('/network');
  return data;
};

/**
 * Fetches server accordion data
 */
export const getServerData = async (): Promise<ApiResponse<ServerItem[]>> => {
  const { data } = await api.get<ApiResponse<ServerItem[]>>('/servers');
  return data;
};

/**
 * Fetches table data for dashboard
 */
export const getTableData = async (): Promise<ApiResponse<TableItem[]>> => {
  const { data } = await api.get<ApiResponse<TableItem[]>>('/table');
  return data;
};

/**
 * Fetches asset table data
 */
export const getAssetTableData = async (): Promise<ApiResponse<AssetTableItem[]>> => {
    const { data } = await api.get<ApiResponse<AssetTableItem[]>>('/assets');
    return data;
  };
  
  /**
   * Fetches risk summary data
   */
  export const getRiskSummaryData = async (): Promise<ApiResponse<RiskSummaryData>> => {
    const { data } = await api.get<ApiResponse<RiskSummaryData>>('/risk-summary');
    return data;
  };