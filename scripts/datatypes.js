//NUMBERS

console.log(10 + 10)
console.log(10 - 2)
console.log(10 * 2)
console.log(10 / 2)
console.log(10 % 3)
console.log(10 ** 3)

//NaN
console.log(2 + true )
console.log(2 + false )
console.log(2 + 'true')
console.log(2 - "true" )
console.log("100" - 4 )
console.log("true" - 2 )
console.log("100" + 4 )
console.log(100 - "4" )
console.log("10" * 2 )
console.log("true" * 2 )
console.log(("true") * 2 )
console.log("10" ** 2 )
console.log("10" % 2 )

//Type conversion
console.log( 100 - - '2')
console.log( 100 - -'2')
console.log( 100 - + '2')
console.log( 100 - +'2')
console.log(Number('2'))
console.log(Number('true'))
console.log(Number(true))
console.log(typeof '2')
console.log(typeof 2)
console.log(typeof true)
console.log(Boolean ('2'))
console.log(typeof + '2')

//MATH
let r = 14.5
let area = Math.PI * (r ** 2)
let roundedArea = Math.round(area)
let floorArea = Math.round(area)
let ceilArea = Math.ceil(area)

console.log(area)
console.log(roundedArea)
console.log(floorArea)
console.log(ceilArea)

let rndNum = Math.random()
console.log(rndNum * 100)

rndNum = rndNum.toFixed(2) * 100
console.log(rndNum)

//STRINGS
//concatenation

let firstName = 'Okiki'
let lastName = 'Nonye'
let age = 17
let height = "5'9"
let weight = 70
let email = 'daniel@james.com'

console.log(firstName + ' ' + lastName)

let userIntro = 'My name is ' + lastName + ' ' + firstName + '. I am ' + age + ' years old, I weigh ' + weight + ' kg and I am ' + height + ' ft tall. You can contact me via my email at ' + email
console.log(userIntro)
userIntro = `My name is ${lastName} ${firstName}. I am ${age} years old, I weigh ${weight} and I am ${height} ft tall. You can contact me via my email at ${email}`
console.log(userIntro)

let text = 'lorem ipsum dolor sit amet, consectetur adip'
console.log(text)

// string indexing
let fullname = firstName + ' ' + 'lastName'
console.log(fullname)
console.log(fullname[2])
console.log(fullname[5])
console.log(fullname[20])
//string property
console.log(fullname.length)

//string functions/method
console.log(fullname.toUpperCase())
console.log(fullname.toLowerCase())
console.log(fullname.indexOf('O'))
console.log(fullname.indexOf('i'))
console.log(fullname.lastIndexOf('i'))
console.log(fullname.split('i'))
console.log(fullname.slice(0, 3))
console.log(fullname.slice(3, 6))
console.log(fullname.slice(6, 9))

let lowerName = firstName.toLowerCase()
console.log(lowerName)

lowerName = lowerName.toUpperCase()

//console.log(lowerName.indexOf('o')).toUpperCase()
console.log(lowerName.split(' '))
console.log(lowerName.split(' ')[0])
console.log(lowerName.split(' ')[0][0])
console.log(lowerName.split(' ')[0][0].toUpperCase())
console.log(lowerName.split(' ')[0].slice(1))
console.log(lowerName.split(' ')[0][0].toUpperCase() + lowerName.split(' ')[0].slice(1))

//ARRAY
let students = ['James','Daniel','Nonye','Okiki',50,10,8, true]
console.log(students)
console.log(students.length)
console.log(students[3])

students[4] = 'Theresa'
console.log(students)
let valueIndex = students.indexOf(10)
students[students.indexOf(10)] = "Emmanuel"
console.log(students)

students.pop()
students.pop()
console.log(students)

students.push('John')
console.log(students)

students.sort()
console.log(students)

let scores = [50, 70, 10, 7]
console.log(scores)

//const allData = students.concat(scores)
const allData = [...students, ...scores]
console.log(allData)

console.log(allData.join(', '))

console.log(fullname.split('  ').join(' '))


// BOOLEAN
console.log(10 > 2)     
console.log(10 < 2)     
console.log(10 <= 2)       
console.log(10 <= 10)       
console.log(10 <= '10')     
console.log(10 >= 2)        
console.log(10 == 2)        
console.log(10 == '10')     
console.log(10 === '10')    
console.log(10 !== '10')    
console.log(10 != '10')
