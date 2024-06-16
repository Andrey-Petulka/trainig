let logic = document.querySelectorAll('p');
console.log(logic)
let letters = ['А', 'Б', 'В']

console.log('letters before:' , letters)

letters.unshift('Г', 'ГЫГЫГЫГЫ', true, logic)
console.log('letters after:', letters)
console.log(letters.shift())
console.log('letters before:' , letters)