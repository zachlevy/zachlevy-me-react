// check to see if /blog/photoshopbattles/ is in the url
export function isPhotoshopBattle() {
  return !!window.location.href.match(/\/blog\/photoshopbattles\//) || !!window.location.href.match(/\/blog\/dataisbeautiful\//)
}

// takes in a reddit url in the format
export function getPsBattleTitle(url) {
  return url.split("/").slice(-2, -1)[0]
}

export function buildPsBattleUrl(title) {
  return `/blog/photoshopbattles/${title}/`
}
