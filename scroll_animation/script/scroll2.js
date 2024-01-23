const body = document.querySelector('html, body')
const link_a = document.querySelectorAll('.link a')
const bg = document.querySelectorAll('.bg')
const nav_btn = document.querySelectorAll('nav .link_btn')
const circle = document.querySelector('.circle')
console.log(link_a,bg, nav_btn,circle)

link_a[0].classList.add('active')

bg.forEach((obj, idx)=>{
    console.log(bg[idx].offsetTop)
})

// 스크롤 했을 때 / 각 bg의 위치에 닿으면 / link-a 색상이 변경
// scroll / if, offsetTop / classList 
window.addEventListener('scroll', ()=>{
    link_a.forEach((obj, idx)=>{
        // console.log('.')
        if(body.scrollTop >= bg[idx].offsetTop-200){
            // console.log('..')
            // 함수 호출
            link_a_remove()
            link_a[idx].classList.add('active')
        }
    })
})

// 클래스 초기화 함수 생성
const link_a_remove = ()=>{
    for(let i of link_a){i.classList.remove('active')}
}

// nav_btn 클릭 시 각 bg1~4 위치로 스크롤 이동
nav_btn.forEach((t, i)=>{
    console.log(bg[i])
    t.addEventListener('click', ()=>{
        console.log(bg[i])
        window.scrollTo(0, bg[i].offsetTop)
    })
})
link_a.forEach((t,i)=>{
    console.log(t)
    t.addEventListener('click', (e)=>{
        console.log(bg[i])
        e.preventDefault()
        window.scrollTo(0, bg[i].offsetTop)
    })
})

// 마우스 따라다니기
window.addEventListener('mousemove', (e)=>{
    circle.style.left = `${e.clientX}px`
    circle.style.top = `${e.clientY}px`
    console.log('.')
})
