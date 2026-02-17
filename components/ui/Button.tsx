type CardProps = {
  children: React.ReactNode
  className?: string
  onClick: () => void
}

export function Button({ children, className = "" , onClick}: CardProps) {
  return (
    <button className={`bg-slate-500 text-white px-4 py-2 rounded-lg hover:opacity-90 ${className}`} onClick={onClick}>
        {children}
    </button>
  )
}
