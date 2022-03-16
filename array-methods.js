let products = [
    { name: 'laptop', price: 32000, brand: 'hghh', color: 'black' },
    { name: 'watch', price: 3000, brand: 'ghgh', color: 'ghhgh' },
    { name: 'phone', price: 5666, brand: 'ghghg', color: 'bhghghlack' },
    { name: 'camera', price: 6566, brand: 'hgh', color: 'blahghgck' }
]
const brands = products.map(product => product.brand);
const pricess = products.map(product => product.price);
// console.log(pricess)
// products.forEach(product => console.log(product.color));
const cheap = products.filter(product => product.price <= 4556)
// console.log(cheap);

const specificName = products.filter(product => product.name.includes('n'))
// console.log(specificName)
const special = products.find(product => product.name.includes('a'))
console.log(special)