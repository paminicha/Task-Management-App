"use client"
import ToggleButton from "@/components/Setting/ToggleButton"
import { Card } from "@/components/ui/Card"
import { useTheme } from "@/features/theme/ThemeProvider"
import { ThemeColor } from "@/features/theme/theme.config"

const colors = [
  "Default", "Black", "White", "Blue",
  "Red", "Purple", "Green", "Yellow",
  "Orange", "Cyan", "Pink", "Custom"
] as ThemeColor[]

export default function SettingPage() {

  const {
    theme, setTheme, 
    color, setColor, 
    customColor, setCustomColor, 
  } = useTheme()
  
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

      {color === "Custom" && (
        <div className="flex items-center gap-4">
          <h4>Pick your custom color: </h4>
          <input 
            type="color"
            value={customColor}
            onChange={(e) => setCustomColor(e.target.value)}
            className="w-15 h-8 cursor-pointer"
            />
          <span>{customColor}</span>
        </div>
      )}

      </Card>
      

    </div>
  )
}
