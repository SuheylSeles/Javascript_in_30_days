let numOne = 34
let numTwo = 42

console.log ( numOne == numTwo )

let js = "JavaScript"
let py = 'Python'

console.log( js == py )

let nums = [34,42,93]

console.log(nums)

let nums1 = [13, 78]
let nums2 = [13, 78]

console.log( nums1 == nums2 )

let user1 = {
    name : 'Süheyl',
    surname : 'SELEŞ'
}

let user2 = {
    name : 'Furkan',
    surname :'KUNT'
}

console.log(user1 == user2)

let name ="Süheyl"
let surname = "SELEŞ"

let fullName = name + ' ' + surname

console.log(fullName)

let country = "Finland"

console.log(country.startsWith('Fin'))
console.log(country.startsWith('fin'))

let string = "Hi, Süheyl SELEŞ. Welcome to our company!"

console.log(string.endsWith("company"))
console.log(string.endsWith('Süheyl'))
console.log(string.endsWith('Welcome to our company!'))

let string2 = 'I love JavaScript. If you do not JavaScript what else can you love.'

console.log(string.search('love'))
console.log(string.search(/JavaScript/gi))

