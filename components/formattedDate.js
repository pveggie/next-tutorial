import { parseISO, format } from 'date-fns'

export default function FormattedDate({ dateString }) {
  const date = parseISO(dateString)
  const formattedDate = format(date, 'LLLL d, yyyy')
  return <time dateTime={dateString}>{formattedDate}</time>
}
