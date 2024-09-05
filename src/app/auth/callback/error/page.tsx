"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function LoginErrorCallback() {
  const params = useSearchParams();
  const error = params.get("error");

  return (
    <div className="h-screen w-screen grid place-items-center text-center">
      <div>
        <h4 className={"text-3xl text-red-500"}>Login errror</h4>
        <p>{error}</p>
        <Button>
          <Link href={"/"}>Go Home</Link>
        </Button>
      </div>
    </div>
  );
}

export default LoginErrorCallback;
