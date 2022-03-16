let myself = {
    name: 'protim',
    age: 21,
    job: 'student',
    educationQualification: ['ssc', 'hsc', 'bsc', 'masters', 'phd'],
    future: {
        job: 'web developer'
    }
}
const about = `My name is ${myself.name}
I am ${myself.age} years old
I am a ${myself.job}
I wanna be a ${myself.future.job}`;
// console.log(about)

const getFive = () => 55
const getFifty = num => num + 55

let numbers = [12, 45, 78, 32, 52]

let newNumbers = [...numbers];
numbers.push(99)
numbers.push(99)
numbers.push(99)
console.log(newNumbers)
