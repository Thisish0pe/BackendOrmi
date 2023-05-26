// 논리 연산자 (&&, ||, !)
let x = true; // 1
let y = false; // 0

// && 는 곱
// || 는 합
// ! 는 부정

x && y; //false
X || y; // true
!y; // ture
!x; // false
!!"hello"; // true

!!NaN; // false
!!null; // false
!!undefined; // false

!![]; // true 이거 말고 아래꺼 쓰세요.
Number.isNaN({});
Number.isNaN([]);
// 와 object 의 길이를 함께 판단하시면 됩니다.

////////////////////////////////////////////

//JavaScript에서는 아래와 같은 단락평가를 자주 사용합니다.
// 단락평가?
null && "hello"; // null
"world" && "hello"; // 'hello'

//단락평가는 거의 ||를 사용합니다.
let name = "";
name = name || "이름이 입력되지 않음"; // 앞이 false여서 '이름이 입력되지 않음'이 뜨는 것

//보통은 3항 연산자 + 단락평가로 사용합니다.
let 로그인여부 = true;
로그인페이지 = 로그인여부 && "<h1>환영합니다. 고객님.</h1>";
로그인페이지;

let pw = "";
pw = pw || "비밀번호가 입력되지 않았습니다.";
pw;
