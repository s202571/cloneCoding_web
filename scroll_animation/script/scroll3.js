const txt = document.querySelector('.txt')
const info1 =document.querySelector('.info1')
const info2 =document.querySelector('.info2')
console.log(txt) //div.txt
console.log(txt.children) //h1
console.log(info1.children[0])
console.log(info1.children[0].getBoundingClientRect().top)

window.addEventListener('scroll', ()=>{
    if(txt.getBoundingClientRect().top <= 400){
        txt.children[0].style.animation = 'opcity_scale 1s both'
    }
    if(info1.getBoundingClientRect().top <= 400){
        info1.children[0].style.animation = 'translate1 1s both'
    }
    if(info2.getBoundingClientRect().top <= 400){
        info2.children[0].style.animation = 'translate2 1s both'
    }
})
// 스크롤 이벤트를 이용한 등장 애니메이션 제작 시 if조건 대상은 실제 애니메이션 적용 대상이 아닌 그 대상을 묶고있는 가까운 부모 그룹으로 처리하는게 좋다
// h1에 등장이펙트를 주고 싶다면 h1이 봉일 때 h1에 넣어라가 아닌 부모.txt가 뷰포트 영역에 등장 할 때 자식 h1에 이펙트를 넣어라.와 같이 ~!