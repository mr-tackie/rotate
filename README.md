# README.md

# Rotate Dashboard

Welcome to the **Rotate Dashboard** project! This repository contains the source code for a modern, responsive dashboard application designed to provide seamless navigation, data visualization, and user interaction. The project is built using **React**, **Chakra UI**, and **ReactFlow**, with a focus on scalability, accessibility, and maintainability.

---

## Project Overview

The Rotate Dashboard is designed to provide users with an intuitive interface for managing assets, monitoring network flows, and visualizing contextual risks. The application supports both desktop and mobile views, ensuring a consistent experience across devices.

---

## Key Features

1. **Responsive Sidebar**:
   - A collapsible sidebar for desktop users.
   - A mobile-friendly drawer for smaller screens.
   - Dynamic navigation items with active state management.

2. **Network Flow Visualization**:
   - Interactive flow charts using `ReactFlow`.
   - Custom nodes and edges for enhanced visualization.
   - Hover cards for detailed node information.

3. **Contextual Risk Summary**:
   - Displays risk levels with color-coded indicators.
   - Skeleton loaders for improved user experience during data fetching.

4. **Asset Table**:
   - A responsive table for managing assets.
   - Skeleton loaders for loading states.
   - Integration with mock APIs for data simulation.

5. **Dark Mode Support**:
   - A toggle button for switching between light and dark modes.

---

## Considerations Made

### 1. **Accessibility**
- Ensured all interactive elements (buttons, links, etc.) have proper `aria-labels` for screen readers.
- Used Chakra UI's focus styles to highlight active elements for keyboard navigation.

### 2. **Scalability**
- Modularized components for reusability (e.g., `CustomNode`, `CustomEdge`, `SidebarContent`).
- Integrated hooks (`useDashboardContent`, `useAssetTableData`) for data fetching and state management.

### 3. **Performance**
- Implemented skeleton loaders to improve perceived performance during data fetching.
- Used `ReactFlow`'s `fitView` to ensure charts are always visible within the viewport.

### 4. **Consistency**
- Followed a consistent coding style across components.
- Used Chakra UI's design tokens for colors, spacing, and typography.

### 5. **Error Handling**
- Added fallback states for missing or undefined data.
- Ensured proper type definitions for all props and API responses.

---

## Future Considerations

### 1. **Backend Integration**
- Replace mock APIs with real backend services for dynamic data fetching.
- Implement authentication and authorization for secure access.

### 2. **Enhanced Visualizations**
- Add more interactive charts and graphs using libraries like `Chart.js` or `D3.js`.
- Support real-time updates for network flow and risk summary data.

### 3. **Internationalization**
- Add support for multiple languages to cater to a global audience.

### 4. **Testing**
- Write unit tests for all components using `Jest` and `React Testing Library`.
- Implement end-to-end tests using `Cypress` for user flows.

### 5. **Accessibility Improvements**
- Conduct an accessibility audit to ensure WCAG compliance.
- Add keyboard shortcuts for faster navigation.

### 6. **Deployment**
- Set up CI/CD pipelines for automated testing and deployment.
- Deploy the application to platforms like **Vercel** or **Netlify**.

---

## Author

This project was developed by **Mr. Tackie**. If you have any questions, suggestions, or feedback, feel free to reach out!

---

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- pnpm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/mr-tackie/rotate-dashboard.git
   ```
2. Navigate to the project directory:
   ```bash
   cd rotate-dashboard
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```

### Running the Application
Start the development server:
```bash
pnpm dev
```
The application will be available at `http://localhost:3000`.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

Thank you for exploring the Rotate Dashboard! 🎉