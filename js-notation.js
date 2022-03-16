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
const strMyself = JSON.stringify(myself);
const parseMyself = JSON.parse(strMyself)
// console.log(parseMyself);

let products = [
    { name: 'laptop', price: 32000, brand: 'hghh', color: 'black' },
    { name: 'watch', price: 3000, brand: 'ghgh', color: 'ghhgh' },
    { name: 'phone', price: 5666, brand: 'ghghg', color: 'bhghghlack' },
    { name: 'camera', price: 6566, brand: 'hgh', color: 'blahghgck' }
]
const newProduct = { name: 'iron', price: 700, brand: 'walton' }
const allNew = [...products, newProduct]
// console.log(allNew)
const latest = allNew.filter(product => product.name !== 'phone');
console.log(latest)