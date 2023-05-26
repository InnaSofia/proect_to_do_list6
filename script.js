
let count = 0
function makeTest(){
    let conteiner = document.getElementById("conteiner")
    let myTitle = document.getElementById("title")
    let input = document.getElementById("input")  
    let value = input.value
    count = count + 1
    conteiner.innerHTML = conteiner.innerHTML + count + input.value
}

const input = document.getElementById("input")
const task = input.value

let username = prompt("Введите своё имя:")
if (username){
    document.getElementById('title').innerHTML = "Список дел," +" " + username + "," + ":" ;
} else{
    document.getElementById('title').innerHTML = "Список дел ананимного пользователя!";  
}

