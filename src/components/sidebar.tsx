'use client'

import { useState } from "react";
import Link from "next/link";
import {
  Code2,
  FileCode2,
  Settings,
  HelpCircle,
  Menu,
  LayoutDashboard,
  User,
  Github,
} from "lucide-react";
import { Button } from "./ui/button";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  return (
    <aside
      className={`${
        isSidebarOpen ? "w-64" : "w-16"
      } transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700`}
    >
      <div className="flex items-center justify-between h-16 border-b border-gray-200 dark:border-gray-700 px-4">
        {isSidebarOpen && (
          <>
            <Code2 className="h-8 w-8 text-blue-500" />
            <h1 className="ml-2 text-xl font-bold">AI Code Review</h1>
          </>
        )}
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          <Menu className="h-5 w-5" />
        </Button>
      </div>
      <nav className="mt-6">
        <Link
          href="/"
          className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <LayoutDashboard className="h-5 w-5 mr-3" />
          {isSidebarOpen && <span>Dashboard</span>}
        </Link>
        <Link
          href="/projects"
          className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <FileCode2 className="h-5 w-5 mr-3" />
          {isSidebarOpen && <span>Projects</span>}
        </Link>
        <Link
          href="#"
          className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700"
        >
          <Github className="h-5 w-5 mr-3" />
          {isSidebarOpen && <span>GitHub Integration</span>}
        </Link>
        <Link
          href="#"
          className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <Settings className="h-5 w-5 mr-3" />
          {isSidebarOpen && <span>Settings</span>}
        </Link>
        <Link
          href="#"
          className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <HelpCircle className="h-5 w-5 mr-3" />
          {isSidebarOpen && <span>Help</span>}
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
