function filteringPosibilities(storeId, e) {
  if (!storeId.length) return true
  let status = 0
  e.forEach((d, i) => {
    if (i > 0 && storeId[0].id === d) {
      if (e[i - 1] === d) status++
    }
  })
  return status < 1
}

module.exports = filteringPosibilities