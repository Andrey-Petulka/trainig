function hello (param){
    console.log('Тело функции');
    console.log(param)
};

// hello.call(null, 'Переопределенный параментр функции');
setTimeout(() => hello('Результат вызова функции'), 0);