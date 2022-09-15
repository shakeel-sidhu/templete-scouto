

// const arrayofOddNum = [1,3,5]

// arrayofOddNum[10] = 199;

// console.log(arrayofOddNum.length)

// let array1 = ["a", "b" ,'c',"d"]

// const newarray = array1
// array1 = [];
// console.log(newarray)

// let arrayOfLetters = ['a','b','c','d','e','f'];
// const anotherArrayOfLetters = arrayOfLetters;
// arrayOfLetters = [];
// console.log(anotherArrayOfLetters);


// let array = [1,1,2,2,3,3,5,5,6,6]

// const UniqueArray = (array)=>{

//     const set = new Set(array)
//      return [...set]
// }

// console.log(UniqueArray(array))

// const newArray = (num)=>{
//     return num <= 2
// } 
// const filer = array.filter(newArray)

// console.log(filer)

// const address = ["583, Margaret Street", "LOS ANGELES, CA", "USA"];
// console.log(
//   "Address 1: " + address[0],
//   "Address 2: " + address[1],
//   "Address 3: " + address[2]
// );

// const arrayOfNumbers = [1, 2, 3, 4];
// arrayOfNumbers.reduce((accumulator, currentValue, index, array) => array[index] = array[index] * 2);

// console.log(arrayOfNumbers)

// const arrOfNum = [1, 2, 2, 4, 5, 6, 6];

// const arrayfun = (array)=>{
//     const set = new Set(array)
//     return [...set]
// }

// console.log(arrayfun(arrOfNum))


// const array = ["Ali","Aslam","Bilal"]

// const [a,b,c] = ["Ali","Aslam","Bilal"]

// console.log(c)

// console.log(array[2])



// const arrayfunc = (arr)=>{

//     const set = new Set(arr)

//     return [...set]

// }

// let cd = array.filter((item,i,arr)=> arr.indexOf(item) === i)

// const arr = (array)=>{

//     const set = new Set(array)

//     return[...set]

// }

// let array = [5,5,5,5]

// const cd = new Set(array)

// let cd = array.reduce((accum,cur,index,arra)=>{
//     let total = accum += cur
//     if(index === arra.length-1){
//         return total/arra.length-1
//     } 
//     return total
// })
// let cd = array.reduce((accum,cur,index,arra)=> arra[index] = arra[index] * 2);



// console.log(cd)

// let arrayofnu = [5, 5, 5, 5]
// arrayofnu.reduce((accumulator, currentValue, index, array) => array[index] = array[index] * 2);

// console.log(arrayofnu)

// const perOne = (friend, callfriend) => {
//     console.log(`My friend name is ${friend}.`)
//     callfriend()
// }
// const perTwo = () => {
//     console.log("I am Call back")
// }

// perOne("Ali", perTwo)


// What is the output of the code

//  const array = [1,3,4,4]

//  array[200] = 34;

//  console.log(array)

// What is the output of the code

//  let array = [1,3,4,4,4,2,2,5,5]

//  array.reduce((accum,curr,index,arra)=> arra[index] = arra[index]*2)

//  console.log(array)

// const arrays = new Set(array)
// let cd = array.filter((item,i,arr)=> arr.indexOf(item) === i)

// let cd = array.filter((item,i,arr)=> arr.indexOf(item) === i )
// console.log(arrays,cd)


// const a = 7;
// const b = '7';


// const add = a + b;

// console.log(add)

// const fun2 = ()=>{
//     console.log("I am a Call back")

// }

// const fun1 = (name,callFun)=>{
//     console.log(`My name is ${name}`)
//     callFun()

// }

// fun1("ali",fun2)

// const obj = {
//     name:'Ali',
//     lastname:'Aslam',
//     func:function(){
//         return console.log(this.name)
//     }
// }


// const funcs = obj.func.bind(obj)

// console.log(funcs)


// let log = {
//     id: 1,
//     getLogId: function () { 
//         console.log('Hello')
//      }
// }

// const { getLogId } = log;
// getLogId()

// var log = { id:1, getLogId:function () { console.log("hello")} }
// const {getLogId} = log;
// getLogId()




