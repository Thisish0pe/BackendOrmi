// 배열

const arr1 = [];
const arr1 = [1,2,3];
const arr2 = new Array(4,5,6);
const arr2 = new Array(3);

// (in Python) list [1,2,3,4] = [1,2,3,4]

// 0. 배열 (공부해서 추가해야해요)

//1. push & pop
const arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]
arr.pop();
console.log(arr); // [1, 2, 3]

// pop(2) 처럼 들어가는 값과 상관없이 마지막 값을 꺼냄 (index 혹은 value와 무관)

//2. shift & unshift
const myArray = ["사과", "바나나", "수박"];
// 값 빼는 것 
myArray.shift(); //사과
console.log(myArray); // ['바나나', '수박']
// 값 넣는 것 
myArray.unshift("오이", "배");
console.log(myArray); // ['오이', '배', '바나나', '수박']

//3. splice() : splice() 메소드는 배열의 요소를 추가, 제거 또는 교체
// array.splice(start, deleteCount, chageitem)
const arr5 = [1,2,3,4,5]
arr5.splice(1, 0, 100)
arr5 // [1, 100, 2,3,4,5]
arr5.splice(1, 1, 1000)
arr5.splice(1, 1, 10000, 20000)

//4.slice
const arr6 = [10, 20, 30, 40, 50, 60]
arr6.slice(2,5) // arr[2:5] in Python

//5.sort()
const arr7 = [1, 2, 3, 7, 8, 5]
//사전식 정렬 : 문자열 정렬과 동일
const arr8 = [1, 11, 3, 7, 8, 33, 5]
arr7.sort()

//오름차순
arr7.sort((a. b) => a - b)
//내림차순
arr7.sort((a. b) => b - a)

//error 가 날 수 있습니다. 안 나는 코드를 사용하기
// 예제(error가 나지 않는 코드, 한글, 영어, 숫자 등등)
let sortedData = jsonData.sort((a, b) =>
  a[key] > b[key] ? -1 : a[key] < b[key] ? 1 : 0
);

//6. forEach (반복문 대신 자주 사용되는 메서드)
//반복만 하는 것이기에 새로운 array 만들고 싶다면 map 사용하기 
const arr9 = [1, 2, 3, 7, 8, 5]
arr9.forEach((item, index, array) => {
    console.log(item);
    console.log(index);
    console.log(array);
})

const arr10 = [1, 2, 3, 7, 8, 5]
arr10.forEach((v, i) => {
    console.log(v); //value
    console.log(i); // index
})

const arr10 = [1, 2, 3, 7, 8, 5]
arr10.forEach((v, i) => {
    console.log(v); //value
    console.log(i); // index
})

/* 
<body>
    <div id="0"></div>
    <div id="1"></div>
    <div id="2"></div>
    <div id="3"></div>
    <div id="4"></div>
    <div id="5"></div>
    <div id="6"></div>
    <div id="7"></div>
</body> 
*/
const arr10 = [1, 11, 2, 3, 7, 8, 22, 5]
arr10.forEach((v, i) => {
    const tag = document.getElementById(i)
    tag.innerHTML = v
})

//7.map 맨 밑 참조

//8.filter
const arr11 = [1,2,3,4,5,6,7,8,9,10];
const newArr = arr.filter(el => el % 2 === 0);

console.log(newArr);

// 연습문제
//https://school.programmers.co.kr/learn/courses/30/lessons/120583?language=javascript
let array = [1,1,2,3,4,5]
let n = 1

function solution(array, n) {
    return array.filter(v => v == n).length;
}

//9. reduce
[10, 20 ,30 ,40].reduce((a,c) => {
    console.log(a,c)
    console.log('--------')
    return a + c
})
[10, 20 ,30 ,40].reduce((a,c) => a + c, 0);

//10. includes
//여기서 in 앞에 나오는 값은 key(index) 값이다. 
'one' in {'one' : 1, 'two': 2} //true
1 in [10, 20 ,30 ,40] //true 

[10, 20 ,30 ,40].includes(10) // == Python in grammar

//11.join
const arr12 = ['hello', 'world', 'hope']
arr1.join('!') // hello!world!hope

//7. map
// map은 아래 형태보다, 데이터를 뽑아내는 형태로 많이 사용합니다.
[1, 2, 3, 4].map(x => x**2)// there is map with function! 
////////

[[10,20],[20,30],[30,40]].map(v => v)
[[10,20],[20,30],[30,40]].map(v => v[0] )//10,20,30
//성이 3글자라는 전제를 하고 3글자씩만 뽑자
['leehojun','sinhojun','kimhojun'].map(v => v.slice(0.3)) // ['lee', 'sin', 'kim']
['leehojun','sinhojun','kimhojun'].map((v, i) => [v.slice(0.3), i])
////////


[{
    name: 'hojun',
    age: 10
}, {
    name: 'gildong',
    age: 20
}].map(v => v.age) // or v['age']


////////
[{
    name: 'hojun',
    age: 10
}, {
    name: 'gildong',
    age: 20
}].map((v, i, obj) => {
    console.log(v, i, obj)
    return v
})
//////
//obj 는 거의 안씀 

//문제
//새로운 array 생성할 때는 map
let data = [{
    name: 'lee hojun',
    age: 10
}, {
    name: 'kim junho',
    age: 20
}, {
    name: 'sin sunghun',
    age: 30
}]

data.map((v,i) => [i, v.name.split(' ')[1], v.age-1])

// 원하는 데이터
// 위 데이터를 가지고 아래와 같이 새로운 array를 만들고 싶습니다. 정답 코드를 작성해주세요.
[[0, 'hojun', 9], [1, 'junho', 19], [2, 'sunghun', 29]]

data.map((v,i) => [i, v.name.slice(0,3),v.age-1])

data.map((v,i) => [i, v.name.split(' ')[1], v.age-1])