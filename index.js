// Task 1
let a=Number(10);
alert (a);
a=Number(20);
alert (a);

// Task 2
let yearRelease=Number (2007);
alert (`Year release first iPhone: ${yearRelease}`);

// Task 3
let nameCreator=String (`Брендан Эйх`);
alert (`Имя создателя языка JavaScript: ${nameCreator}`)

// Task 4
let b=Number(10);
let c=Number(2);
let sum=(b+c);
alert (`Сумма 10 и 2= ${sum}`)
let differens=(b-c);
alert (`Разность 10 и 2= ${differens}`);
let multiplication=(b*c);
alert (`Произведение 10 и 2= ${multiplication}`);
let division=(b/c);
alert (`Частное 10 и 2= ${division}`);

// Task 5
let result=(2**5);
alert (`Возведение 2 в 5-ю степень= ${result}`);

// Task 6
let d=Number(9);
let e=Number(2);
let divide= (d%e);
alert (`Остаток от деления 9 и 2= ${divide}`)

// Task 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num = ++num;
num = --num;
alert(num);

//Task 8
let age=prompt (`Сколько вам лет?`)
alert (age)

// Task 9.0
const user= {name: `Pelmeshki`,age:10,isAdmin:true};
alert (user.name);
alert (user.age);
alert (user.isAdmin);

//Task 9.1
user [`city of residence`];
alert ([`city of residence`]);

// Task 9.2
user.age=15;
alert(user.age);

// Task 9.3
delete user [`City of residence`];

// Task 9.4
let info=prompt (`Какую информацию хотите узнать о пользователе?`)
alert (user[info])

// Task 10
let userName=prompt (`Как ва зовут?`);
alert (`Привет, ${userName} !`)

