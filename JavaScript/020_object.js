const babaYaga = {
  name: "John Wick",
  age: 53,
  from: "벨라루스",
  askingHim: function () {
    console.log("Yeah, I'm thinking I'm back!");
  },
};

//최신문법 : 최신 문법을 사용하면 function 키워드 없이 메소드를 등록
const babaYaga = {
  name: "John Wick",
  age: 53,
  from: "벨라루스",
  askingHim() {
    console.log("Yeah, I'm thinking I'm back!");
  },
};

const a = "hello";
const b = "world";
const data = {
  a,
  c,
  c: "!!",
  d: [10, 20, 30],
};

//CRUD : 값 추가 (Creat, Read, Update, Delate)
// 데이터 추가 (like append in python), 데이터 업데이트 (update)
const human = {
  name: "hojun",
  age: 98,
};
human.heihgt = 250;
human[heihgt] = 250; // 이렇게 넣어도 동일
human;

const human2 = {
  ...human,
  age: 10,
}; //age 업데이트 된 human 2 추출 됨

// 객체의 메서드
// keys(), vaules()
// human.keys() // 이 메소드가 없음.
Object.keys(human);
Object.values(human);
Object.entries(human); // Key 와 Value 함께 줌
