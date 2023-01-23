



const products = [
  {
    id: 1,
    name: 'Ant kraiko laikomų vištų kiaušiniai FAVORIT, 10 vnt., 10 vnt.',
    description: 'Laisvai laikomų vištų kiaušiniai. Kiaušinių spalva - ruda.',
    price: 1.79,
    src: 'https://cdn.barbora.lt/products/1e2eb2e0-ef7c-420c-97cc-a08097ea67eb_m.png'
  },
    {
    id: 2,
    name: 'Paruošta vartoti košė SEMPER su vaisiais (nuo 6 mėn.), 120 g',
    description: 'Paruošta vartoti ryžių ir avižų košė su kriaušėmis, mango, vynuogių ir obuolių sultimis, nuo 6 mėnesių amžiaus. Be pridėto cukraus.',
    price: 1.32,
    src: 'https://cdn.barbora.lt/products/e3d6a7e8-ab82-4919-8829-41934c9fdeb5_m.png'
  },
    {
    id: 3,
    name: 'Imbierų šaknys, 1 kg',
    description: 'Ryškaus aštraus skonio imbierų šaknys yra populiarus Azijos virtuvės prieskonis gaminant žuvų, paukštienos ar mėsos patiekalus.',
    price: 2.49,
    src: 'https://cdn.barbora.lt/products/7b13c6d7-627b-4320-92fe-0eedd5bf02ce_m.png'
  },
    {
    id: 4,
    name: 'Šilauogės 500 g, 500 g',
    description: 'Sultingos šilauogių uogos puikiai tiks pagardinti lengviems pyragams, ledams, pieno ir vaisių kokteiliams ar skanauti vienas .',
    price: 4.49,
    src: 'https://cdn.barbora.lt/products/70d2207b-83f6-466a-a146-64a0d29a7869_m.png'
  },
]

const addButtons = document.querySelectorAll('button')

for (let index = 0; index < addButtons.length; index++) {
    addButtons[index].addEventListener('click', addButtonHandler)
}
    
function addButtonHandler(e){
    const id = e.target.id

    const currentCart = sessionStorage.getItem('cart')
    if (currentCart) {
        const currentCartObj = JSON.parse(currentCart)
        currentCartObj.push(id)
        sessionStorage.setItem('cart', JSON.stringify(currentCartObj))
    } else{
        sessionStorage.setItem('cart', JSON.stringify([id]))
    }
    sessionStorage.setItem('cart', id)


}