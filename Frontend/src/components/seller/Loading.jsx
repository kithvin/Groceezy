import React, { useEffect } from 'react';
import { useAppContext } from '../../context/AppContext';
import { useLocation } from 'react-router-dom';

const Loading = () => {
  const { navigate } = useAppContext();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const nextURL = query.get('next');

  useEffect(() => {
    if (nextURL) {
      setTimeout(() => {
        navigate(`/${nextURL}`);
      }, 2000); // Reduced delay for better UX (optional)
    }
  }, [nextURL, navigate]);

  return (
    <div className="flex justify-center items-center h-screen w-full">
      {/* Responsive Spinner - Scales for mobile (sm), medium (md), large (lg), xl */}
      <div className="
        animate-spin rounded-full 
        h-12 w-12          // Extra small (default)
        sm:h-16 sm:w-16    // Small (≥640px)
        md:h-20 md:w-20    // Medium (≥768px)
        lg:h-24 lg:w-24     // Large (≥1024px)
        xl:h-32 xl:w-32     // Extra large (≥1280px)
        border-4 border-gray-300 border-t-primary
      "></div>
    </div>
  );
};

export default Loading;