export type DateRangeItem = {
  start: string
  end: string
}

export function filterToday<T extends DateRangeItem>(items: T[]) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return items.filter(item => {
    const start = new Date(item.start)
    const end = new Date(item.end)

    start.setHours(0, 0, 0, 0)
    end.setHours(23, 59, 59, 999)

    return start <= today && end >= today
  })
}

export function sortByStartDate<T extends DateRangeItem>(items: T[]) {
  return [...items].sort(
    (a, b) =>
      new Date(a.start).getTime() -
      new Date(b.start).getTime()
  )
}