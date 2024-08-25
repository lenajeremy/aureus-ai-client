'use client'
import React from 'react'
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {useSearchParams} from "next/navigation";


function LoginSuccessCallback() {
    const params = useSearchParams()
    const token = params.get("token");

    React.useEffect(() => {
        localStorage.setItem("token", String(token));
    }, [token])

    return (
        <div>
            <h4 className={"text-3xl"}>Login Success</h4>
            <p>
                {token}
            </p>
            <Button>
                <Link href={"/"}>
                    Go Home
                </Link>
            </Button>
        </div>
    )
}

export default LoginSuccessCallback