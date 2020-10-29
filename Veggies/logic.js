const veggies = ['Pear', 'Apple', 'Banana', 'Melon', 'Kiwi']

const contain = document.getElementById("container")
const mainMain = document.getElementById('mainContainer')

 for (let i = 0; i < veggies.length; i++){
        
    let veggieBtn = document.createElement("button")
    veggieBtn.innerHTML = veggies[i]
    contain.appendChild(veggieBtn)

    veggieBtn.onclick = function printVeggie(){

        let veggieDiv = document.createElement("div")
        veggieDiv.innerText = veggies[i]
        veggieDiv.style.background = '#71a595'
        mainMain.appendChild(veggieDiv)

        console.log(veggies[i])
    }
 }


