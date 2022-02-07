let names = Array(5)

console.log(names)

let names2 = ['Süheyl', 28, 1993]

console.log(names2.length)

console.log(names2)

console.log('Süheyl'.split(''))

let array1 = [1, 2, 3]
let array2 = [4, 5, 6]
let array3 = [7, 8, 9]

let result = array1.concat(array2, array3, [10, 11, 12, 13])  // [] parantezler olmadan da birleştirebiliyor.

console.log(result)

let names3 = ["Süheyl", "Furkan", "Mehmet"]

let names4 = 'Suheyl'.split('')

console.log(names3.indexOf('Süheyl'))

console.log(names3.includes('Furkan'))

console.log(Array.isArray(names3))

console.log(Array.isArray(names4))

console.log(names3.toString())

console.log(names3.join(', '))

console.log(names3.slice(1, 3))

console.log(names3.splice(0, 1))

names3.push("Fatih")

console.log(names3)

names3.pop('Fatih')

console.log(names3)

names3.unshift("İlk Eleman")
names3.push('Son Eleman')

console.log(names3)

names3.reverse()
console.log(names3)

const numbers = [34, 13, 78, 42]
console.log(numbers)

numbers.sort()
console.log(numbers)

