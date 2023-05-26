`
<Python>
def one (x):
    def two(y):
        return X ** y
    return two

승수2 = one(2)
승수3 = one(3)

(승수2)3
`;

//클로저란 폐쇠된 공간 안에 데이터에 접근하기 위한 테크닉

function one(x) {
  function two(y) {
    return x ** y;
  }
  return two;
}

let 승수2 = one(2);
let 승수3 = one(3);

console.log(승수2(3));
console.log(승수3(3));

// 생성자 함수
let book = {
  책이름: "알잘딱깔센 JavaScript 비동기 프로그래밍 - 비동기 너 내 동기가 돼라",
  책가격: 0,
  저자: ["구나영", "김경림"],
  출판일: "2022.08.12",
}; //책이 100권이면

//아래처럼 찍어내는 틀을 만들어 찍어낼 수 있음 마치 class 처럼.
function Book(책이름, 책가격, 저자, 출판일) {
  this.책이름 = 책이름;
  this.책가격 = 책가격;
  this.저자 = 저자;
  this.출판일 = 출판일;
}

let book1 = Book("Python", 1000, "hope", "2023.05.25");
book1; //undefined : return 이 없어서.

let book1 = new Book("Python", 1000, "hope", "2023.05.25");
book1; // return 값이 없음에도 찍혀져 나옴. 이것이 생성자 함수.
//new 키워드가 실제로 하는 일 : object 반환
// this = {}
this.책이름 = 책이름;
this.책가격 = 책가격;
this.저자 = 저자;
this.출판일 = 출판일;
// return this

// ? class와 생성자 함수의 차이점:
// 위처럼 찍어내는 틀로는 class가 용이하나 기능적인 부분에 있어서는 생성자 함수로 만들기도 함.
// - 사용 이유
// - 동일한 프로퍼티를 가지는 객체 생성
// - prototype을 이용하여 메모리 효율을 높일 수 있음
