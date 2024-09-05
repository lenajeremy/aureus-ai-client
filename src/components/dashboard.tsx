"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Code2, FileCode2, Settings, HelpCircle, Menu, LayoutDashboard, User, Github, PlusCircle } from "lucide-react"
import Link from 'next/link'

export function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [newProjectName, setNewProjectName] = useState('')
  const [newProjectRepo, setNewProjectRepo] = useState('')

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  const handleCreateProject = () => {
    // In a real application, this would create a new project and install the app on the specified repository
    console.log(`Creating project: ${newProjectName} with repository: ${newProjectRepo}`)
    setNewProjectName('')
    setNewProjectRepo('')
  }

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-16'} transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700`}>
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
          <Link href="/" className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700">
            <LayoutDashboard className="h-5 w-5 mr-3" />
            {isSidebarOpen && <span>Dashboard</span>}
          </Link>
          <Link href="/projects" className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
            <FileCode2 className="h-5 w-5 mr-3" />
            {isSidebarOpen && <span>Projects</span>}
          </Link>
          <Link href="/github-integration" className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
            <Github className="h-5 w-5 mr-3" />
            {isSidebarOpen && <span>GitHub Integration</span>}
          </Link>
          <Link href="#" className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
            <Settings className="h-5 w-5 mr-3" />
            {isSidebarOpen && <span>Settings</span>}
          </Link>
          <Link href="#" className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
            <HelpCircle className="h-5 w-5 mr-3" />
            {isSidebarOpen && <span>Help</span>}
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white dark:bg-gray-800 shadow">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">User menu</span>
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-4 py-8">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Welcome to AI Code Review!</CardTitle>
                <CardDescription>Get started by creating your first project</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/placeholder.svg?height=200&width=200" alt="Welcome illustration" className="mb-6" />
                <p className="text-center mb-6">
                  AI Code Review helps you improve your code quality and catch bugs early. 
                  Create a new project to start leveraging AI-powered code analysis.
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg">
                      <PlusCircle className="mr-2 h-5 w-5" /> Create New Project
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Create New Project</DialogTitle>
                      <DialogDescription>
                        Enter the details of your new project and the GitHub repository to import.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="project-name" className="text-right">
                          Project Name
                        </Label>
                        <Input
                          id="project-name"
                          value={newProjectName}
                          onChange={(e) => setNewProjectName(e.target.value)}
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="repo-url" className="text-right">
                          Repository URL
                        </Label>
                        <Input
                          id="repo-url"
                          value={newProjectRepo}
                          onChange={(e) => setNewProjectRepo(e.target.value)}
                          className="col-span-3"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button onClick={handleCreateProject}>Create Project</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Link GitHub Account</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Connect your GitHub account to start using AI-powered code reviews</p>
                  <Button variant="outline">
                    <Github className="mr-2 h-4 w-4" /> Link GitHub Account
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Explore Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Learn about the powerful features of AI Code Review</p>
                  <Button variant="outline">View Features</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Read Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Check out our comprehensive documentation to get started</p>
                  <Button variant="outline">Open Docs</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}