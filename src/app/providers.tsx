"use client";

import * as React from "react";
import { ThemeProvider } from "@/components/theme-providers";
import { Toaster } from "@/components/ui/sonner";
import { Provider as ReduxProvider } from "react-redux";
import store from "@/store";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem attribute={"class"} defaultTheme={"system"}>
      <ReduxProvider store={store}>
        {children}
        <Toaster richColors position={"top-right"} />
      </ReduxProvider>
    </ThemeProvider>
  );
}
