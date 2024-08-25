'use client'
import React from 'react'
import {toast} from "sonner";

export default function Home() {
    const [repos, setRepos] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    const getRepos = React.useCallback(async () => {
        const token = localStorage.getItem("token") || ""

        try {
            const res = await fetch("http://127.0.0.1:8080/github/repos", {headers: {Authorization: `Bearer ${token}`}})
            const data = await res.json()
            setRepos(data)
        } catch (error: any) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }


    }, [])

    React.useEffect(() => {
        getRepos()
    }, [])

    return (
        <main className="flex min-h-screen flex-col p-24">
            {
                loading ? (
                    <p>Loading</p>
                ) : (
                    <>
                        <h1>Hello World</h1>
                        <h4>Welcome to CodeReviewAI 🤖</h4>
                        <pre>{JSON.stringify(repos, null, 3)}</pre>
                    </>
                )
            }
        </main>
    );
}
