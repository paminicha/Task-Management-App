"use client"
import ToggleButton from "@/components/Setting/ToggleButton"
import { Card } from "@/components/ui/Card"
import { useState } from "react"

const colors = [
  "Default", "Black", "White", "Blue",
  "Red", "Purple", "Green", "Yellow",
  "Orange", "Cyan", "Pink", "Custom"
]

export default function SettingPage() {
  const [theme, setTheme] = useState<"light"|"dark">("light")
  const [color, setColor] = useState("Default")

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Setting</h1>

      <Card className="p-6 space-y-6">

        {/* Theme */}
        <section>
          <h3 className="font-semibold mb-3">Theme</h3>
          <div className="flex gap-4">
            <ToggleButton active={theme === "light"} onClick={() => setTheme("light")} >Light</ToggleButton>
            <ToggleButton active={theme === "dark"} onClick={() => setTheme("dark")} >Dark</ToggleButton>
          </div>
        </section>

        {/* Color */}
        <section>
          <h3 className="font-semibold mb-3">Color</h3>

          <div className="grid grid-cols-4 gap-4">
            {colors.map((c) => (
              <ToggleButton 
              key={c}
              active={color === c} 
              onClick={() => setColor(c)}
              >
                {c}
              </ToggleButton>
            ))}
          </div>
        </section>

      </Card>
    </div>
  )
}
