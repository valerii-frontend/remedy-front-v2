import { useState } from 'react';

export function useAuthSidebar(){
  const [isAuthSidebarOpen, setIsAuthSidebarOpen] = useState(false);

  function openAuthSidebar(){
    setIsAuthSidebarOpen(true);
  }

  function closeAuthSidebar(){
    setIsAuthSidebarOpen(false);
  }

  return {
    isAuthSidebarOpen,
    openAuthSidebar,
    closeAuthSidebar,
  };
}
