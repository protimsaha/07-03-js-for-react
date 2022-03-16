// falsy
// 0,'',null,undefined,false
// truthy  , true,12,25,'  ',{},[]

let myVar = 500;
if (myVar) {
    myVar = myVar * 100;
    console.log(myVar)
}
else {
    myVar = 0
    console.log(myVar)
}

let myMoney = 500;
if (!myMoney) {
    console.log('nah')
}
else {
    console.log('ha')
}

let food = myMoney > 100 ? 'biriani' : 'cha biscuit'
console.log(food);

let drink = (myMoney > 100 && myVar > 200) ? 'coke' : 'water'
console.log(drink)

let num = 52;
let strNum = num + ''
let againNum = + strNum
console.log(againNum)