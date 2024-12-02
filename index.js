function commonPrefix(arr) {
  if (!arr[0] || arr.length == 1) return arr[0] || ""

  let i = 0
  while (arr[0][i] && arr.every(string => string[i] === arr[0][i]))
    i++

  return arr[0].slice(0, i)
}


console.log(commonPrefix(["flower", "flow", "flight"]))
console.log(commonPrefix(["dog", "racecar", "car"]))


