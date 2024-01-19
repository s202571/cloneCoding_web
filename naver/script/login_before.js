// 초기 일회용, QR 내용 숨기기
disposable_login_container.style.display = 'none'
qr_login_container.style.display = 'none'

// ID로그인 클릭하면 로그인내용O, 일회용내용X, QR코드내용X
login_title[0].addEventListener('click', function(){
    id_login_container.style.display = 'block'
    disposable_login_container.style.display = 'none'
    qr_login_container.style.display = 'none'
    login_title[0].parentElement.classList.add('active')
    login_title[1].parentElement.classList.remove('active')
    login_title[2].parentElement.classList.remove('active')
})
// 일회용 클릭하면 로그인 내용X 일회용내용O, QR코드내용X
login_title[1].addEventListener('click', function(){
    id_login_container.style.display = 'none'
    disposable_login_container.style.display = 'block'
    qr_login_container.style.display = 'none'
    login_title[0].parentElement.classList.remove('active')
    login_title[1].parentElement.classList.add('active')
    login_title[2].parentElement.classList.remove('active')
})
// QR코드 클릭하면 로그인내용X, 일회용내용X, QR코드내용O
login_title[2].addEventListener('click', function(){
    id_login_container.style.display = 'none'
    disposable_login_container.style.display = 'none'
    qr_login_container.style.display = 'block'
    login_title[0].parentElement.classList.remove('active')
    login_title[1].parentElement.classList.remove('active')
    login_title[2].parentElement.classList.add('active')
})