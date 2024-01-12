//왼쪽 썸네일 이미지 JS
// 1. small_thumnail-a 마우스 올리면 (ex) small2 마우스 올렸다면
// 2. big_thumnail-img(src) 값이 변경된다. (ex) big1이 big2 이미지 변경
const item_detail = document.querySelector('.item_detail')
const small_thum = item_detail.querySelectorAll('.small_thumnail a')
const big_thum = item_detail.querySelector('.big_thumnail img')
console.log(item_detail,small_thum,big_thum)

small_thum[0].addEventListener('mouseover', function(){
    big_thum.src = './dog_images/big1.jpg'
})
small_thum[1].addEventListener('mouseover', function(){
    big_thum.src = './dog_images/big2.jpg'
})

//가격 할인 정보 클릭 시 나오는 정보 팝업
//1. 팜업 숨기기
//2. i 클릭 시 팝업보이기
const before = document.querySelector('.price .before')
const price_info_open = before.querySelector('.price .open')
const price_info = before.querySelector('.price i[class$=info]')
console.log(before,price_info_open,price_info) 
let price_info_open_status = false

price_info_open.style.display ='none';
// price_info_open.style = "display:none";

price_info.addEventListener('click', function(){
    if(price_info_open_status == false){
        price_info_open.style.display ='block';
        price_info_open_status = true
    }else{
        price_info_open.style.display ='none';
        price_info_open_status = false
    }
})
// 내일 출발 i 쿨릭 시 팝업 출력하고 팝업 내 X 클릭 시 팝업 닫히기 JS
// 1. 팝업 숨기기
// 2. i 클릭시 팝업 출력
// X 클릭 시 팝업 닫히기
const benefit_shipping_open = item_detail.querySelector('.benefit_shipping .open')
const benefit_shipping_close = benefit_shipping_open.querySelector('.benefit_shipping .close')
const benefit_shipping_info = item_detail.querySelector('.benefit_shipping i[class$=info]')
let benefit_shipping_open_status = false
console.log(benefit_shipping_open, benefit_shipping_close, benefit_shipping_info)

// 1.
benefit_shipping_open.style.display = 'none';

// 2.
benefit_shipping_info.addEventListener('click', function(){
    if(benefit_shipping_open_status == false){
        benefit_shipping_open.style.display = 'block';
        benefit_shipping_open_status = true
    }else{
        benefit_shipping_open.style.display = 'none';
        benefit_shipping_open_status = false
    }
})

// 3.
benefit_shipping_close.addEventListener('click', function(){
    benefit_shipping_open_status = false
    benefit_shipping_open.style.display = 'none';
})

/* 목표) 배송 1/9 (화) 도착 예정 94% 메뉴를 클릭하면 메뉴 펼침 정보 나타나기

1. 펼침 메뉴 초기 숨기기
2. 배송1/9(화) 도착 예정 94% 메뉴 클릭 시 
3. 위(2)의 둥근 모서리 하단 모양 뾰족하게 변경
4. 위(2)의 94% 옆 화살표 상하 반전 하기
5. 메뉴 펼침 정보 보이기 */
const delivery_menu = item_detail.querySelector('.delivery_menu')
const delivery_menu_open = item_detail.querySelector('.delivery_menu_open')
const delivery_menu_fa = item_detail.querySelector('.delivery_menu i[class$=down]')
console.log(delivery_menu, delivery_menu_open, delivery_menu_fa)

delivery_menu_open.style.display = 'none';
let delivery_menu_open_status = false // 현재 상태 변수(false==숨김)
delivery_menu.addEventListener('click', function(){
    if(delivery_menu_open_status == false){
        console.log(delivery_menu_open_status) // open
        delivery_menu.style = 'border-bottom-left-radius:0; border-bottom-right-radius:0;';
        delivery_menu_fa.style = 'transform :scaleY(-1);'
        delivery_menu_open.style = 'display:flex; '
        delivery_menu_open_status = !delivery_menu_open_status
    }else{
        console.log(delivery_menu_open_status) // close
        delivery_menu_open_status = !delivery_menu_open_status
        delivery_menu.style = 'border-bottom-left-radius:5px; border-bottom-right-radius:5px;';
        delivery_menu_fa.style = 'transform :scaleY(1);'
        delivery_menu_open.style = 'display:none; '
    }
    
})
//상품 색상, 사이즈 옵션을 선택했을 때 선택정보가 selectResult에 결과 값으로 출력되고 num_result의 구매수량에 따라 order_price 에 가격이 출력 되는 결과
//상세절차 : 상품 색상, 사이즈 옵션을 선택했을 때
// 1. 색상(옵션1) 선택시 사이즈(옵션2) 활성화
// 2. 옵션1 선택시 옵션2 활성화
// 2-1. 옵션1에 대한 option데이터에 따라 옵션2의 각 다른 select 활성화
// 3. 옵션1 선택 후 옵션2 클릭 시 결과 출력
// 3-1. (위) 조건 달성 기준 결과 출력이 되어있는 상태라면 같은 옵션 클릭 시 중복 데이터 결과 팝업 출력
// 3-2. (위) 조건 달성 기준 결과 출력과 다른 옵션을 클릭 시 추가 게이터 기존데이터 (위) 결과
// 3-3. (위) 조건 달성 기준 옵션1, 옵션2의 선택 데이터는 초기화됨


