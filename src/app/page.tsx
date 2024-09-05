"use client";
import React from "react";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default function Home() {
  const [repos, setRepos] = React.useState<any>([]);
  const [loading, setLoading] = React.useState(true);

  const getRepos = React.useCallback(async () => {
    const token = localStorage.getItem("token") || "";

    try {
      const res = await fetch("http://127.0.0.1:8080/github/repos", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(res);
      if (res.ok) {
        const data = await res.json();
        setRepos(data.data);
      } else {
        toast.error(JSON.stringify(res));
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getRepos();
    } else {
      redirect("/auth/login");
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col p-24">
      {loading ? (
        <p>Loading</p>
      ) : (
        <>
          <h1>Hello World</h1>
          <h4>Welcome to CodeReviewAI 🤖</h4>
          <div>
            <Button
              onClick={() => {
                localStorage.clear();
                location.reload();
              }}
            >
              Sign Out
            </Button>
          </div>
          {/*<pre>{JSON.stringify(repos, null, 3)}</pre>*/}
          <div className={"grid grid-cols-4 gap-4"}>
            {repos.map((r: any) => (
              <Card key={r.id}>
                <CardHeader>
                  <CardTitle>{r.name}</CardTitle>
                  <CardDescription>
                    {r.description || "No Description"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className={"flex gap-2 flex-col"}>
                    <p>
                      Last Updated At:{" "}
                      {new Date(r.updated_at).toLocaleDateString()}
                    </p>
                    <p>
                      Open Issues:{" "}
                      <span
                        className={"text-bright-turquoise-700 font-semibold"}
                      >
                        {r.open_issues_count}
                      </span>
                    </p>
                  </div>

                  <Button
                    size="icon"
                    className={
                      "bg-bright-turquoise-800 text-bright-turquoise-100"
                    }
                  >
                    <a target={"_blank"} href={r.html_url}>
                      <GithubIcon />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}
    </main>
  );
}
