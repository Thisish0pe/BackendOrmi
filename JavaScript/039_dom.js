// 탐험해봄세
document.head;
document.body;
document.body.childNodes;
document.body.childNodes[1];
document.body.childNodes[1].tagName;
document.body.childNodes[1].innerText;
document.body.childNodes[1].document.body.childNodes[2]; //점만 찍어서 얼마나 많은 애트리뷰트가 있는지 확인해보세요.
document.body.childNodes[2].data;

//
const myBtn = document.querySelector("button");

myBtn.addEventListener("click", function () {
  console.log("hello world");
});

const btnRed = document.querySelector("button");
const title = document.querySelector("#one");

btnRed.addEventListener("click", () => {
  title.classList.toggle("red");
});

const sectionTitle = document.createElement("h2");
sectionTitle.innerText = "hello";

//
const sectionTitle = document.createElement("h2");
sectionTitle.innerText = "hello";
sectionTitle;
document.querySelector("body").appendChild(sectionTitle);

/////

const body = document.querySelector("body");
const myUl = document.createElement("ul");

for (let i = 0; i < 5; i++) {
  const myLi = document.createElement("li");
  myLi.innerText = "hello!";
  myUl.appendChild(myLi);
}

body.appendChild(myUl);

const btn = document.createElement("button");
btn.innerText = "눌러";
const body = document.querySelector("body");
body.append(btn);
btn.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(this);
});

const submit = document.querySelector(".submit");
submit.addEventListener("click", (event) => {
  console.log("clicked");
  event.preventDefault();
});
