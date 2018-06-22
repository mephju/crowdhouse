import fecha from 'fecha'

const toWeekday = dateTime => fecha.format(
  fecha.parse(dateTime, 'YYYY-MM-DD'),
  'dddd'
)

export default toWeekday