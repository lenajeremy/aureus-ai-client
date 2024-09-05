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
    setSuccessCallbackURL(window.location.origin + "/auth/callback/success");
    setErrorCallbackURL(window.location.origin + "/auth/callback/error");
  }, []);

  const [signInWithEmail, { isLoading, isError }] = useEmailSignInMutation();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
      className={"flex items-center flex-col gap-4 justify-center p-24 h-screen w-screen"}
    >
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />

      <Button type="submit">Submit</Button>

      <h4> ---- OR ---- </h4>

      <Button variant={"outline"}>Sign in with GitHub</Button>
      <p className="text-center">
        <Link href={"/auth/signup"}>Create Account</Link>
      </p>
    </form>
  );
}
