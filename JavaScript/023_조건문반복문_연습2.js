// https://codingdojang.com/scode/393?answer_mode=hide
//ver1
".".repeat(99).split(".");
"."
  .repeat(99)
  .split(".")
  .map((_, i) => i + 1)
  .join("")
  .split("")
  .filter((v) => v == "8").length;

//ver2
let s = "";
for (let i = 0; i < 101; i + 1) {
  s += i;
}
s.split("").filter((v) => v == "8").length;

//ver3
Array(101)
  .fill(1)
  .map((_, i) => i + 1)
  .join("")
  .split("")
  .filter((v) => v == "8").length;

//ver4
Array(101)
  .fill(1)
  .map((_, i) => "" + i) //안에서 메서드 체이닝을 한 번 더 할 수 있으나 복잡도만 올라갈 뿐 효율적이지 않음
  .join("")
  .split("")
  .filter((v) => v == "8").length;

// 9번

//ver1
const zip = (a, b) => a.map((v, i) => [v, b[i]]);
let s = [1, 3, 4, 8, 14, 17, 20];

zip(s, s.slice(1));
zip(s, s.slice(1)).sort((a, b) => a[1] - a[0] - (b[1] - b[0]));
zip(s, s.slice(1)).sort((a, b) => a[1] - a[0] - (b[1] - b[0]))[0];

//ver2
let s = [1, 3, 4, 8, 14, 17, 20];
for (let i = 0; i < s.length; i++) {
  console.log(s[i]);
}

//일반적인 방법
let s = [1, 3, 4, 8, 14, 17, 20];
let min = Infinity
//let min = -Infinity
let index = 0
for (let i = 0; i < s.length - 1; i++) {
  if (s[i + 1] - s[i] < min);{
    min = s[i + 1] - s[i]
    index = i
  }
} 
console.log(s[index], s[index+1])


let s = [1, 3, 4, 8, 14, 17, 20];
for (let i = 0; i < s.length; i++) {
  console.log(s[i] - s[i - 1]);
} //초심자를 위한 방법

//10.
// 엘리베이터 (혹은 놀이기구) 탑승 최대 몸무게는 500kg  입니다. 
// 다음 탑승자가 엘리베이터 탑승했을 때, 최대 탑승할 수 있는 인원수 구하기.

let weight = [60, 50, 55, 60, 70 88, 56, 67, 89, 45, 55, 45]
s = 0
for (const i of weight){
    s += i
    if (s == 500){
        break
    }
}
s

let weight = [60, 50, 55, 60, 70, 88, 56, 67, 89, 45, 55, 45];
let s = 0;
let result = 0;

for (let i = 0; i < weight.length; i++) {
    s += weight[i];
    if (s >= 500){
        break;
    }
    result = i + 1;
}
console.log(result);

let weight = [60, 50, 55, 60, 70, 88, 56, 67, 89, 45, 55, 45];
let s = 0;
let result = 0;

for (let i = 0; i < weight.length; i++) {
    s += weight[i];
    if (s >= 500) {
        break;
    }
    result = i + 1;
}

//정답
weight.sort((a, b ) => a - b)
total =0
count = 0
for (cons i of weight){
    total += i
    if (total <= 500 ) {
        break
    }
    count += 1
}

//정답 : 9 ^^ 