import dotenv from 'dotenv'
import mongoose, { mongo } from 'mongoose'
import User from './user.js'
dotenv.config()

const MONGO_URL = process.env.MONGO_URL

mongoose.connect(MONGO_URL, () => {
    console.log('Connected to MongoDB')
}, (e) => {
    console.log('Error')
})

async function createUser() {
//     const user = new User({
//         name: 'Matt',
//         age: 21,
//     })
//     user.save()

    try {
        
const res = await User.create({
        name: 'MatasV',
        age: 20,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        hobbies: ['music', 'arts'],
        address: {
            street: 'gatve',
            number: 5,
        },
    })

    console.log(res)

    } catch (error) {
        
    }

    

}

// createUser()

//! ----------------------------------------------------
async function getUsers() {

    try {
        // const users = await User.find({name:'Matt', age: 20})
        // const users = await User.find({name:'Matas'}, {name: true, age: true})
        const users = await User.findOne({'address.number': 5})

        
        console.log(users)

    } catch (err) {
        console.log(err.message)
    }
}
// getUsers()

//! -------------------------------------------

async function updateUser(){
    // const user = await User.updateOne({name:'MatthewV'}, {$set: {
    //     name: 'Matt',
    //     age: 20
    // }})

    const user = await User.updateMany({age:20}, {$set:{
        address: {
            street: 'gatve',
            number: 5
        }
    }})

    console.log(user)
}

// updateUser()

//!------------------------------------------------------

async function deleteUser(){
    // const user = await User.findByIdAndDelete('63e52c492719daa42cf2274e')
    // const user = await User.deleteMany(
    //     {name: 'MatasV'}
    // )
    const user = await User.deleteOne(
        {name: 'MatasV'}
    )


    console.log(user)
}

// deleteUser()

//! -----------------------------------------------------------------

async function getUsersWhere(){
    try {
        // const users = await User.where('name').equals('Matt')
        const users = await User.where('age').lte('20').sort({age: 1}).limit(2).skip(4)

        console.log(users)
    } catch (error) {
        
    }
}

// getUsersWhere()