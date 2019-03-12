// setInterval (function (){
// let date = new Date(),
//     year = date.getFullYear(),
//     month = date.getMonth() +1,
//     day = date.getDay(),
//     hours = date.getHours(),
//     minutes = date.getMinutes(),
//     seconds = date.getSeconds(),
//     miliSeconds = date.getMilliseconds();

// if (month < 10) {month = '0' + month;}

// if (day < 10) {day = '0' + day;}

// if (seconds <10) {seconds = '0' + seconds;}

// if (minutes < 10) {minutes = '0' + minutes;}

// if (horse < 10) {hourse = '0' + hourse;}

// if (miliSeconds < 10) {miliSeconds = '00' + miliSeconds;}
// else if (10 < miliSeconds < 100) {miliSeconds = '0' + miliSeconds;}

// document.getElementsByTagName('div')[0].textContent = 'Date: ' + day + ':' + month + ':' + year + '  /   Time: ' + 
// hours +':' + minutes +':' + seconds + ':' + miliSeconds;
// }, 1);

setInterval(function() { //setIntervl в который засунули функцию
    let date = new Date(), //в функции создаем локальные переменные и задаем им значения Даты обращением к переменной Date которая
        hours = date.getHours(),//в свою очередь имеет данные о милисекундах, сколько прошло с 1970 года и являеется грубо говоря функцией
        minutes = date.getMinutes(),//при обращении к которой с конкретным запросом, дает искомое значение в реальном времени
        seconds = date.getSeconds();

if (hours < 10){ //это условие в котором мы говорим фунции, что если число будет одинарное (от 1 до 9) мы удет перед этим
    hours = '0' + hours;//числом подставлять ноль для этетики
}

if (minutes < 10){
    minutes = '0' + minutes;//тут тоже самое что и выше
}

if (seconds < 10){
    seconds = '0' + seconds;//и тут
}

document.getElementsByTagName('div')[0].textContent = 'Time: ' + hours + ':' + minutes + ':' + seconds;
//тут мы говорим коду, что влезь в HTML, найди блок DIV[0]-первый что по порядку попадется и добавь контент(тест+часы+двоеточие+минуты+двоеточие+секунды)

}, 10);//тут мы указываем с каким интервалом будет выполняться функция