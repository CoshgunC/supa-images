"use client"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export function ThemeButton() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      className="w-10 h-10 p-0 flex items-center justify-center"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Sun size={20} className="cursor-pointer" /> : <Moon size={20} className="cursor-pointer" />}
    </Button>
  )
}

