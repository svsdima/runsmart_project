/* Для хранения информации используются переменные
var name = "Dmitriy"; Создаём коробку имя и помещаем туда Dmitriy
let number = 7; Создаём число, команда let используется, если значение в будущем может поменяться
const pi = 3.14; const используется, если значение всегда будет постоянным */

/* Типы данных */

// number - числа для обозначения зарплаты, кол-ва пикселей и т.д.
// string - "", '', `` - строка, любая информация, которую можно описать словами: имя, описание предмета и т.д
// true/false - условие, если выполняется то..., если нет то...
// null - если чего-то просто не существует в природе
// undefined - что-то существует, но значения никакого не имеет
/* let obj = {
    name: 'apple',
    color: 'green',   Есть объект яблоко зелённого цвета, весом 200 грамм
    weight: 200
} */
// Symbol 

// alert(1234) Выводит информацию, которая есть у него на страницу
// console.log("number") Выводит информацию в консоли, нужна для общения с разработчиком.
// confirm("Вам есть 18?") Формирует поведение сайта.

// let answer = confirm("Вам есть 18?"); Задаёт вопрос, если отвечает да, то в консоли появится true, отмена - false
// console.log(answer);

// let answer = confirm("Вам есть 18?", ""); Задаёт вопрос, пользователь отвечает и в консоли высвечивается ответ
// console.log(answer);

// console.log(4+4)

// let isChecked = true,
//     isClose = true;

// console.log(isChecked && isClose); /*  && - И (and) */

// let isChecked = true,
//      isClose = true;

//  console.log(isChecked || isClose); || - или (or)

/* Условия */

/* Условие-1 */

// if (2*4 == 8*1) {
//     console.log('Верное выражение')
// } /* = присваивается значение, == сравнение */

// let answer = confirm("Вам есть 18?");
// if (answer) {
//     console.log('Проходите')
// } else {
//     console.log('Уходи')
// }

/* Условие-2 */

// const num = 50;

// if (num < 49) {
//     console.log('Неправильно')
// } else if (num > 100) {
//     console.log('Много')
// } else {
//     console.log('Верно')
// }

/* Цикл */

// for(let i = 1; i < 8; i++) {
//     console.log(i);
// } /* Цикл начинается, когда i = 1 и будет работать до тех пор, пока i = 8, ++ увеличивает значение на единицу */

/* Функции */

// function logging(a, b) {
//     console.log(a + b)
// }

// logging(3, 5);

// logging(9, 8);

$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000, /* Скорость перелистывания */
        // adaptiveHeight: true, /* Подстраивается под высоту картинки */
        autoplay: false, /* Автопереключение слайдов */
        autoplaySpeed: 2000, /* Скорость автопереключения */
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left-solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right-solid.png"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                dots:true,
                dotsClass: "carousel-dots",
                arrows: false,
            }
            }
        ]
      });
  });