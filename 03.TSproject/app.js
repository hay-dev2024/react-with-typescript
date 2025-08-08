// function greet(name: string): string {
//       return `Hello, ${name}`;
// }
// const message = greet('React');
// console.log(message)
// 2025.08.08
// Data Types
// let myname = 'hay';
// myname = 'Joe';
// 아래의 코드에서 오류가 발생하지 않는 이유: 
// TypeScript의 타입 추론(Type Inference)
// TypeScript는 배열의 타입을 (number | string)[]으로 자동 추론한다.
// let numbers = [1,2,3,4,5,'9'];
// console.log(numbers);
// 함수의 리턴 타입을 number 타입으로 추론한다.
// function add(x: number, y: number) {
//       return x + y;
// }
// let student = {
//       name: 'kim',
//       age: 25,
//       course: 'Typescript'
// };
// student.course = 'React';
// student.name = 10; 
// 타입 명시
// let lang : string = 'Typescript';
// let age : number = 20;
// let isAvailable : boolean = true;
// 유니언 타입(|): 여러 타입을 가질 수 있다 
// let value : string | null = null;
// value = 'TS';
// console.log(value)
// value = null;
// console.log(value)
// 함수와 데이터 타입
// function mult(a: number, b: number): number {
//       return a * b;
// }
// let result = mult(5, 3);
// console.log(result);
// 선택적 매개변수 Optional Parameter & 삼항연산자 Ternary Operator
// function sayHello(name: string, lang?: string): string {
//       return lang ? `${lang} ${name}` : `Hello, ${name}!`;
// }
// let greet = sayHello('TS');
// console.log(greet);
// 매개변수 기본값 설정
// function mult(a: number, b: number = 1): number {
//       return a * b;
// }
// console.log(mult(10));
// console.log(mult(10, 5));
// 나머지 매개변수(Rest Parameters): 여러 개의 인자를 배열로 처리할 때 사용.
// 파이썬의 *args와 비슷하다. 
// 함수 정의에서 ... = 나머지 매개변수
// 함수 호출에서 ... = 스프레드 연산자
// reduce((acc, num) => acc + num, 0); 0 -> acc의 초깃값 
// reduce() : 배열의 모든 요소를 차례로 더해서 누적합 구하는 함수
// function sumAll(...numbers: number[]): number {
//       return numbers.reduce((acc, num) => acc + num, 0);
// }
// console.log("sumAll: " + sumAll(1,2,3,4,5));
// 스프레드 연산자를 쓰지 않는 경우에는 sumAll() 함수에 배열을 인자로 넘겨야한다.
// function sumAll2(numbers: number[]): number {
//       return numbers.reduce((acc, num) => acc + num, 0);
// }
// console.log("sumAll2: " + sumAll2([1,2,3,4,5]));
// 함수 타입 정의: 함수 자체를 변수에 할당할 때 함수의 타입을 정의할 수 있다.
// 함수 타입: (매개변수타입들) => 리턴타입
// 함수는 일급 객체: 변수에 할당, 인수로 전달, 리턴값으로 사용 가능
// 타입 안전성: 정의한 함수 타입과 일치하는 함수만 할당 가능
// 1단계: myFunc는 "함수를 담는 변수"
// 이 변수는 "number 2개를 받아서 number를 리턴하는 함수"만 담을 수 있음
// let myFunc: (a: number, b: number) => number;
//         ↑ Function Type Signature = 매개변수 타입들 + 리턴 타입을 명시
// 2단계: 실제 함수를 myFunc에 할당 (무명함수/익명함수)
// myFunc = function (x: number, y: number): number {
//       return x + y;
// };
// console.log(myFunc(5, 10));
// // 화살표 함수로도 할당 가능
// myFunc = (x: number, y: number): number => x - y;
// console.log("뺄셈 결과:", myFunc(5, 10));
// 배열
// let numbers: number[] = [1,2,3,4,5];
// let strings: string[] = ['one', 'two', 'three'];
// console.log(numbers);
// console.log(strings);
// 배열을 이용한 함수: 배열을 전달인자로 받는 함수
// function printNames(names: string[]): void {
//       names.forEach(name => console.log(name));
// }
// 나의 분석
// 1. names: string[] - 문자열 배열을 매개변수로 받음
// 2. : void - 리턴값이 없음 (아무것도 반환하지 않음)
// 3. forEach - 배열의 각 요소를 하나씩 순회
// 4. name => console.log(name) - 각 name을 콘솔에 출력
// printNames(['kim', 'lee', 'park']);
// 튜플: 각 요소의 타입이 고정된 배열이다. 즉, 배열의 특정 위치에 특정 타입의 값이 있어야한다.
// let tuple: [string, number, boolean] = ['Joe', 30, true];
// console.log(tuple[0]);
// console.log(tuple[1]);
// console.log(tuple[2]);
// 튜플을 이용한 리턴값
// function getPerson(): [string, number] {
//       return ['Jay', 40];
// }
// let person = getPerson();
// console.log(person[0]); 
// console.log(person[1]);
// 나의 분석:
// 1. 매개변수 없음 - getPerson() ← 괄호 안이 비어있음
// 2. 리턴 타입: [string, number] ← 튜플 타입
//    - 첫 번째 요소: string 타입이어야 함
//    - 두 번째 요소: number 타입이어야 함
// 3. 실제 반환값: ['Jay', 40] ← 타입과 일치하는 튜플
// 선택적 요소를 가진 튜플
// let optionalTuple: [string, number?] = ['Paul'];
// console.log(optionalTuple);
// 객체 데이터 타입
// const book: {title: string; author: string; year: number} = {
//     title: "React + Vite",
//     author: "김철수",
//     year: 2025,
// };
// console.log(book.title);
// console.log(book.author);
// console.log(book.year);
// 중첩된 객체 타입
// const author: {
//     name: string;
//     books: {title: string; year: number}[]
// } = {
//     name: "신짱구",
//     books: [
//         {title: "React + Vite", year: 2025},
//         {title: "Moden JS", year: 2023}
//     ],
// };
// console.log(author.name);
// console.log(author.books[0].title);
// console.log(author.books[1].title);
// 선택적 속성
// const user: {name: string, age?: number} = {
//     name: 'Lee',
// };
// console.log(user.name);
// user.age = 30;
// console.log(user.age);
// 읽기 전용 속성: readonly
// const car: {readonly brand: string; year: number} = {
//     brand: "BMW",
//     year: 1990,
// };
// 객체의 타입과 함수 결합
// const person: {name:string; greet(): string} = {
//     name: 'Zoey',
//     greet() {
//         return `Hi, ${this.name}`;
//     },
// };
// console.log(person.greet());
// 상세 분석
// const person: {name: string; greet(): string} = {
// //              ↑                ↑
// //           속성 타입        메서드 타입
//     name: 'Zoey',
//     greet() {
//         return `Hi, ${this.name}`;
//         //              ↑
//         //           this 키워드: this = 이 객체(person)를 가리킴
//     },
// };
// this는 "현재 객체"를 가리킨다.
// 정리:
// 객체 안의 함수 = 메서드
// this = 현재 객체를 가리키는 키워드
// 호출 방법: 객체.메서드이름()
// **this.속성**으로 같은 객체의 다른 속성에 접근 가능
// 인터페이스: 사용자 정의 타입이다.
// 인터페이스에서 정의한 구조(속성properties과 methods)를 객체에서 구현(implement)한다.
// 인터페이스 = 타입의 이름
// 객체 = 그 타입을 가진 실제 데이터
// 인터페이스: "Book 타입은 이런 구조여야 해!"
// interface Book {
//     title: string;        // 반드시 title (string) 있어야 함
//     author: string;       // 반드시 author (string) 있어야 함
//     publishedYear: number; // 반드시 publishedYear (number) 있어야 함
// }
// // 객체: "Book 타입을 따르겠습니다!"
// const myBook: Book = {
//     // 인터페이스의 모든 속성을 구현해야 함
//     title: 'Modern JS',
//     author: 'Lee',
//     publishedYear: 2023,
// };
// console.log(myBook.title);
// console.log(myBook.author);
// console.log(myBook.publishedYear);
// 선택적 속성이 있는 인터페이스
// interface User {
//     username: string;
//     email?: string;
// }
// const newUser: User = {
//     username: "Lee",
// };
// console.log(newUser.username);
// newUser.email = "lee@email.com";
// console.log(newUser.email);
// 읽기 전용 속성이 있는 인터페이스
// interface User {
//     readonly username: string;
//     email: string;
// }
// const newUser: User = {
//     username: 'Park',
//     email: 'example@mail.com'
// };
// newUser.email = 'abc@mail.com'
// console.log(newUser.email);
// 인터페이스로 함수 타입 정의
// interface Calculator {
//     sum(a: number, b: number): number;
//     sub(a: number, b: number): number;
// }
// myCalc는 Calculator 인터페이스 타입의 객체
// const myCalc: Calculator = {  
//     sum(a, b) {
//         return a + b;;
//     },
//     sub(a, b) {
//         return a - b;
//     },
// };
// console.log(myCalc.sum(10, 5));
// console.log(myCalc.sub(10, 5));
// 인터페이스 간 상속
// interface Person {
//     name: string;
//     age: number;
// }
// interface Employee extends Person {
//     employeeId: number;
// }
// const employee: Employee = {
//     name: 'James',
//     age: 30,
//     employeeId: 12345,
// };
// console.log(employee.name);
// console.log(employee.age);
// console.log(employee.employeeId);
// 클래스와 인터페이스 구현
// 클래스를 통해 인터페이스에 정의된 모든 속성과 메소드를 구현해야 함.
// interface Person {
//     name: string;
//     age: number;
// }
// // 인터페이스 상속
// interface Employee extends Person {
//     employeeId: number;
// }
// // 클래스가 인터페이스를 구현
// class CompanyEmployee implements Employee {
//     name: string;
//     age: number;
//     employeeId: number;
//     constructor(name: string, age: number, employeeId: number) {
//         this.name = name;
//         this.age = age;
//         this.employeeId = employeeId;
//     }
// }
// const employee = new CompanyEmployee('Lee', 30, 12345);
// console.log(employee.name);
// console.log(employee.age);
// console.log(employee.employeeId);
// 단순 객체와 클래스 객체의 차이점:
// 단순 객체: 매번 새로 만들어야 함
// const employee1 = {name: 'Kim', age: 25, employeeId: 1001};
// const employee2 = {name: 'Lee', age: 30, employeeId: 1002};
// const employee3 = {name: 'Park', age: 28, employeeId: 1003};
// 클래스 객체
// class CompanyEmployee {
//     constructor(name: string, age: number, employeeId: number) {
//         this.name = name;
//         this.age = age;
//         this.employeeId = employeeId;
//     }
//     // 메서드 추가 가능
//     introduce() {
//         return `Hi, I'm ${this.name}, employee ID: ${this.employeeId}`;
//     }
// }
// 같은 구조로 여러 객체 생성
// const emp1 = new CompanyEmployee('Kim', 25, 1001);
// const emp2 = new CompanyEmployee('Lee', 30, 1002);
// 비교:
// 특징	            단순 객체	    클래스 객체
// 생성 방법	    {} 리터럴	    new ClassName()
// 재사용성	            낮음	       높음
// 메서드 공유	        어려움	        쉬움
// 생성자	            없음	       있음
// 상속	                불가능	       가능
// 타입 안전성	    인터페이스로만	  클래스 + 인터페이스
// 결론:
// 단순 객체: 일회성, 간단한 데이터 구조
// 클래스: 재사용성, 복잡한 로직, 여러 객체 생성할 때
// 열거형과 유니언 타입
// 열거형: 특정 값들의 집합을 이름을 통해 정의하는 방법
// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right,
// }
// console.log(Direction.Up);
// console.log(Direction.Down);
// console.log(Direction.Left);
// console.log(Direction.Right);
// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right,
// }
// class Character {
//     x: number = 0;
//     y: number = 0;
//     move(direction: Direction) {
//         if (direction === Direction.Up) this.y += 1;
//         else if (direction === Direction.Down) this.y -= 1;
//         else if (direction === Direction.Left) this.x -= 1;
//         else if (direction === Direction.Right) this.x += 1;
//         console.log(`Move ${Direction[direction]}`);
//     }
//     getPosition() {
//         return {x: this.x, y: this.y};
//     }
// }
// const character = new Character();
// character.move(Direction.Up);
// character.move(Direction.Right);
// console.log(character.getPosition());
// 명시적 숫자 값 할당
// enum Direction {
//     Up = 38,
//     Down = 40,
//     Left = 37,
//     Right = 39,
// }
// console.log(Direction.Up);
// console.log(Direction.Down);
// console.log(Direction.Left);
// console.log(Direction.Right);
// 문자열 열거형
// enum Direction {
//     Up = 'UP',
//     Down = 'DOWN',
//     Left = 'LEFT',
//     Right = 'RIGHT',
// }
// console.log(Direction.Up);
// console.log(Direction.Down);
// console.log(Direction.Left);
// console.log(Direction.Right);
// enum Direction {
//     Up = 'UP',
//     Down = 'DOWN',
//     Left = 'LEFT',
//     Right = 'RIGHT',
// }
// class Character {
//     x: number = 0;
//     y: number = 0;
//     move(direction: Direction) {
//         if (direction === Direction.Up) this.y += 1;
//         else if (direction === Direction.Down) this.y -= 1;
//         else if (direction === Direction.Left) this.x -= 1;
//         else if (direction === Direction.Right) this.x += 1;
//         console.log(`Move ${direction}`);
//     }
//     getPosition() {
//         return {x: this.x, y: this.y};
//     }
// }
// const character = new Character();
// character.move(Direction.Up);
// character.move(Direction.Right);
// console.log(character.getPosition());
// any 타입: 어떤 타입이든 상관없다. 즉, 타입 체크를 하지 않겠다는 뜻.
// let anyVal: any = 100;
// anyVal = '100';
// anyVal = true;
// console.log(anyVal);
// 유니언 타입: |를 사용하여 두가지 타입을 지정하기
// C언어의 공용체와 비슷하다. 공용체의 본질: 사용자 정의 데이터 타입이다.
// 결국 유니언도 e.g. number | string 처럼 숫자와 문자열을 모두 수용하는 새로운 타입을 정의한 것.
// let anyVal : number | string = 100;
// anyVal = 'string';
// console.log(anyVal);
// 함수의 전달 인자를 유니언 타입으로 사용하기
// function printId(id: number | string) {
//     if (typeof id === 'string') {
//         console.log(`Your ID: ${id.toUpperCase()}`);
//     } else {
//         console.log(`Your ID: ${id}`)
//     }
// }
// printId(123);
// printId('abc');
// printId('ab123');
// function getLength(value: string | string[]): number {
//     return value.length;
// }
// console.log(getLength('Hello'));
// console.log(getLength(['apple', 'banana', 'cherry']));
// 유니언 타입과 배열
// let values: (number | string)[] = [1, 'hello', 2, 'world'];
// values.push(3);
// values.push('!');
// console.log(values);
// 객체 속성에 유니언 타입 사용하기
// interface Person {
//     name: string;
//     age: number | string;
// }
// const person1: Person = {
//     name: 'lee',
//     age: 30,
// };
// const person2: Person = {
//     name: 'kim',
//     age: '?',
// };
// console.log(person1);
// console.log(person2);
// 타입 별칭과 리터럴 타입
// 타입 별칭: 특정 타입에 이름을 붙여 사용하는 것
// type ID = string | number;
// let userId: ID;
// userId = 'id1234';
// console.log(userId);
// userId = 12345;
// console.log(userId);
// 객체 타입 별칭 적용
// type User = {
//     name: string;
//     age: number;
//     email?: string;
// };
// const user1: User = {
//     name: 'kim',
//     age: 25,
// };
// const user2: User = {
//     name: 'lee',
//     age: 30,
//     email: 'test@mail.com',
// };
// console.log(user1);
// console.log(user2);
// 함수 타입 별칭 적용
// type Operation = (x: number, y: number) => number;
// const sum: Operation = (a, b) => a + b;
// const sub: Operation = (a, b) => a - b;
// console.log(sum(5, 3));
// console.log(sub(10, 7));
// 타입 별칭과 인터페이스 결합
// type MyLocation = {
//     country: string;
//     city: string;
//     zipCode: string;
// };
// interface Company {
//     name: string;
//     employees: number;
//     location: MyLocation;
// }
// const company: Company = {
//     name: 'coding academy',
//     employees: 100;
//     location: {
//         country: 'korea',
//         city: 'seoul',
//         zipCode: '12345',
//     },
// };
// console.log(company);
// 리터럴 타입: 특정 값만 가질 수 있도록 제한된 타입.
// 기본 유형 세가지: 문자열 리터럴 타입, 숫자 리터럴 타입, 불리언 리터럴 타입
// 문자열 리터럴 타입
// type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
// function sendRequest(method: RequestMethod) {
//     console.log(`Sending a ${method} request.`);
// }
// sendRequest('GET');
// sendRequest('POST');
// 숫자 리터럴 타입
// type DiceRoll = 1|2|3|4|5|6;
// function rollDice(): DiceRoll {
//     const result = (Math.floor(Math.random() * 6) + 1) as DiceRoll;
//     return result;
// }
// const roll = rollDice();
// console.log(`주사위 던진 결과는 ${roll}`);
// 불리언 리터럴 타입
// type IsActive = true | false;
// function toggle(active: IsActive) {
//     if (active) {
//         console.log('불켜짐');
//     } else {
//         console.log('불꺼짐');
//     }
// }
// toggle(true);
// toggle(false);
// 리터럴 타입을 활용한 함수 오버로딩
// 리터럴 타입을 사용해 함수가 다양한 리턴 타입을 가지도록 함수 오버로딩을 구현할 수 있다.
// function getStatus(code: 200): "Success";
// function getStatus(code: 404): "Not Found";
// function getStatus(code: 500): "Server Error";
// function getStatus(code: number) : string {
//     switch (code) {
//         case 200: return "Success";
//         case 404: return "Not Found";
//         case 500: return "Server Error";
//         default: return "Unknown Status";
//     }
// }
// console.log(getStatus(200));
// console.log(getStatus(404));
// console.log(getStatus(500));
// console.log(getStatus(1000));
// 타입가드: 유니언 타입에서 특정 타입을 구별할 수 있도록 도와주는 함수 or 조건문이다
// typeof 연산자를 이용한 타입 가드
// function printValue(value: string | number) {
//     if (typeof value === 'string') {
//         console.log(`String: ${value}`);
//     } else {
//         console.log(`Number: ${value}`);
//     }
// }
// printValue('Typescript');
// printValue(100);
// instanceof 키워드를 이용한 타입 가드
// class Dog {
//     bark() {
//         console.log('멍멍!');
//     }
// }
// class Cat {
//     meow() {
//         console.log("냐옹!");
//     }
// }
// function makeSound(pet: Dog | Cat) {
//     if (pet instanceof Dog) {
//         pet.bark();
//     } else {
//         pet.meow();
//     }
// }
// const dog = new Dog();
// const cat = new Cat();
// makeSound(dog);
// makeSound(cat);
// in 연산자를 이용한 타입 가드
// interface Bird {
//     fly(): void;
// }
// interface Fish {
//     swim(): void;
// }
// function move(animal: Bird | Fish) {
//     if ('fly' in animal) {
//         animal.fly();
//     } else {
//         animal.swim();
//     }
// }
// const bird: Bird = {
//     fly() {
//         console.log('하늘을 난다.');
//     },
// };
// const fish: Fish = {
//     swim() {
//         console.log('수영~~');
//     },
// };
// move(bird);
// move(fish);
// null 체크를 이용한 타입 가드
function printLength(value) {
    if (value !== null) {
        console.log("\uAE38\uC774: ".concat(value.length));
    }
    else {
        console.log('null 이다.');
    }
}
printLength('hello');
printLength(null);
