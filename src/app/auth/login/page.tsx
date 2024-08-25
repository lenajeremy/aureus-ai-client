'use client'

import React from 'react'
import {Button} from "@/components/ui/button";
import {toast} from "sonner";

export default function LoginPage() {
    const INITIATE_GH_AUTH_URL = "http://127.0.0.1:8080/auth/github/initiate"
    const GH_AUTH_IDENTIFIER = "hello_world"
    const successCallbackURL = window.location.origin + "/auth/callback/success"
    const errorCallbackURL = window.location.origin + "/auth/callback/error"

    const handleSubmit = React.useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const res = await fetch(`${INITIATE_GH_AUTH_URL}?identifier=${GH_AUTH_IDENTIFIER}&onSuccessCallback=${successCallbackURL}&onErrorCallback=${errorCallbackURL}`)
            const data: ApiResponse<string> = await res.json()

            if (res.status === 200) {
                window.location.href = data.data
            }
        } catch (error: any) {
            toast.error(error.message)
            console.error(error)
        }
    }, [])

    return (
        <form onSubmit={handleSubmit}
              className={'flex items-center justify-center p-24 h-screen w-screen'}
        >
            <Button
                type="submit"
                variant={"default"}
                color={"primary"}
            >
                Sign in with GitHub
            </Button>
        </form>
    )
}