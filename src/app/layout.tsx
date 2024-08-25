import * as React from 'react'
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {Toaster} from "@/components/ui/sonner"
import "./globals.css";
import {ThemeProvider} from "@/components/theme-providers";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "CodeReviewAI",
    description: "AI-powered code-review automation",
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <ThemeProvider enableSystem attribute={"class"} defaultTheme={"system"}>
            {children}
            <Toaster richColors position={"top-right"}/>
        </ThemeProvider>
        </body>
        </html>
    );
}
