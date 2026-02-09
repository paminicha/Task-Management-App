type CardProps = {
  children: React.ReactNode
  className?: string
}

export function Button({ children, className = "" }: CardProps) {
  return (
    <button className={`bg-slate-500 text-white px-4 py-2 rounded-lg hover:opacity-90 ${className}`}>
        {children}
    </button>
  )
}
