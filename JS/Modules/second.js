export function sayHello(){
    console.log('Hello world');
}

export function sayGoodbye(){
    console.log('Bye Bye')
}

export default function fetchData(){
    console.log('fetch data')
    console.log(generateHTML())
}

function generateHTML(){
    return 'something'
}