export interface Position {
    x: number;
    y: number;
}

export interface NodeData {
    label: string;
    status: 'normal' | 'warning' | 'error';
    color?: string;
    icon?: string;
    ip?: string;
}

export interface Node {
    id: string;
    type: 'server' | 'ip' | 'icon';
    position: Position;
    data: NodeData;
}

export interface Edge {
    id: string;
    source: string;
    target: string;
    animated?: boolean;
}

export interface Legend {
    id: string;
    label: string;
    color: string;
    status: 'normal' | 'warning' | 'error' | 'success';
}

export interface NetworkData {
    nodes: Node[];
    edges: Edge[];
    legends: Legend[];
}

// Server accordion types
export interface ServerItem {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    details?: string;
    status: 'normal' | 'warning' | 'error';
}

export interface TableItem {
    label: string;
    value: string;
    type: 'date' | 'text' | 'check';
}

export interface DashboardContent {
    description: string;
    extra: string;
}

export interface ApiResponse<T> {
    code: number;
    data: T;
    message: string;
}

export interface AssetTableItem {
    name: string
    ip: string
    risk: 'critical' | 'high' | 'medium' | 'low'
}

export interface RiskSummaryData {
    critical: number
    high: number
    medium: number
    low: number
}