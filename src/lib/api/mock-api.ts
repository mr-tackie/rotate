import { createServer } from "miragejs"
import { 
    AssetTableItem,
  DashboardContent,
  NetworkData,
  RiskSummaryData,
  ServerItem,
  TableItem
} from "../types/request-types"

const dashboardContent: DashboardContent = {
  description:
    "Lorem ipsum dolor sit amet consectetur. Aenean sodales pellentesque gravida nibh et magna faucibus. " +
    "Dui commodo ut metus amet egestas habitant viverra. Quisque fusce senectus facilisis non diam leo nulla sem pellentesque. " +
    "Sit in vel sed cursus metus sit fringilla vestibulum.",

  extra:
    "Lorem ipsum dolor sit amet consectetur. Tempus a id adipiscing fames egestas tellus dis pretium tempus. " +
    "Justo nisl nisl lorem lectus id ornare. Rhoncus in egestas in amet porttitor pellentesque sit. " +
    "Amet gravida integer velit felis. Eu consectetur interdum auctor sed aliquam. " +
    "Eu pulvinar accumsan sed id. Duis a aliquam eu quisque commodo lectus. " +
    "Lectus ipsum velit purus viverra vulputate viverra in nunc nulla. " +
    "Euismod rhoncus mauris urna orci gravida sagittis netus. Amet mus in vel etiam. " +
    "Interdum habitant congue massa in etiam sit. " +
    "Commodo nibh viverra lobortis augue lorem quam lorem suspendisse."
}

const networkData: NetworkData = {
  nodes: [
    {
      id: '1',
      type: 'icon',
      position: { x: 100, y: 150 },
      data: {
        label: 'Loremipsumm',
        color: 'purple',
        icon: 'mail',
        status: 'normal'
      }
    },
    {
      id: '2',
      type: 'server',
      position: { x: 250, y: 150 },
      data: {
        label: 'Loremipsu',
        status: 'normal'
      }
    },
    {
      id: '3',
      type: 'server',
      position: { x: 400, y: 150 },
      data: {
        label: 'Loremipsu',
        status: 'normal'
      }
    },
    {
      id: '4',
      type: 'ip',
      position: { x: 600, y: 100 },
      data: {
        label: 'Loremipsumdolorsit',
        ip: '192.168.1.1',
        status: 'warning'
      }
    },
    {
      id: '5',
      type: 'ip',
      position: { x: 600, y: 200 },
      data: {
        label: 'Loremipsumdolorsit002',
        ip: '192.168.1.2',
        status: 'warning'
      }
    }
  ],
  edges: [
    { id: 'e1-2', source: '1', target: '2', animated: false },
    { id: 'e2-3', source: '2', target: '3', animated: false },
    { id: 'e3-4', source: '3', target: '4', animated: false },
    { id: 'e3-5', source: '3', target: '5', animated: false }
  ],
  legends: [
    { id: '1', label: 'Lorem', color: 'red', status: 'error' },
    { id: '2', label: 'Lorem', color: 'orange', status: 'warning' },
    { id: '3', label: 'Lorem', color: 'green', status: 'success' }
  ]
}

// Server data
const serverData: ServerItem[] = [
  {
    id: 'server1',
    title: 'Lorem P',
    subtitle: 'Server',
    description: 'Lorem Ipsum Dolor Sit Amet Consectetur.',
    details: 'Lorem Ipsum Dolor Sit Amet Consectetur. In Laoreet Elementum Luctus Odio. Id Enim Urna.',
    status: 'normal'
  },
  {
    id: 'server2',
    title: 'Lorem S',
    subtitle: 'Server',
    description: 'Lorem Ipsum Dolor Sit Amet Consectetur.',
    details: 'Lorem ipsum dolor sit amet consectetur. Quis viverra etiam pellentesque lectus semper in massa purus. Auctor aenean aenean senectus massa dignissim vehicula mi erat purus. Praesent scelerisque aliquet metus sagittis dictum sed sed. Sed venenatis sed urna quam.',
    status: 'normal'
  },
  {
    id: 'server3',
    title: 'Lorem T',
    subtitle: 'Server',
    description: 'Lorem Ipsum Dolor Sit Amet Consectetur.',
    details: 'Lorem ipsum dolor sit amet consectetur. Nunc vitae tortor convallis vitae arcu. Magna.',
    status: 'warning'
  }
]

const tableData: TableItem[] = [
  { label: 'Lorem Ipsum Dolor', value: '10/19/2017', type: 'date' },
  { label: 'Lorem Ipsum Dolor', value: 'Ut', type: 'text' },
  { label: 'Lorem Ipsum Dolor', value: 'Eros', type: 'text' },
  { label: 'Lorem Ipsum Dolor', value: 'Yes', type: 'check' },
  { label: 'Lorem Ipsum Dolor', value: 'Sit', type: 'text' },
  { label: 'Lorem Ipsum Dolor', value: 'Lorem Ipsum Dolor', type: 'text' },
  { label: 'Lorem Ipsum Dolor', value: 'Lorem Ipsum Dolor', type: 'text' },
]

const assetTableData : AssetTableItem[] = [
    { name: "Loremipsumdolorsit", ip: "192.168.1.1", risk: "critical" },
    { name: "Loremipsumdolorsit002", ip: "192.168.1.2", risk: "critical" },
  ]
  
  const riskSummaryData : RiskSummaryData = {
    critical: 2,
    high: 0,
    medium: 0,
    low: 0,
  }

export function createMirageServer() {
  if (typeof window === "undefined") {
    return
  }

  return createServer({
    routes() {
      this.namespace = "api/dashboard"
      this.timing = 500

      // Dashboard content endpoint
      this.get("/content", () => {
        return {
          code: 200,
          data: dashboardContent,
          message: "success"
        }
      })

      // Network data endpoint
      this.get("/network", () => {
        return {
          code: 200,
          data: networkData,
          message: "success"
        }
      })

      // Server data endpoint
      this.get("/servers", () => {
        return {
          code: 200,
          data: serverData,
          message: "success"
        }
      })

      // Table data endpoint
      this.get("/table", () => {
        return {
          code: 200,
          data: tableData,
          message: "success"
        }
      })

      // Asset table endpoint
      this.get("/assets", () => {
        return {
          code: 200,
          data: assetTableData,
          message: "success"
        }
      })

      // Risk summary endpoint
      this.get("/risk-summary", () => {
        return {
          code: 200,
          data: riskSummaryData,
          message: "success"
        }
      })

      this.passthrough()
    }
  })
}