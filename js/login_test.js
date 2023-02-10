const loginForm = document.querySelector("#login-form")
const loginId = document.querySelector(".id")
const loginPw = document.querySelector(".pw")
const loginBtn = document.querySelector(".login")
const loginInfo = document.querySelector("#mypage")

const LOGIN_ID = "LOGIN_ID"
const HIDDEN = "hidden"


function paintID(id){
    // 정보 보여주는 클래스 안에 유저 아이디 넣어주기
    loginInfo.innerText = `${id}님 환영합니다`
    // 정보 보여주는 클래스 none 빼주기
    loginInfo.classList.remove(HIDDEN);
    loginId.classList.add(HIDDEN);
    loginPw.classList.add(HIDDEN);
    
}

function logout(){
     // 로그인 시 로그아웃 버튼 보여주고 로그인 버튼 숨기기
    loginBtn.value="로그아웃"

    // 로그아웃 버튼 클릭 시 해당 함수 실행
    loginBtn.addEventListener('click', logoutBtn)
    loginId.value = null
    loginPw.value = null
}

function logoutBtn(){
    localStorage.removeItem(LOGIN_ID)
    loginInfo.classList.add(HIDDEN)
    loginId.classList.remove(HIDDEN)
    loginPw.classList.remove(HIDDEN)
    loginBtn.value="로그인"
    loginForm.addEventListener('submit', login)
}

function login(event) {
    // 기본 새로고침 막기
    event.preventDefault();
    // 아이디 변수에 저장
    const userId = loginId.value;
    // 아이디 로컬에 저장
    localStorage.setItem(LOGIN_ID, userId)
    paintID(userId)
    logout()
}


const saveUserId = localStorage.getItem(LOGIN_ID)
if (saveUserId === null) {
    loginForm.addEventListener('submit', login)
}else{
    paintID(saveUserId)
    logout()
}