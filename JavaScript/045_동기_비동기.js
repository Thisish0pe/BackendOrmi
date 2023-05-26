//fetch가 promise 입니다.

let p = new Promise(function (resolve, reject) {
  // 실행코드
});

// resolve(value) — 작업이 성공적으로 마무리되면 호출, 결과는 value에 담김
// reject(error) — 작업이 실패시 호출, error는 error에 담김

// 쉬운 예제
let p = new Promise(function (resolve, reject) {
  resolve("hello world");
})
  .then((메시지) => {
    alert(메시지);
    return 메시지.split(" ")[0];
  })
  .then((메시지) => {
    alert(메시지);
    return 메시지[0];
  })
  .then((메시지) => {
    alert(메시지);
  });

//error 가 되면?
let p = new Promise(function (resolve, reject) {
  // resolve('hello world');
  reject("hello world");
})
  .then((메시지) => {
    alert(메시지);
    return 메시지.split(" ")[0];
  })
  .then((메시지) => {
    alert(메시지);
    return 메시지[0];
  })
  .then((메시지) => {
    alert(메시지);
  })
  .catch((메시지) => {
    alert("catch 실행!! :" + 메시지);
  });

//error가 되면?2
fetch("http://testtttt.api.weniv.co.kr/mall")
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    // console.log(error)
    alert("서버가 멈췄습니다. 최대한 빠르게 복구하도록 하겠습니다.");
    document.write("서버가 멈췄습니다. 최대한 빠르게 복구하도록 하겠습니다.");
  });

//finally
new Promise((resolve, reject) => {
  /*code*/
})
  .then((result) => result)
  .then((result) => result)
  .catch((err) => err)
  .finally((result) => result);

///////실습
//   https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json

fetch(
  "https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json"
);
