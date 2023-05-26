let myArr = new Array(1, 2, 3);
// new is similar with class in Python
// 인스턴스를 만들어내듯이 찍어내는 것

let myArr = new Array(1, 2, 3);
let myArr2 = new Array(4, 5, 6);

myArr2.length;
myArr.length;

myArr.forEach((item) => {
  console.log(item);
});

myArr2.forEach((item) => {
  console.log(item);
});

//커스텀 생성자

// robot1 instanceof Factory
//인스턴스 확인

function Factory() {}
function NewFactory(name) {
  // New 들어가면 this
  this.name = name;
  this.sayYourName = function () {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
  };
}

let robot1 = new Factory();
let robot2 = new NewFactory("브랜든2");
let robot3 = new NewFactory("브랜든3");
let robot4 = new NewFactory("브랜든4");

//100개의 객체를 생성할때마다 역시 100개의 함수를 새로 만들고 있는것
function Parent() {
  this.name = "재현";
}
Parent.prototype.rename = function (name) {
  this.name = name;
};
//prototype은 자기자신을 바꾸는 것
Parent.prototype.sayName = function () {
  console.log(this.name);
};

//실행 코드

//상속 받자
function Child() {
  Parent.call(this);
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.canWalk = function () {
  console.log("now i can walk!!");
};

///////////////////

class Robot {
  // 클래스의 생성자 함수입니다. 하나의 클래스는 하나의 생성자만 정의할 수 있습니다.
  // 그리고 생성자 함수는 new 키워드가 호출될때 자동으로 실행됩니다.
  // python에 __init__()
  constructor(name) {
    this.name = name;
  }

  // 메소드를 정의합니다. 메소드는 클래스가 생성한 인스턴스를 통해 사용할 수 있습니다.
  // 앞에 function 키워드가 없습니다.
  sayYourName() {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
  }
}

class BabyRobot extends Robot {
  constructor(name) {
    super(name);
    this.ownName = "아이크";
  }

  sayBabyName() {
    // 또한 상속을 받게되면 부모 클래스의 메소드를 사용할 수 있게 됩니다. 때문에 this로 접근 할 수 있습니다.
    this.sayYourName();
    console.log("Suceeding you, Father!");
  }
}

///// 주석 없는 버전
class Robot {
  constructor(name) {
    this.name = name;
  }

  sayYourName() {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
  }
}

class BabyRobot extends Robot {
  constructor(name) {
    super(name);
    this.ownName = "아이크";
  }

  sayBabyName() {
    this.sayYourName();
    console.log("Suceeding you, Father!");
  }
}

let one = new Robot("one"); // 인스턴스 생성
let two = new BabyRobot("two");
