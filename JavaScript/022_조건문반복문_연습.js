// 1부터 100까지 더하는 예제

//ver 1
// 초기값, 조건값, 증감값
let s = 0;
for (let i = 0; i < 101; ++i) {
  s += i;
}

//ver 2
let s = 0;
let i = 1;
while (i < 101) {
  s += i;
  ++i;
}
s;

//억지예제
new Array(10); // 순회가능한 객체로 만들어줌
new Array(10).fill(1);
new Array(10).fill(1).map((_, i) => i);
new Array(10).fill(1).map((_, i) => i + 1);

//ver 3: 비권장
let range = new Array(100).fill(1).map((_, i) => i + 1);
let s = 0;
for (const i of range) {
  // console.log(i)
  s += i;
}
s;

//ver 4:
new Array(10)
  .fill(1)
  .map((_, i) => i + 1)
  .reduce((a, c) => a + c, 0);

//ver 5:
let range = new Array(100).fill(1);
let s = 0;
for (const index in range) {
  //s += parseInt(index) + 1
  s += +index + 1;
}

// 1부터 100까지 짝수만 더하는 예제
//ver1
let s = 0;
for (let i = 0; i < 101; ++i) {
  if (i % 2 === 0) {
    s += i;
  }
}
s;

//ver2
//ver 1보다 효율적이다. 50번 반복만 했기 때문에.
let s = 0;
for (let i = 0; i < 101; i += 2) {
  s += i;
}
s;

//ver3 :while
let s = 0;
let i = 0;
while (i < 101) {
  if (i % 2 === 0) {
    s += i;
  }
  ++i;
}


// [10, 5, 4, 7, 9, 3, 2, 5, 4, 7, 4, 2, 1]에서 5보다 작은 수만 다 더해주세요.
let data = [10, 5, 4, 7, 9, 3, 2, 5, 4, 7, 4, 2, 1]
s = 0 
for (const i of data){
    if(i < 5){
        s += i
    }
}

//ver2 :while
let data = [10, 5, 4, 7, 9, 3, 2, 5, 4, 7, 4, 2, 1]
let s =0
let i = 0
while (i < data.length){
    if (data[i] < 5){
        s += data[i]
    }
    i++
}
s

//ver 3
data.filter(v => v < 5)
data.filter(v => v < 5).reduce((a, c) => a + c, 0)

//ver 4: map
data.map(v => v < 5)
data.map(v => v < 5 ? v : 0).reduce((a, c) => a + c, 0) //3항 연산자 함께 사용

//ver 4-1:
data.map(v => {
    if ( v < 5){
        return v
    }
    return 0
})

//ver 5: use only reduce
data.reduce((a, c) => c < 5 ? a + c : a , 0)

// ver 6: forEach
let s = 0
data.forEach(v => v < 5 && (s += v))

// [10, '5', 4, '7', 9, '3', 2, '5', 4, '7', '4', '2', '1']에서 모든 숫자를 다 더해주세요.
// 다양하게 풀어보세요. for, while, filter, map, reduce...

//1. 숫자만 더합니다.
//2, 문자열을 숫자로 변경 후 모두 합합니다.
let data1 = [10, '5', 4, '7', 9, '3', 2, '5', 4, '7', '4', '2', '1']

//var 1 -1 :
let s = 0 
for (const i of data1){
    if(typeof(i) === 'number'){
        s += i
    }
}
s

// type check 더 구체적이고 정확하게 나타내는 것 
function typeCheck(value){
    return Object.prototype.toString.call(value).slice(8,-1)
}

let s = 0 
for (const i of data1){
    if(typeCheckf(i) === 'Number'){
        s += i
    }
}
s

//var 2-1: while
let s =0
let i = 0
while (i < data.length){
    if (typeof(data[i]) === 'number'){
        s += data[i]
    }
    i++
}
s

//var 3-1: filter
data1.filter( v => typeof(v) === 'number').reduce((a, c) => a + b ,0)

//var 4-1: reduce
data1.reduce((a, c) => typeof(c)==='number' ? a + c :a ,0)
//var 4-2: reduce
data1.reduce((a, c) => a + pareseInt(c) ,0)
data1
    .map(v => parseInt(v))
    .reduce((a, c) => a + c ,0)

//바름님 코드
data1.reduce((a, c) => (c === parseFloat(c) ? a + c : a),0)

//https://school.programmers.co.kr/learn/courses/30/lessons/120849

new Array('hello world') // ['hellow world]
'hello world'.split('') // ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']
Array.from('hello world') // ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

//var 1:
Array.from('hello world').filter(v => !['a', 'e', 'i', 'o', 'u'].includes(v))

Array.from('hello world').filter(v => !['a', 'e', 'i', 'o', 'u'].includes(v)).join('')

//var 2:
function solution(my_string){
    return my_string.replace(/[aeiou]/g, "");
}

//var 3:
function solution(my_string){
    result += ''
    for (const s of my_string){
        if (['a', 'e', 'i', 'o', 'u'].includes(s)){
            continue
        }
        result += s
    }
    return result
}

solution('hello')

// 용돈은 매년 2배씩 오릅니다.
// 올해 받은 용돈은 10000원입니다.
// 나이는 8살입니다.
// 30만원 이상이 되면 용돈이 더이상 오르지 않습니다.
// for와 coninue 문법을 써서 8살부터 35살까지 받은 용돈의 총합을 구하세요.

result = 0
money = 10000
for (let age = 8; age < 35; age ++){
    resujlt += money
    if (money >= 300000){
        continue
    }
    money = money * 2

}
result

//https://school.programmers.co.kr/learn/courses/30/lessons/120850

function solution(my_string){
    my_string.split("")
    .filter(v=>! isNaN(v))
    .map(v => v *1) //or +v
    .sort((a.b) => a -b); //오름차순
}

//isNan 사용하면 숫자들은 false , 문자는 true

