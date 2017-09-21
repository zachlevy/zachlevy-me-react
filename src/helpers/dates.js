export const currentYear = new Date().getFullYear()

export function timestampToDateString(unixTimestamp=0) {
  console.log(unixTimestamp)
  return new Date(unixTimestamp * 1000).toISOString().slice(0,10)
}

export function daysAgo(date) {
  // Discard the time and time-zone information.
  var now = new Date()
  var utcNow = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  var utcDate = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());

  return Math.floor((utcNow - utcDate) / (1000 * 60 * 60 * 24));
}