/* // 나의 방식

const selectresult_color = document.createElement('em')
const selectresult_size = document.createElement('em')
const opt_list = document.querySelectorAll('.opt_list')
console.log(colorOpt,sizeOpt,selectresult)
console.log(selectresult_color,selectresult_size,opt_list)
console.log(colorOpt.options[1].value)
console.log(colorOpt.options[1].value.text)
// colorOpt, sizeOpt text데이터를 모두 변수로 수집 후
// createElement, appendChild 를 이용해서 opt1, opt2 선택 데이터 출력하기

// selectresult.style.display = 'none';

colorOpt.addEventListener('change', function(){
    console.log(colorOpt.value)
    console.log(colorOpt.options[colorOpt.selectedIndex].text)
    selectresult_color.innerText = colorOpt.options[colorOpt.selectedIndex].text
})
sizeOpt.addEventListener('change', function(){
    console.log(sizeOpt.options[sizeOpt.selectedIndex].text)
    selectresult_size.innerText = sizeOpt.options[sizeOpt.selectedIndex].text

    opt_list[0].appendChild(selectresult_color)
    opt_list[0].appendChild(selectresult_size)
})
// selectResult 안 X 클릭 시 X의 부모를 DOM관계로 선택해서 숨기기
const resultClose = selectresult.querySelector('.close')
console.log(resultClose)

resultClose.addEventListener('click', function(){
    console.log(resultClose.parentElement)
    resultClose.parentElement.style.display = 'none';
}) */


// 선생님 방법
const colorOpt = document.querySelector('#colorOpt')
const sizeOpt = document.querySelector('#sizeOpt')
const selectresult = document.querySelector('.selectResult')
const optResult1 = document.createElement('em')
const optResult2 = document.createElement('em')
const resultView = document.querySelectorAll('.selectResult > span > span[class^=opt')
console.log(resultView)

const num_count = selectresult.querySelector('#num_count')
const order_price = selectresult.querySelector('.order_price')
const price_total = document.querySelector('fieldset:nth-child(2) .order_price')
let num = 1;
let price = 36900;
console.log(num_count,order_price, price_total)

selectresult.style.display = 'none';

sizeOpt.disabled = true; // size select 비활성화

colorOpt.addEventListener('change', function(){
    console.log(colorOpt)
    console.log(colorOpt.options[colorOpt.selectedIndex].text)
    optResult1.innerHTML = colorOpt.options[colorOpt.selectedIndex].text
    console.log(optResult1)

    sizeOpt.disabled = false; // 색상 선택 후 사이즈 선택 가능
})
sizeOpt.addEventListener('change', function(){
    console.log(sizeOpt.options[sizeOpt.selectedIndex].text)
    optResult2.innerHTML = sizeOpt.options[sizeOpt.selectedIndex].text
    console.log(optResult2)
    //선택부모 보이기
    selectresult.style.display = 'grid';
    selectResult_status = true // 장바구니에 담겼습니다
    //선택 옵션 적용 대상에 위 option데이터값 출력
    resultView[0].appendChild(optResult1)
    resultView[1].appendChild(optResult2)
    //선택 옵션의 수량 (num)출력
    num_count.value = num;
    //선택 옵션의 수량 (price)출력
    order_price.innerHTML = price.toLocaleString('ko-kr')+'원'
    price_total.innerHTML = price.toLocaleString('ko-kr')+'원'
})


// selectResult 안 X 클릭 시 X의 부모를 DOM관계로 선택해서 숨기기
const resultClose = selectresult.querySelector('.close')
console.log(resultClose)

resultClose.addEventListener('click', function(){
    console.log(resultClose.parentElement)
    resultClose.parentElement.style.display = 'none';
    selectResult_status = false // 장바구니 상품 선택하세요
})

// 수량 -, + 버튼 클릭 시 수량 값이 변경되어 그에 따라 가격 변동
const minus = selectresult.querySelector('#minus')
const plus = selectresult.querySelector('#plus')
let total = 0
console.log(minus,plus)
// 1. 수량 1증가
// 1-1. 수량 1증가한 값 표시
// 2. 수량*가격 = 구매가격
// 3. 구매가 세자리 콤마 표시

// 최소 구매 수량1, 최대구매수량 7
// 최소 구매수량입니다
//재고 7개로 더 구매할 수 없습니다
plus.addEventListener('click', ()=>{
    if(num < 7){
        num++
        num_count.value = num;
        total = num*price;
        order_price.innerHTML = total.toLocaleString('ko-kr')+'원'
        price_total.innerHTML = total.toLocaleString('ko-kr')+'원'
    }else{
        alert('재고 7개로 더 구매할 수 없습니다')
    }
})
minus.addEventListener('click', ()=>{
    if(num > 1){
        num--
        num_count.value = num;
        total = num*price;
        order_price.innerHTML = total.toLocaleString('ko-kr')+'원'
        price_total.innerHTML = total.toLocaleString('ko-kr')+'원'
    }else{
        alert('최소 구매 수량입니다')
    }
    // if(num === 1){
    //     alert('최소구매 수량입니다')
    // }
})
// 상품을 추가해 주세요 팝업
// 장바구니에 상품이 담겼습니다
const cartBtn = document.querySelector('#cart')
const buyBtn = document.querySelector('#buy')
let selectResult_status = false 
// selectResult_status = true => selectResult 가 보일 때 적기
// 다시 close 눌를 때 selectAResult_status = false 적기
console.log(cartBtn,buyBtn)
cartBtn.addEventListener('click' ,()=>{
    if(selectResult_status == false ){
        alert('상품을 추가해주세요')
    }else(
        alert('장바구니에 상품이 담겼습니다')
    )
})