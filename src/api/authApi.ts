import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiResponse } from "@/lib/types/responses"

const BASE_URL = "http://127.0.0.1:8080"

export type EmailSignUpBody = {
    fullName: string;
    email: string;
    onSuccessURL: string;
    onErrorURL: string
}

export type EmailSignInBody = Omit<EmailSignUpBody, 'fullName'>

const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: build => ({
        emailSignIn: build.mutation<ApiResponse<string>, EmailSignInBody>({
            query: args => ({
                url: "/auth/email/signin",
                method: "POST",
                body: args
            })
        }),
        emailSignUp: build.mutation<ApiResponse<string>, EmailSignUpBody>({
            query: args => ({
                url: "/auth/email/signup",
                method: "POST",
                body: args
            })
        })
    })
})

export default authApi
export const { useEmailSignInMutation, useEmailSignUpMutation } = authApi