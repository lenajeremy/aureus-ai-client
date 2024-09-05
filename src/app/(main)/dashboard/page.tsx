'use client'

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";


const mockRepositories = [
  {
    id: 1,
    name: "awesome-project",
    description: "An awesome project",
    isInstalled: false,
  },
  {
    id: 2,
    name: "cool-app",
    description: "A cool application",
    isInstalled: true,
  },
  {
    id: 3,
    name: "data-analyzer",
    description: "Data analysis tool",
    isInstalled: false,
  },
  {
    id: 4,
    name: "web-scraper",
    description: "Web scraping utility",
    isInstalled: false,
  },
  {
    id: 5,
    name: "machine-learning-model",
    description: "ML model for predictions",
    isInstalled: true,
  },
];

function DashboardHome() {
  const [repositories, setRepositories] = useState(mockRepositories);
  const [isGitHubLinked, setIsGitHubLinked] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");
  const [newProjectRepo, setNewProjectRepo] = useState("");

  const handleRepositoryToggle = (repoId: number) => {
    setRepositories(
      repositories.map((repo) =>
        repo.id === repoId ? { ...repo, isInstalled: !repo.isInstalled } : repo
      )
    );
  };

  const handleCreateProject = () => {
    // In a real application, this would create a new project and install the app on the specified repository
    console.log(
      `Creating project: ${newProjectName} with repository: ${newProjectRepo}`
    );
    setNewProjectName("");
    setNewProjectRepo("");
  };

  const handleLinkGitHub = () => {
    // In a real application, this would initiate the OAuth flow with GitHub
    setIsGitHubLinked(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Link Your GitHub Account</CardTitle>
          <CardDescription>
            Connect your GitHub account to start using AI-powered code reviews
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!isGitHubLinked ? (
            <Button onClick={handleLinkGitHub}>
              <Github className="mr-2 h-4 w-4" /> Link GitHub Account
            </Button>
          ) : (
            <p className="text-green-600 dark:text-green-400">
              ✓ GitHub account linked successfully
            </p>
          )}
        </CardContent>
      </Card>

      {isGitHubLinked && (
        <>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Select Repositories</CardTitle>
              <CardDescription>
                Choose the repositories where you want to install the AI Code
                Review app
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {repositories.map((repo) => (
                  <li key={repo.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`repo-${repo.id}`}
                      checked={repo.isInstalled}
                      onCheckedChange={() => handleRepositoryToggle(repo.id)}
                    />
                    <Label htmlFor={`repo-${repo.id}`} className="flex-1">
                      <span className="font-medium">{repo.name}</span>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {repo.description}
                      </p>
                    </Label>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Create New Project</CardTitle>
              <CardDescription>
                Import a GitHub repository to create a new project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Create Project</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Create New Project</DialogTitle>
                    <DialogDescription>
                      Enter the details of your new project and the GitHub
                      repository to import.
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
                    <Button onClick={handleCreateProject}>
                      Create Project
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}

export default DashboardHome;
