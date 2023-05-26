// this == self in Python (유사)
// 예외사항이 많은 친구
//대개는 자기 자신을 호출하는 것

//a를 호출한 것이 window 이기 때문에 this 는 window 호출
//window.a()
function a() {
  console.log(this);
}
a();

let myObj = {
  val1: 100,
  func1: function () {
    console.log(this);
  },
};

myObj.func1();
// dot(.) 앞의 것을 호출하는 것 (대개는)

function sayName() {
  console.log(this.name); //this 는 window
}

var name = "Hero";
// 전역으로 선언한 name 변수의 앞에는 window 가 생략되어 있습니다.
// 때문에 window.name === "Hero" 가 성립합니다.
let peter = {
  name: "Peter Parker",
  sayName: sayName,
};

let bruce = {
  name: "Bruce Wayne",
  sayName: sayName,
};

sayName();
peter.sayName();
bruce.sayName();

// this의 특징
function sayName() {
  console.log(this.name);
}
var name = "Hero";

let peter = {
  name: "Peter Parker",
  sayName: sayName,
};

let bruce = {
  name: "Bruce Wayne",
  sayName: peter.sayName,
};

bruce.sayName();

//정리
// 1. 전역공간의 this는 window(node는 global)
// 2. 메서드로 호출한 경우 this는 멤버접근연산자 앞에 객체
// 3. 함수로 호출할 경우 this는 window(node는 global)
// 4. 화살표 함수의 경우 this는 상위스코프
// 5. 생성자 함수의 경우 this는 인스턴스
// 6. 콜백함수의 경우 this가 다르게 동작 할 수 있음

//////////////
const car = {
    name:'KIA'
    getName:function(){
        console.log("car getName",this)
    }
}

// car.getName()
const globalCar = car.getName
globalCar();

const car2 = {
    name: 'hyundai',
    getName:car.getName
}
car2.getName();

const btn = document.getElementById('button')
btn.addEventListener('click', car.getName);