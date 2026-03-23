// f(x) = x² + 2x – 3
let a : number = 1
let b : number = 2
let c : number = -3

let delta : number = (b*b) - (4*a*c)
let bhaskara1 : number = (-b + Math.sqrt(delta))/(2*a)
let bhaskara2 : number = (-b - Math.sqrt(delta))/(2*a)
console.log(bhaskara1)
console.log(bhaskara2)
