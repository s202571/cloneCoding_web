//Q. "like_off.png" 클릭 시 src속성값을 "like_on.png"
const like = document.querySelectorAll('.like')
const comment = document.querySelectorAll('.comment')
const send = document.querySelectorAll('.send')
console.log(like, comment,send)
// like.src = 'images/like_on.png'
// like.src = 'images/like_off.png'
// like.src = 'images/comment_on.png'
// like.src = 'images/comment_off.png' ... 동일 규칙명
function onOff(name, status){
    return `./images/${name}_${status}.png`
}
function onOff_v2(target, name, status){
    return target.children[0].src = `./images/${name}_${status}.png`
}
like[0].addEventListener('click', function(){
    // like.children[0].src = onOff('like','on')
    //this == 현재 이벤트 대상 객체 키워드 ('이벤트종료',function(){이벤트 함수 내에서 사용 할 때})
    onOff_v2(this,'like','on')
})
comment[0].addEventListener('click', function(){
    onOff_v2(this, 'comment', 'on')
})
send[0].addEventListener('click', function(){
    onOff_v2(this, 'paper', 'on')
})
like[1].addEventListener('click', function(){
    // like.children[0].src = onOff('like','on')
    //this == 현재 이벤트 대상 객체 키워드 ('이벤트종료',function(){이벤트 함수 내에서 사용 할 때})
    onOff_v2(this,'like','on')
})
comment[1].addEventListener('click', function(){
    onOff_v2(this, 'comment', 'on')
})
send[1].addEventListener('click', function(){
    onOff_v2(this, 'paper', 'on')
})