"use client";

import React, { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { useEmailSignInMutation } from "@/api/authApi";
import Link from "next/link";

export default function LoginPage() {
  const INITIATE_GH_AUTH_URL = "http://127.0.0.1:8080/auth/github/initiate";
  const GH_AUTH_IDENTIFIER = "hello_world";
  const [successCallbackURL, setSuccessCallbackURL] = React.useState("");
  const [errorCallbackURL, setErrorCallbackURL] = React.useState("");
  const [email, setEmail] = React.useState("");

  React.useEffect(() => {
    setSuccessCallbackURL(window.location.origin + "/dashboard");
    setErrorCallbackURL(window.location.origin + "/auth/callback/error");
  }, []);

  const [signInWithEmail, { isLoading, isError }] = useEmailSignInMutation();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await signInWithEmail({
        email,
        onErrorURL: errorCallbackURL,
        onSuccessURL: successCallbackURL,
      }).unwrap();
      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (error: any) {
      toast.error(error.data.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={
        "flex items-center justify-center p-24 h-screen gap-4 flex-col mx-auto w-[500px]"
      }
    >
      <h3 className="text-xl font-semibold text-center mb-6">Sign In</h3>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />

      <Button type="submit" className="w-full" disabled={isLoading}>
        Submit
      </Button>
      <p className="text-sm text-left w-full -mt-2">
        <span>Don&apos;t have an account?{" "}</span>
        <Link className="font-semibold" href={"/auth/signup"}>
          Create one
        </Link>
      </p>

      <div className="flex items-center justify-between gap-3 w-full">
        <div className="h-[1px] w-full bg-gray-300 rounded-full" />
        <p className="text-secondary-foreground">OR</p>
        <div className="h-[1px] w-full bg-gray-300 rounded-full" />
      </div>

      <Button variant={"outline"} className="w-full">
        Sign in with GitHub
      </Button>
    </form>
  );
}
