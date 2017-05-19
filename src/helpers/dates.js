export const currentYear = new Date().getFullYear()

export function timestampToDateString(unixTimestamp=0) {
  console.log(unixTimestamp)
  return new Date(unixTimestamp * 1000).toISOString().slice(0,10)
}
