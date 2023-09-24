// Task 1
let a = 10;
console.log (a);
a = 20;
console.log (a);

// Task 2
let yearRelease = 2007;
console.log (`Year release first iPhone: ${yearRelease}`);

// Task 3
let nameCreator = String (`Брендан Эйх`);
console.log (`Имя создателя языка JavaScript: ${nameCreator}`);

// Task 4
let b = 10;
let c = 2;
let sum = b+c;
console.log (`Сумма 10 и 2= ${sum}`)
let differens = b-c;
console.log (`Разность 10 и 2= ${differens}`);
let multiplication = b*c;
console.log (`Произведение 10 и 2= ${multiplication}`);
let division = b/c;
console.log (`Частное 10 и 2= ${division}`);

// Task 5
let result = 2**5;
console.log (`Возведение 2 в 5-ю степень= ${result}`);

// Task 6
let d = 9;
let e = 2;
let divide = d%e;
console.log (`Остаток от деления 9 и 2= ${divide}`)

// Task 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num = ++num;
num = --num;
console.log (num);

//Task 8
let age = prompt(`Сколько вам лет?`)
console.log (age)

// Task 9.0
const user = {
    name: `Pelmeshki`,
    age:10,
    isAdmin:true,
};

console.log (user.name);
console.log (user.age);
console.log (user.isAdmin);

//Task 9.1
user [`City of residence`];
console.log ([`City of residence`]);

// Task 9.2
user.age = 15;
console.log (user.age);

// Task 9.3
delete user [`City of residence`];

// Task 9.4
let info = prompt (`Какую информацию хотите узнать о пользователе?`)
console.log (user[info]);

// Task 10
let userName = prompt(`Как вас зовут?`);
alert (`Привет, ${userName} !`)

// Hw3 
//Task 1
let password =`Пароль`;
let enterPassword = prompt(`Введите пароль`);
enterPassword = enterPassword.toLowerCase ();

if (enterPassword ===`password`) {
    alert (`Пароль введен верно`);

} else {
    alert (`Пароль введен неправильно`);}

// Task 2 
c = 3;
if (c >= 0 && c <= 10) {console.log (`Верно`);   
} else {console.log (`Неверно`);    
}

// Task 3
let f = 50;
let g = 120;
if (f > 100 || g > 100) {
	console.log ('Верно');
} else {console.log (`Неверно`);
}

//Task 4
a ='2';
b ='3';
console.log (Number(a) + Number(b))

// Task 5
let monthNumber = Number(prompt(`Введите номер месяца`));
switch (monthNumber) {
    case 1:
    case 2:
    case 12:
    alert(`Зима`);    
    break;
    case 3:
    case 4:
    case 5:
    alert(`Весна`);
    break;
    case 6:
    case 7:
    case 8:
    alert(`Лето`);
    break;
    case 9:
    case 10:
    case 11:
    alert(`Осень`);
    break;
    default: (alert(`Попробуй снова`))
        break;
}

// Hw4 
//Task 1
let i = 1;
while (i < 3) {alert (`Привет`); 
i++;
}

 //Task 2
 i = 1;
 while (i <= 5) {console.log (i)
    i++;   
 }

 // Task 3
i = 7;
do {
  console.log(i);
	i++;
} while (i <= 22);

// Task 4
const object = {
'Коля':'200',
'Вася':'300',
'Петя':'400'
};

for (const key in object) {
        const element = object[key];
        console.log (`${key} - зарплата ${element} долларов`);    
    }

// Task 5
let n = 1000
let minNum = 0
for (; n>= 50; n/= 2){
    minNum++;
}
console.log (n);
console.log (minNum)

// Task 6
let dayNum = 1;
do {console.log (`Сегодня пятница, ${dayNum}-е число. Необходимо подготовить отчет.`);
dayNum+= 7;   
} while (dayNum<= 31);

//Hw5
// Task 1
function minNumber(a, b) {
    if (a >= b) {
        console.log(`Наименьшее из чисел ${b}`);
    } else {
        console.log(`Наименьшее из чисел ${a}`);
    }
}
minNumber (2, 6);

// Task 2
function evenNumber(a) {
    if (a % 2 === 0) {
        console.log(`Число ${a} четное`);
    } else {
        console.log(`Число ${a} нечетное`);
    }
}
evenNumber (9);

// Task 3.1
const squareNumber = (t) => {
    console.log(t ** 2);
}
squareNumber (6);

// Task 3.2
const numberSquare = (f) => {
    return f ** 2;
}
numberSquare (2);

