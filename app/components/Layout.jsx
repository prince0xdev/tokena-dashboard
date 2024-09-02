'use client'
import React, { useState } from 'react';
import Header from './Header';
import SideBar from './SideBar';

function Layout({ children, title }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex ">
      {/* Sidebar */}
      <SideBar isVisible={isSidebarVisible} title={title} onClose={toggleSidebar} />

      <div className="flex-1 overflow-hidden">
        <Header title={title} toggleSidebar={toggleSidebar} />
        <main className="p-5">{children}</main>
      </div>
    </div>
  );
}

export default Layout;
