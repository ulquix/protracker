import data from "../constants/data.json"

export const SearchItems = ({ keyword }: { keyword: string }) => {
  const k = keyword.trim().toLowerCase().normalize("NFKD")

  if (!k) return []

  const found = []

  for (const [key, value] of Object.entries(data)) {
    if (key.toLowerCase().includes(k)) {
      found.push({ name: key, values: value })
    }
  }

  return found
}
