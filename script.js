let arr = [
    {
        name: "John",
        age: 34
    },
    {
        name: "Adam",
        age: 15
    },
    {
        name: "Doe",
        age: 21
    },
    {
        name: "Alex",
        age: 76
    }
]
// 1-masala
function mas(arg){
    let sum = 1;
    for (const item of arg) {
        sum *= item.age
    }
    return sum
}
// console.log(mas(arr));

// 2-masala
function newArr(arg){
    let newArr = [];
    for (const item of arg) {
        if(item.age > 25){
            newArr.push(item.age)
        }
    }
    return newArr
}
// console.log(newArr(arr));

// 3-masala
function midle(arg){
    let counter = 0;
    let sum = 0;
    for (const item of arg) {
        sum += item.age
        counter++
    }
    let res = sum / counter;
    return res
}
// console.log(midle(arr));

// 4-masala
function max(arg){
    let max = arg[0].age
    for (const item of arg) {
        if(max < item.age){
            max = item.age
        }
    }
    return max
}
// console.log(max(arr));

// 5-masala
function min(arg){
    let min = arg[0].age
    for (const item of arg) {
        if(min > item.age){
            min = item.age
        }
    }
    for (const item of arg) {
        if(item.age == min){
            return item.name
        }
    }
}
// console.log(min(arr));

// 6-masala
function numberArr(arg){
    let newNumArr = arg.map(myFunction);
    function myFunction(arg){
        let res;
        if(arg%2==0){
            res = arg**3
        }else{
            res = arg**2
        }
        return res
    }
    return newNumArr
}
let num = [1, 2, 3, 4, 5, 6, 7, 8,]
console.log(numberArr(num));