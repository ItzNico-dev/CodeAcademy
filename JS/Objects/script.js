//! task
// let doors = {
//     color: 'brown',
//     isOpen: true,
//     open: function(){
//         if(this.isOpen === true){
//             return 'Doors are open'
//         } else{
//             this.isOpen = true;
//             return 'I am opening the door'
//         }
//     },
//     close: function(){
//         if (this.isOpen === false) {
//             return 'Door is closed'
//         } else{
//             this.isOpen = false
//             return 'I am closing the door'
//         }
//     }
// }

// console.log(doors.open());
// console.log(doors.close());

// console.log(doors.color)
// console.log(doors['color'])
//!task
// const savingsAccount = {
//   balance: 1000,
//   interestRate: 1,
//   deposit: function (amount) {
//     if (amount > 0) {
//       this.balance += amount;
//     }
//   },
//   withdraw: function (amount) {
//     const verifyBalance = this.balance - amount;
//     if (amount > 0 && verifyBalance >= 0) {
//       this.balance -= amount;
//       return `You withdraw $${amount} \nYou have $${this.balance} left in your account`
//     }else{
//         return 'Oops, you dont have this amount of money in your account'
//     }
//   },
//   printAccountSummary : function(){
//     console.log(`welcome \nYour balance is currently $${this.balance} and your intrest rate is ${this.interestRate}%`);
// }
// }

// savingsAccount.withdraw(200)

// savingsAccount.printAccountSummary()

//! task 

// const facebookProfile = {
//     name: 'Matt',
//     numberOfFriends: 100,
//     arrayOfMessages: [
//         'hello',
//         'bye',
//         'world'
//     ],
//     postMessage: function(message){
//         if (message && typeof message === 'string') {
//             this.arrayOfMessages.push(message)
//         }
//     },
//     deleteMessage: function(index){
//         if (!(index > this.arrayOfMessages.length - 1)) {
//             this.arrayOfMessages[index] = undefined
//             this.arrayOfMessages = this.arrayOfMessages.filter((message) => message)

//         }
//     },
//     addFriend: function(){
//         this.numberOfFriends++
//     },
//     removeFriend: function(){
//         this.numberOfFriends--
//     }
// }

//! console.log(Object.keys(facebookProfile))

//! console.log(Object.values(facebookProfile));

//! console.log(Object.entries(facebookProfile))

//! console.log(Object.assign(facebookProfile, savingsAccount))
// console.log(facebookProfile)

// console.log(facebookProfile.arrayOfMessages);
// facebookProfile.postMessage('test')
// console.log(facebookProfile.arrayOfMessages)
// facebookProfile.deleteMessage(1)
// console.log(facebookProfile.arrayOfMessages)

// console.log(facebookProfile.numberOfFriends)
// facebookProfile.addFriend()
// facebookProfile.addFriend()
// facebookProfile.addFriend()
// console.log(facebookProfile.numberOfFriends)

// console.log(facebookProfile.numberOfFriends)
// facebookProfile.removeFriend()
// console.log(facebookProfile.numberOfFriends)

//! task 

// const cars = [
//   { type: 'BMW', price: '30.000 $' },
//   { type: 'MERCEDES', price: '35.000 $' },
//   { type: 'HONDA', price: '18.000 $' },
//   { type: 'VOLVO', price: '25.000 $' },
// ];

// cars.forEach((car) => {
// console.log(`car: ${car.type} \nprice: ${car.price}`);
// })'

const obj = {
    name: 'Matt',
    lName: 'Fade',
    age: 20,
}

const arr = [
    {test: 'labas'},
    {test2: 'labas labas'}
]

// const {name, age} = obj

// console.log(name)
// console.log(age)

// const arr = [1,2,3,4,5,6,7,8,9]

// const [a,,b,] = arr
// console.log(a)
// console.log(b)

// console.log(...arr)


// Object.assign(obj, ...arr)
// console.log(obj);


// function printEverything(...strings){
//     console.log(strings);
// }

// printEverything('labas', 'labas labas', 'labas labas labas')