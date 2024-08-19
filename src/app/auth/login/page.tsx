'use client'

import React from 'react'
import {Button} from "@/components/ui/button";

export default function LoginPage() {
    const handleSubmit = React.useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const res = await fetch('http://127.0.0.1:8080/auth/github/initiate?identifier=helloworld')
            const data: ApiResponse<string> = await res.json()

            if (res.status === 200) {
                window.location.href = data.data
            }
        } catch (error) {
            console.error(error)
        }
    }, [])

    return (
        <form onSubmit={handleSubmit}
              className={'flex items-center justify-center p-24 h-screen w-screen'}
        >
            <Button
                type="submit"
                variant={"outline"}
            >
                Sign in with GitHub
            </Button>
        </form>
    )
}