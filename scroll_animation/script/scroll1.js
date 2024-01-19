const link_btn = document.querySelectorAll('button')
const photo = document.querySelectorAll('.photo img')
console.log(link_btn, photo)

link_btn.forEach((t, i)=>{
    t.addEventListener('click', ()=>{
        window.scrollTo(0, photo[i].offsetTop)
    })
})

// a태그 일 때
/* link_btn.forEach((t, i)=>{
    t.addEventListener('click', (e)=>{
        console.log(e)
        //이벤트 기능을 막아줌(a태그의 href기능)
        e.preventDefault()
        window.scrollTo(0, photo[i].offsetTop)
    })
}) */