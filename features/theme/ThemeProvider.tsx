"use client"
import { createContext, useContext, useEffect, useState } from "react"
import { themeColors, ThemeColor } from "@/features/theme/theme.config"

type ThemeContextType = {
    theme: "light" | "dark"
    setTheme: (theme: "light" | "dark") => void
    color: ThemeColor
    setColor: (color:ThemeColor) => void
    customColor: string
    setCustomColor: (color: string) => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export function useTheme() {
    const context = useContext(ThemeContext)
    if (!context) throw new Error("useTheme must be used inside ThemeProvider")
    return context
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
  if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as "light" | "dark") || "light"
    }
    return "light"
  })
  const [color, setColor] = useState<ThemeColor>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("color") as ThemeColor) || "Default"
    }
    return "Default"
  })
  const [customColor, setCustomColor] = useState(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("customColor") as ThemeColor) || "#3b82f6"
    }
    return "#3b82f6"
  })

  const applyTheme = () => {
    const root = document.documentElement
    root.style.setProperty("--color-primary", themeColors[color])

    // dark mode
    theme === "dark" ? root.classList.add("dark"): root.classList.remove("dark")

    // custom color
    if (color === "Custom") {
      root.style.setProperty("--color-primary", customColor)
    } else {
      root.style.setProperty("--color-primary", themeColors[color])
    }

    // text nav logic
    if (color === "White") {
      root.style.setProperty("--color-text-nav", "#242424")
    } else if (color === "Black") {
      root.style.setProperty("--color-text-nav", "#ffffff")
    } else {
      root.style.setProperty("--color-text-nav", "var(--color-text-nav)")
      // root.style.removeProperty("--color-text-nav")
    }
  }

  useEffect(() => {
    applyTheme()

    localStorage.setItem("theme", theme)
    localStorage.setItem("color", color)
    localStorage.setItem("customColor", customColor)

  }, [theme, color, customColor])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, color, setColor, customColor, setCustomColor }}>
        {children}
    </ThemeContext.Provider>
  )
}