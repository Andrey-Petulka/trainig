const answer = prompt('Какую машину вы предпочитаете?');
let index = 0;
let age = 5;

function hello(answer, age){
    index++
    console.log(index, answer, age++);
}

for(let index = 1; index < 11; index ++ || age++){
    hello(answer, 18)
    hello('Привет', 99)
}