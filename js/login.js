const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector('.id');
const loginPw = document.querySelector('.pw');
const loginInfo = document.querySelector("#mypage");

// 로그인, 로그아웃
const logIn = document.querySelector(".login")
const logOut = document.querySelector(".logout")

const HIDDEN_CLASSNAME = "hidden";
const USER_KEY = "userId";


// 유저 아이디 받고 함수 처리
function paintLoginInfo(userId) {
    // 정보 보여주는 클래스 안에 유저 아이디 넣어주기
    loginInfo.innerText = `${userId}님 환영합니다`;
    // 정보 보여주는 클래스 none 빼주기
    loginInfo.classList.remove(HIDDEN_CLASSNAME);
}


// 로그아웃 기능
function LogOut() {
    // 로그인 시 로그아웃 버튼 보여주고 로그인 버튼 숨기기
    logOut.classList.remove(HIDDEN_CLASSNAME)
    logIn.classList.add(HIDDEN_CLASSNAME)

    // 로그인 버튼 클릭 시 해당 함수 실행
    logOut.addEventListener('click', onLogoutSubmit)

    // 아이디, 비밀번호 입력 창 숨기기
    loginForm.classList.add(HIDDEN_CLASSNAME)
    loginInput.value = null
    loginPw.value = null
}

function onLogoutSubmit() {

    // logout.preventDefault();
    // 로그아웃 버튼 클릭 시 로그인 회원 정보 숨기기
    loginInfo.classList.add(HIDDEN_CLASSNAME);

    // 로그아웃 시 로그인 버튼 보여주고 로그아웃 버튼 숨기기
    logOut.classList.add(HIDDEN_CLASSNAME);
    logIn.classList.remove(HIDDEN_CLASSNAME);

    // 아이디, 비밀번호 입력칸 보여주기
    loginForm.classList.remove(HIDDEN_CLASSNAME)

    // userkey=즉 유저의 id를 로컬스토리지에서 삭제.
    localStorage.removeItem(USER_KEY);
    // 로그인 폼 재 로딩 서밋 > 로그인 함수
    loginForm.addEventListener('submit', onLoginSubmit);

}


// 최초 로그인 
function onLoginSubmit(login) {
    // 1. 브라우저의 기본 이벤트 막기 (submit)
    login.preventDefault();
    // 2. 정보 보여주는 클래스 none 해주기
    loginInfo.classList.add(HIDDEN_CLASSNAME);
    // 3. 유저 아이디 변수에 저장하기
    const userId = loginInput.value;
    // 4. 유저 아이디 로컬스토리지에 보내기
    localStorage.setItem(USER_KEY, userId)
    // 5. paintLoginInfo함수에 유저 아이디 넘겨주기
    paintLoginInfo(userId)
    LogOut()
}


// 로컬스토리지에 저장된 유저 아이디 변수에 저장하기 
const saveUserId = localStorage.getItem(USER_KEY);

// 로컬스토리지 유저 Key가 null 이면 아래 실행
if (saveUserId === null) {
    // 정보 보여주는 클래스에 hidden을 추가. 숨기기
    loginInfo.classList.add(HIDDEN_CLASSNAME);

    loginForm.classList.remove(HIDDEN_CLASSNAME)
    // 로그인 폼 submit 후, onLoginSubmit 함수 실행 
    loginForm.addEventListener('submit', onLoginSubmit)
} else {
    // 로컬스토리지 유저 Key가 있으면 paintLoginInfo 함수에 유저 아이디 넘겨주기
    paintLoginInfo(saveUserId)
    LogOut()
}

