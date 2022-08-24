
let date = (new Date).toISOString()

date = date.replace("T", " ")

date = date.slice(0, 19)

console.log(date)