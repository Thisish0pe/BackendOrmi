// python 과의 차이점 : 
//key 값에 따옴표가 없을 경우, js에서는 자동으로 문자열로 변환해줌 
// true. false 값은 앞에 대소문자가 다릅니다.
//python dict 다시 공부해보자

let obj = {
    id: 'licat',
    pw: '1234'
    name: 'leehojun',
    email: 'hojun@gemail.co.kr',
    active: false
}

obj['id']
obj.id // error in python
obj.'id' // error 

let a = 10
let b = 10
let c = 10
let e = {a, b, c} //dict 형으로 만들어줌 

// 유사배열 객체 => 배열과 유사하지만 배열은 아닌 것
let txt = {
    0: "h",
    1: "e",
    2: "l",
    3: "l",
    4: "o",
};

// value의 값으로 문자열 외에 다른 값을 넣었을 경우
let test = {
    one: sum,
    two: console.log,
    three: window.innerWidth,
    four: [10, 20, 30],
    five: "10",
    six: 100,
}
console.log(test)
test.two("호준!!")

let user = {
    id: 'licat',
    pw: '1234',
    name: 'leehojun',
    email: 'hojun@gmail.co.kr',
    active: false
}
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));