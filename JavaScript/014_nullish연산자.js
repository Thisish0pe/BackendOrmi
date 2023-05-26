// https://ko.javascript.info/nullish-coalescing-operator
// 나온지 얼마되지 않았기 때문에 실무자가 모를 수 있음.
// IE는 지원하지 않습니다. (익스플로어)

let firstname = null;
let lastname = "park";
let nickname = null;

firstname ?? lastname ?? nickname ?? "익명의 사용자";

let a = null;
let b = 10;
let c = null;

a ?? 100; // 마치 if ull 이야? 를 묻는 것 null 이라면 100을 넣겠다는 의미.
a ?? b ?? c; // => (a ?? b)?? c

//nullish 연산자와 단락평가의 차이점
let height = 0;
height || 100; // 100
height ?? 100; // 0

// || : 0, null ,undefined, '', NaN
// ?? : null, undefined
