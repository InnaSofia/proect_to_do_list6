let username = prompt("Введите своё имя:")
let myTitle = document.getElementById("title")


if (username){
    myTitle.innerHTML = "Список дел," +" " + username + "," + ":" ;
} else{
    myTitle.innerHTML = "Список дел ананимного пользователя!";  
}


let count = 0
function makeTest(){
    let conteiner = document.getElementById("conteiner")//здесь дела
   
    let input = document.getElementById("input")//инпут  
    let value = input.value//значение инпут
    count = count + 1

    if(count <= 5){
        conteiner.innerHTML = conteiner.innerHTML + count + "."+ value + "<br/>"
    }else if(count > 5){
alert ("Можно ввести до 5 дел")
    }
    input.value = ""//стирать поля ввода дел
}