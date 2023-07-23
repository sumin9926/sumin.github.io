const loginInput = document.querySelector(".user-id");
const loginButton = document.querySelector(".submit-button");
const loginForm = document.querySelector(".login");
const commentary = document.querySelector("#commentary"); //인사말
const username = document.querySelector(".username"); //사용자 이름(아이디)

const HIDDEN_CLASSNAME = "hidden";
const USERID_KEY = "userid";

const savedUserId = localStorage.getItem(USERID_KEY); //저장된 사용자 아이디

//사용자 아이디를 출력해주는 함수.
function paintGreetings(userid) {
  username.innerHTML = `${userid}`;
  commentary.classList.remove(HIDDEN_CLASSNAME);
}

// 정상적인 아이디 입력시 로그인 창을 숨기고 인사말을 출력하는 함수.
function onLoginSubmit(e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userid = String(loginInput.value);
  localStorage.setItem(USERID_KEY, userid);
  paintGreetings(userid);
}

//정상적인 아이디가 입력되었는지 확인하는 함수.
function onLoginBtnClick() {
  const userIdValue = loginInput.value;
  if (userIdValue === "") {
    alert("please write your ID!");
  } else if (userIdValue.length < 5) {
    alert("Your ID is too short. Need more than 5 characters.(MAX length 15)");
  } else {
    loginForm.addEventListener("submit", onLoginSubmit);
  }
}

loginButton.addEventListener("click", onLoginBtnClick);

//저장된 사용자 아이디가 없으면 아이디 입력창 출력, 저장된 아이디가 있으면 인사말 출력.
if (savedUserId === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginButton.addEventListener("click", onLoginBtnClick);
} else {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(savedUserId);
}
