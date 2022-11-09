
let input = document.getElementById('input'); //input variable
let result = 0;
let latest_operator;
const numbers_list = document.querySelectorAll(".numbers div"); //Creating array with all numbers + . + clear
console.log();

document.getElementById('add').addEventListener('click', function(){
    let num = parseInt(input.innerHTML);
    result += num;
    input.innerHTML = "";
    latest_operator = "+";
});

document.getElementById('sub').addEventListener('click', function(){
    if (latest_operator == undefined) {
        let num = parseInt(input.innerHTML);
        result += num;
        input.innerHTML = "";
        latest_operator = "-";
    } else {
        let num = parseInt(input.innerHTML);
        result -= num;
        input.innerHTML = "";
        latest_operator = "-";
    }
});

document.getElementById('div').addEventListener('click', function(){
    if (latest_operator == undefined) {
        let num = parseInt(input.innerHTML);
        result += num;
        input.innerHTML = "";
        latest_operator = "/";
    } else {
        let num = parseInt(input.innerHTML);
        result /= num;
        input.innerHTML = "";
        latest_operator = "/";
    }
});

document.getElementById('mul').addEventListener('click', function(){
    if (latest_operator == undefined) {
        let num = parseInt(input.innerHTML);
        result += num;
        input.innerHTML = "";
        latest_operator = "*";
    } else {
        let num = parseInt(input.innerHTML);
        result *= num;
        input.innerHTML = "";
        latest_operator = "*";
    }
});

document.getElementById('result').addEventListener('click', function(){
    if (latest_operator == "+") {
        result += parseInt(input.innerHTML);
        input.innerHTML = result;
    } else if (latest_operator == "-") {
        result -= parseInt(input.innerHTML);
        input.innerHTML = result;
    } else if (latest_operator == "/") {
        result /= parseInt(input.innerHTML);
        input.innerHTML = result;
    } else if (latest_operator == "*") {
        result *= parseInt(input.innerHTML);
        input.innerHTML = result;
    } else if (latest_operator == undefined) {
        result = input.innerHTML;
        input.innerHTML = result;
    } else {
        result = input.innerHTML;
        input.innerHTML = result;
    }
});


for (i = 0; 1 < numbers_list.length; i++) {
    let num = numbers_list[i].innerHTML;
    num.trimStart;

    //Adds clicked number to input
    numbers_list[i].addEventListener('click', function(int){
        input.innerHTML += num;
        console.log(input.innerHTML);
    });

    //Clear function for input/output
    document.getElementById('clear').addEventListener('click', function() {
        document.getElementById('input').innerHTML = '';
        result = 0;
        latest_operator = undefined;
    });

}






    

