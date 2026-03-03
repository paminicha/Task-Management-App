export function formatDateTime(dateString: string) {
  const date = new Date(dateString)

  const day = date.getDate()
  const month = date.getMonth()+1
  const year = date.getFullYear()

  const hours = date.getHours().toString().padStart(2, "0")
  const minutes = date.getMinutes().toString().padStart(2, "0")

  return [`${day}/${month}/${year}`, `${hours}.${minutes}`]
}