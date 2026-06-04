const VACANCIES_CSV_URL =
  'https://docs.google.com/spreadsheets/d/1oV6aOiXvMNtoIV5hTiezJr6PQ0YYenU7w6i58mZKZow/gviz/tq?tqx=out:csv&sheet=Vacancies'

export function parseCSV(csv) {
  const lines = csv.trim().split('\n')
  if (lines.length < 2) return []

  const headers = lines[0].split(',').map((h) => h.replace(/"/g, '').trim())

  return lines
    .slice(1)
    .map((line) => {
      const values = []
      let current = ''
      let inQuotes = false
      for (const char of line) {
        if (char === '"') {
          inQuotes = !inQuotes
        } else if (char === ',' && !inQuotes) {
          values.push(current.trim())
          current = ''
        } else {
          current += char
        }
      }
      values.push(current.trim())

      const obj = {}
      headers.forEach((h, i) => {
        const key = h.toLowerCase().replace(/\s+/g, '_')
        obj[key] = (values[i] || '').replace(/^"|"$/g, '').trim()
      })
      return obj
    })
    .filter((job) => job.status?.toLowerCase() === 'open' && job.title)
}

export async function getVacancies() {
  try {
    const res = await fetch(VACANCIES_CSV_URL)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const csv = await res.text()
    return parseCSV(csv)
  } catch (error) {
    console.error('Failed to fetch vacancies:', error)
    return []
  }
}

/** Uses apply_link from the Google Sheet; mailto only if that cell is empty. */
export function getApplyUrl(job, fallbackEmail = 'gtcbutwal@gmail.com') {
  const link = (job.apply_link || '').trim()
  if (!link) {
    const subject = encodeURIComponent(
      `Job Application: ${job.title} — GTC Nepal`
    )
    return `mailto:${fallbackEmail}?subject=${subject}`
  }
  return link
}