// Task 4
function message () {
    userAge = prompt (`Сколько Вам лет?`);

    if (userAge >= 0 && userAge <= 12) {
            console.log(`Привет, друг!`);

    }  else if (userAge < 0) {
            console.log(`Вы ввели неправильное значение`);

    }  else {
            console.log(`Добро пожаловать!`);
    }
}
message ();


// Task 5
function calc (a, b) {
    a = prompt (`Введите первое число`);
    b = prompt (`Введите второе число`);
    
    if (isNaN(a) || isNaN(b)) { 
        console.log(`Одно или оба значения не являются числом`); 

    } else {
        return a * b 
    } 
}

calc ();

// Task 6
function userNumber() {
    let  userNumber = prompt(`Введите число`);

    if (!isNaN(userNumber)) {
        return console.log(`${userNumber} в кубе равняется ${userNumber**3}`); 

    } else {
        return console.log(`Переданный параметр не является числом`);
    }
}

userNumber ();

// Task 7
function getRectangleArea() {
    return this.radius ** 2 * Math.PI  
}
function getRectanglePerimeter() {
    return this.radius * 2 * Math.PI
}
const circle1 = {
    radius:7,

    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
}
const circle2 = {
    radius:5,

    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
}
console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());

// Task 8
const monthGame = () => {
    let monthGameAnswer = prompt(`Введите номер месяца`);

    if (monthGameAnswer === 12 || monthGameAnswer === 1 || monthGameAnswer === 2) {
        alert(`Зима`);

    } else if (monthGameAnswer === 3 || monthGameAnswer === 4 || monthGameAnswer === 5) {
        alert(`Весна`);

    } else if (monthGameAnswer === 6 || monthGameAnswer === 7 || monthGameAnswer === 8) {
        alert(`Лето`);

    } else if (monthGameAnswer === 9 || monthGameAnswer === 10 || monthGameAnswer === 11) {
        alert(`Осень`);

    } else {
        alert (`Введённый параметр является неверным`);
    }
}

// Hw 6
// Task 1
const numbs = [1, 5, 4, 10, 0, 3];
for (let n = 0; n < numbs.length; n++) {
    console.log(numbs[n]);
    if (numbs [n] === 10) 
    break;
}

// Task 2
const numbsOf = [1, 5, 4, 10, 0, 3];
console.log (numbsOf.indexOf (4));

// Task 3
const numbsJoin = [1, 3, 5, 10, 20];
console.log(numbsJoin.join(' '));

// Task 4
const arr = [];

for (let i = 0; i < 3; i++) {
    arr [i] = [];

    for (let j = 1; j < 4; j++)
    {
        arr[i].push(1);
    }    
}
console.log(arr);

// Task 5
const array = [1, 1, 1];
array.push (2, 2, 2);
console.log(array);

// Task 6
const sort = [9, 8, 7, 'a', 6, 5];
sort.sort ();
sort.pop ();
console.log(sort);

// Task 7
const userArray = [9, 8, 7, 6, 5];
let userAnswer = Number (prompt (`Угадайте задуманное число`));
for (let i of userArray) {
    if (userAnswer === i) { 
        alert (`Угадал`);
        break;   
    } else {
        alert (`Не угадал`);
    }  
}

// Task 8
let letters = 'abcdef';
let arrayLetters = letters.split ('');
arrayLetters.reverse();
arrayLetters = arrayLetters.join ('');
console.log(arrayLetters);

// Task 9
const arrayNumbers = [[1, 2, 3,],[4, 5, 6]];
const arrayNumbersResult =[].concat(arrayNumbers[0], arrayNumbers[1]);
console.log(arrayNumbersResult);

// Task 10
const numbersArray = [3, 4, 5, 6, 7];
let sumNumbersArray = 0;
for (let i = 1; i < numbersArray.length; i++) {
    sumNumbersArray = numbersArray[i] + numbersArray [i-1];
    console.log(sumNumbersArray);
}

// Task 11
const squareNum = [2, 4, 7, 9]
const map = (squareNum) => {
    return squareNum.map(s => s**2)
}
console.log(map(squareNum));

// Task 12
const arrayLet = ['как', 'говорят', 'американцы', 'кто', 'много', 'знает', 'тот', 'пули', 'глотает'];

function lettersFunction(arrayLet) {
    return arrayLet.map (let => let.length)   
}
console.log(lettersFunction(arrayLet));

// Task 13
function filterPositive(array) {
    return array.filter(number => number < 0)
  }
  filterPositive([-1, 0, 5, -10, 56]);
  filterPositive([-25, 25, 0, -1000, -2]);