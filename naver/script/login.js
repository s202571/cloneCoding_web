//로그인 탭 제목 클릭 시 해당 내용 활성화  JS
// 1. ID로그인 클릭하면 로그인내용O, 일회용내용X, QR코드내용X ID로그인 제목 활성화(css)
// 2. 일회용번호 클릭하면 로그인내용X, 일회용내용O, QR코드내용X
// 3. QR코드 클릭하면 로그인내용X, 일회용내용X, QR코드내용O
// 제목변수
const login_title = document.querySelectorAll('.login_title h2 > a')
// 내용 변수
const login_c_all = document.querySelectorAll('.login_c')
// 타이틀 아이콘 변수
console.log(login_title, login_c_all)
// 모든 내용 숨기기 -> ID로그인만 보이기(초기)
const login_c_hide = ()=>{for(let h of login_c_all){h.style.display = 'none'}}
login_c_hide()
login_c_all[0].style.display = 'block'

// 초기값 ID로그인 활성화 시키기(active) *클릭 전
login_title[0].parentElement.classList.add('active')

// 초기 탭 제목 디자인 숨기기
const title_active_remove = () => {
    for(let rr of login_title){rr.parentElement.classList.remove('active')}
}
// 탭 제목 클릭 시 클릭한 대상에만 디자인 적용하기
// 초기값 아이콘
login_title.forEach((t, i)=>{
    console.log(t,i)
    t.addEventListener('click', ()=>{
        // 탭 제목
        title_active_remove()
        t.parentElement.classList.add('active')
        // 탭 내용
        login_c_hide()
        login_c_all[i].style.display = 'block'
    })
})

// -----------------------------------
console.log('로그인 메세지')
// 아이디 로그인 시 틀린 정보 또는 입력되지 않은 정보에 따라 error message 출력하기
// 1. 아이디 미입력 후 로그인 버튼 클릭 => "아이디를 입력해주세요"
// 2. 아이디 입력, 비밀번호 미입력 후 로그인 버튼 클릭 => "비밀번호를 입력해 주세요"
// 3. 아이디, 비밀번호 입력 후 로그인 버튼 클릭 시 해당 정보가 맞지 않다면 => "아이디(로그인 전용 아이디)또는 비밀번호를 잘못 입력 했습니다. 입력하신 내용을 다시 확인해 주세요"
// 4. 아이디, 비밀번호  입력 후 로그인 버튼 클릭 시 해당 정보가 맞다면 => 로그인 성공 팝업 "어서오세요 00님"
const userIdInput = document.querySelector('#userId')
const userPwInput = document.querySelector('#userPw')
const error_message = document.querySelector('.error_message')
const loginBtn = document.querySelector('#loginBtn')
const userList = [{
    id:'admin',
    pw:'1234'
}]
console.log(userIdInput,userPwInput,error_message,loginBtn)
console.log(userList)

console.log(userIdInput.value == '')
loginBtn.addEventListener('click', ()=>{
    if(userIdInput.value === ''){// 아이디 빈 문자열 검사 -> 참이라면
        error_message.innerHTML = '아이디를 입력해주세요' // 참일 때 실행
    }else if(userPwInput.value === ''){
        error_message.innerHTML = '비밀번호를 입력해주세요'
    }else if(userIdInput.value == userList[0].id && userPwInput.value == userList[0].pw){
        alert(`어서오세요 ${userList[0].id}님`)
        console.log('.')
    }else{
        error_message.innerHTML = '아이디(로그인 전용 아이디)또는 비밀번호를 잘못 입력 했습니다. 입력하신 내용을 다시 확인해 주세요'
        userPwInput.value = ''
    }
})