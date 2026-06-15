"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes"

if (typeof globalThis.window !== "undefined") {
  const originalError = console.error
  console.error = (...args) => {
    if (
      args[0]?.includes?.(
        "Encountered a script tag while rendering React component"
      )
    ) {
      return
    }
    originalError(...args)
  }
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
