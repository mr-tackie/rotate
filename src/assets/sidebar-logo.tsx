import React from "react";

const SidebarLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64">
    {/* Mint background */}
    <rect x="4" y="4" width="56" height="56" rx="6" fill="#d9f5ea" />
    
    {/* Center tall leaf */}
    <path
      fill="#0b140d"
      d="M32 10 C29 18, 28 22, 28 28 C28 35, 30 38, 32 40 C34 38, 36 35, 36 28 C36 22, 35 18, 32 10 Z"
    />
    
    {/* Left upper leaf */}
    <path
      fill="#0b140d"
      d="M8 12 C14 12, 20 14, 24 20 C20 20, 16 22, 12 26 C10 22, 8 18, 8 12 Z"
    />
    
    {/* Right upper leaf */}
    <path
      fill="#0b140d"
      d="M56 12 C50 12, 44 14, 40 20 C44 20, 48 22, 52 26 C54 22, 56 18, 56 12 Z"
    />
    
    {/* Left lower mound */}
    <path
      fill="#0b140d"
      d="M12 44 C16 40, 22 40, 26 44 C26 48, 26 52, 26 52 L12 52 C12 52, 12 48, 12 44 Z"
    />
    
    {/* Right lower mound */}
    <path
      fill="#0b140d"
      d="M38 44 C42 40, 48 40, 52 44 C52 48, 52 52, 52 52 L38 52 C38 52, 38 48, 38 44 Z"
    />
  </svg>
);

export default SidebarLogo;