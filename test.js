const a = require("./index")

console.log(a.encrypt("Hello World", a.BINARY).data)
console.log(a.decrypt("36 ", a.HEX).data)