// const myBody = document.querySelector('body')



// const myName = document.createElement('h2')
// myName.textContent = 'Matt'
// myName.style.color = 'red'

// const myList = document.createElement('ul')
// const myItem1 = document.createElement('li')
// myItem1.textContent = 'BMW'
// const myItem2 = document.createElement('li')
// myItem2.textContent = 'Mercedess'
// const myItem3 = document.createElement('li')
// myItem3.textContent = 'Audi'

// myList.append(myItem1, myItem2, myItem3)
// myBody.append(myName, myList)



const myBody = document.querySelector('body')
const myContainer = document.createElement('div')
myContainer.style.cssText = 
'border: 2px solid black; width: 200px; height: 200px; margin-top: 80px; text-align: center; line-height: 2px'

const prflPicture = document.createElement('div')
prflPicture.style.cssText = 
'border: 2px solid black; width: 100px; height: 100px; margin: 0 25%; border-radius: 50%; position: relative; bottom: 30px; background-color: black'

const Tag1 = document.createElement('p')
Tag1.textContent = 'Trent Walton'
Tag1.style.fontSize = '20px'
Tag1.style.fontWeight = 'bold'
const Tag2 = document.createElement('p')
Tag2.textContent = ' Founder of @pravelic'
Tag2.style.fontSize = '15px'
const Tag3 = document.createElement('p')
Tag3.textContent = 'Austin, TX'
Tag3.style.fontSize = '15px'


myContainer.append(prflPicture, Tag1, Tag2, Tag3)
myBody.append(myContainer,)