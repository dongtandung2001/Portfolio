import React, { useState, useEffect } from "react";
import { FiDownload, FiX } from "react-icons/fi";

const FloatingResumeButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleDownload = () => {
    // Create a temporary link element and click it to download
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Dung_Dong_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        className={`transition-all duration-300 ${
          isExpanded ? "w-64" : "w-14"
        } h-14 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center cursor-pointer group`}
        onClick={() => !isExpanded && setIsExpanded(true)}
      >
        {!isExpanded ? (
          <FiDownload size={20} className="group-hover:scale-110 transition-transform" />
        ) : (
          <div className="flex items-center justify-between w-full px-4">
            <div className="flex items-center gap-3">
              <FiDownload size={18} />
              <span className="text-sm font-medium">Download Resume</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDownload();
                }}
                className="bg-white/20 hover:bg-white/30 rounded-full p-1.5 transition-colors"
              >
                <FiDownload size={14} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(false);
                }}
                className="bg-white/20 hover:bg-white/30 rounded-full p-1.5 transition-colors"
              >
                <FiX size={14} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Tooltip */}
      {!isExpanded && (
        <div className="absolute bottom-16 right-0 bg-gray-800 text-white text-xs py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          Download Resume
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
        </div>
      )}
    </div>
  );
};

export default FloatingResumeButton;