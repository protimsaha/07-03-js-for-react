const numbers = [12, 23]

// let x = numbers[0]
// let y = numbers[1]

let [x, y, z] = numbers

function boxify(num1, num2) {
    const nums = [num1, num2]
    return nums;
}
let [a, b] = boxify(12, 23)

// console.log(a, b)

let myself = {
    name: 'protim',
    age: 21,
    job: 'student',
    educationQualification: ['ssc', 'hsc', 'bsc', 'masters', 'phd'],
    future: {
        job: 'web developer'
    },
    empolyee: {
        job: 'web developer',

    }
}
const [gpa] = myself.educationQualification
// console.log(gpa)
const { salary } = myself?.empolyee ? myself?.empolyee : 'notFound'
console.log(salary)
// const [js, ss, kj, lk, jh] = myself.educationQualification;
// console.log(js, ss, kj, lk, jh)