// ---------------------Shallow Copy and Deep Copy

// ------------------------ Shallow Copy Array methods ------------------ //

// ---------------------Shallow Copy Array Method 1 concat()

// let array = ['ali','slaman','aslam',{'a': 'notChanged'}]
// let newArray = ["Aslam"]
// let conArray = array.concat(newArray)
// conArray[0] = 'new';
// conArray[4]['a'] = 'change';

// console.log(array,conArray)

// ---------------------Shallow Copy Array Method 2 Array.from()

// let array = ['ali','slaman','aslam',{'a':'notChanged'}]
// let formArray = Array.from(array)
// formArray[0] = 'new';
// formArray[3]['a'] = 'change';

// console.log(array,formArray)


// ---------------------Shallow Copy Array Method 3 Array.slice(0)

// let array = ['ali','slaman','aslam',{'a':'notChanged'}]
// let sliceArray = array.slice(0)
// sliceArray[0] = 'new';
// sliceArray[3]['a'] = 'change';

// console.log(array,sliceArray)

// ---------------------Shallow Copy Array Method 4 Spread Opreator[...Array]

// let array = ['ali','slaman','aslam',{'a':'notChanged'}]
// let opreatArray = [...array]
// opreatArray[0] = 'new';
// opreatArray[3]['a'] = 'change';

// console.log(array,opreatArray)


// ---------------------Deep Copy Array Method  JSON.stringify

// let array = ['ali','slaman','aslam',{'a':'notChanged'}]

// let copiedArray =  JSON.parse(JSON.stringify(array))
// copiedArray[0]= "30"
// copiedArray[3]['a'] = "Change";

// console.log(array,copiedArray)

// ------------------------ Shallow Copy Object methods ------------------ //

// ---------------------Shallow Copy object Method 1 Object.assign()

// let souceObj = {
//     name:"Ali",
//     age:34,
//     hobbies:['cricket','hockey','Badminton']
// }

// let copiedObj = Object.assign({},souceObj)
// copiedObj.age = "30"
// copiedObj.hobbies[0] = "Coding";

// console.log(souceObj,copiedObj)


// ---------------------Shallow Copy object Method 2 spread Opretor {...obj}

// let souceObj = {
//     name:"Ali",
//     age:34,
//     hobbies:['cricket','hockey','Badminton']
// }

// let copiedObj =  {...souceObj}
// copiedObj.age = "30"
// copiedObj.hobbies[0] = "Coding";

// console.log(souceObj,copiedObj)


// ---------------------Deep Cop object Method spread  JSON.stringify


// let souceObj = {
//     name:"Ali",
//     age:34,
//     hobbies:['cricket','hockey','Badminton']
// }

// let copiedObj =  JSON.parse(JSON.stringify(souceObj))
// copiedObj.age = "30"
// copiedObj.hobbies[0] = "Coding";

// console.log(souceObj,copiedObj)

// const anOtherFunction = ()=>{
//     console.log("Hello")
//   }
//   setTimeout(anOtherFunction,10000)
// setTimeout(myFunction, 5000);

// function myFunction() {
//   document.getElementById("demo").innerHTML = "I love You !!";
// // }

// const obj = {
//     name:'Ali',
//     getValue:function(){
//         return this.name
//     }
// }

// // console.log(obj)
// const obj2 = {
//     rollnum:1,
//     __proto__:obj
// }
// console.log(obj2.getValue())

// let numberArray = [1, 2, 3, 4, 5];

// //output the square of each number
// let returnValue = numberArray.map((num)=>{
//     return num * num
// })

// //view the results
// console.log(numberArray);
// console.log(returnValue);



// //an array of numbers
// let numberArray = [1, 2, 3, 4, 5];

// //output the square of each number
// let returnValue = numberArray.forEach(num => 
//   console.log(`${num} x ${num} = ${num * num}`)
// );

// //the array hasn't changed
// console.log(numberArray);
// console.log(returnValue);


const obj1={name:"abc"}
const obj2={name:"abc"}
obj1===obj2  