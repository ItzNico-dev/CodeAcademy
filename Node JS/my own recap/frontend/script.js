const myTable = document.querySelector('#my-table');

async function getData(){
    const res = await fetch('http://127.0.0.1:3000/cars')
    const allData = await res.json()
    console.log(allData)
    return allData
}

async function showData(){
    const allData = await getData()
    const ulElement = document.createElement('ul')
    allData.forEach(car => {
        const liElement = document.createElement('li')
        liElement.textContent = car
        ulElement.append(liElement)
    });
    myTable.append(ulElement)
    console.log(allData)
}

showData()
