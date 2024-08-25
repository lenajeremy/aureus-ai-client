'use client'

import React from 'react'
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {useSearchParams} from "next/navigation";


function LoginErrorCallback() {
    const params = useSearchParams()
    const error = params.get("error")

    return (
        <div>
            <h4 className={"text-3xl"}>Login Success</h4>
            <p className={"text-destructive-foreground"}>
                {error}
            </p>
            <Button>
                <Link href={"/"}>
                    Go Home
                </Link>
            </Button>
        </div>
    )
}

export default LoginErrorCallback