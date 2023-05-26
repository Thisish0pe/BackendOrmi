function f(x, y) {
  return x + y;
}

//괄호를 둔 다음 이름 (f)를 없애도 돼요
//즉시 실행함수, 저의와 동시에 실행되는 함수
(function (x, y) {
  return x + y;
});

//화살표 함수
//lmabda와 유사하나 일반함수 만큼 자주 사용됨
(x, y) => x + y;
//1. 중괄호가 없음 함수가 return 되는 코드 1줄이면 return 생략
let f2 = (x, y) => x + y;
//2. 중괄호가 생기면 return 작성해줘야함
let f3 = (x, y) => x + y;
let f3 = (x, y) => {
  let z = x + y;
  return z;
};
//3. 파라미터가 1개이면 소괄호 생략 가능
let f4 = (x) => x + x;

//실습해보자
//원의 반지름이 입력되면 넓이를 구하는 함수를 만들어주세요 (화살표 함수 이용)
let f5 = (x) => x ** 2 * 3.14;

//다음처럼 여러 값이 입력되었을 때, 가장 큰 값, 작은 값, 리스트의 총합 출력하는 함수 만들어주세요.
//화살표, 일반 함수 2개 만들어주세요.
입력: 함수이름(10, 20, 30, 40);
출력: [40, 10, 100];

//min . max
function f6(a, b, c, d) {
  max = Math.max(a, b, c, d);
  min = Math.min(a, b, c, d);
  sum = a + b + c + d;
  return [max, min, sum];
}

let f7 = (a, b, c, d) => {
  max = Math.max(a, b, c, d);
  min = Math.min(a, b, c, d);
  sum = a + b + c + d;
  return [max, min, sum];
};
