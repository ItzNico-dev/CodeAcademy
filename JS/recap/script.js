//? variable types

// const name = 'Matt' 
//! not changing variable

// let name = 'Matt' 
//! changing variable

//? data types

// const kazkas = 5


//string > 'hcwdubfkh'
//string > `$(2+2) asdf asdf`
//string > `$(2+2) asdf asdf $(kazkas > 6 ? 'teisingas':'neteisingas'`
// number = 65822
//bool = true

// if(bool){
//     console.log('teisybe')
// }

//! array
// const array = [2, 'yello', true, [1234]]
// console.log(Array[i])
// Array[2] = 'item change'

//! object
const obj = {
    name: 'Matt',
    lastName: 'asdasd',
    age: 20,
    sayHello: () => {
        console.log('Hello')
    },
    sayBye: function() {
        console.log('bye')
    },
    innerObject: {
        name: 'Matthew',
        goingDeeper: {
            name: 'another name'
        }
    }
}

// console.log(obj.name)

// obj.sayHello()
// obj.sayBye()
// console.log(obj)

// obj.lastName = 'Fade'
// obj.hasCat = false
// console.log(obj.name)
// console.log(obj)
// console.log(obj.name, obj.lastName)
// delete obj.name
// console.log(obj.innerObject.name)
// console.log(obj.innerObject.goingDeeper.name)

//? operatoriai

// + - / * > < =

// = // priskirimas
// == // palyginti content
// === // palyhinti content ir type

// || (OR)
// && (AND)
//? ! (neigimas)

// falsy values:  0, '' , null, undefined

//?  !! converts content to bool true

//! conditions

//! if else-if else

// if(){
    
// } else{

// }

//! switch

// switch(14){
//     case 15:
//         console.log('reiksme yra 15')
//         break
//     case 10:
//         console.log('reiksme yra 10')
//         break
//     case 12:
//     case 13:
//         console.log(' 12 arba 13')
//         break
//     default:
//         console.log('default')
//         break
// }

//! ternary (?)

// 5 > 10 ? console.log('teisybe'): console.log('neteisybe')