interface ToggleButtonProps {
  active?: boolean
  children: React.ReactNode
  onClick?: () => void
}

export default function ToggleButton({active, children, onClick}: ToggleButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full border transition
        ${active ? "border-gray-600 font-semibold" : "border-gray-300 hover:border-gray-400"} `}
    >
      {children}
    </button>
  )
}
