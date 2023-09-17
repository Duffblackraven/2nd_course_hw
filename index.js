// Task 1
let a=10;
alert (a);
a=20;
alert (a);

// Task 2
let yearRelease=2007;
alert (`Year release first iPhone: ${yearRelease}`);

// Task 3
let nameCreator=String (`Брендан Эйх`);
alert (`Имя создателя языка JavaScript: ${nameCreator}`);

// Task 4
let b=10;
let c=2;
let sum=b+c;
alert (`Сумма 10 и 2= ${sum}`)
let differens=b-c;
alert (`Разность 10 и 2= ${differens}`);
let multiplication=b*c;
alert (`Произведение 10 и 2= ${multiplication}`);
let division=b/c;
alert (`Частное 10 и 2= ${division}`);

// Task 5
let result=2**5;
alert (`Возведение 2 в 5-ю степень= ${result}`);

// Task 6
let d=9;
let e=2;
let divide= d%e;
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
user [`City of residence`];
alert ([`City of residence`]);

// Task 9.2
user.age=15;
alert(user.age);

// Task 9.3
delete user [`City of residence`];

// Task 9.4
let info=prompt (`Какую информацию хотите узнать о пользователе?`)
alert (user[info])

// Task 10
let userName=prompt (`Как вас зовут?`);
alert (`Привет, ${userName} !`)

// Hw3 
//Task 1
let password=`Пароль`;
let enterPassword= prompt (`Введите пароль`);
enterPassword=enterPassword.toLowerCase ();
if (enterPassword===`password`) {alert (`Пароль введен верно`);
} else {alert (`Пароль введен неправильно`);}

// Task 2 
c=3;
if (c>=0 && c<=10) {alert (`Верно`);   
} else {alert (`Неверно`);    
}

// Task 3
let f = 50;
let g = 120;
if (f>100 || g>100) {
	alert('Верно');
} else {alert (`Неверно`);
}

//Task 4
a='2';
b='3';
alert (Number(a) + Number(b))

// Task 5
let monthNumber=Number(prompt(`Введите номер месяца`));
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
