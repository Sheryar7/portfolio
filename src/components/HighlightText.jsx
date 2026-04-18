import React from "react";

const HighlightText = ({ children, className = "" }) => {
  return (
    <span
      className={`
        bg-gradient-to-r 
        from-blue-400 
        via-cyan-400 
        to-blue-600 
        bg-clip-text 
        text-transparent 
        font-semibold
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default HighlightText;