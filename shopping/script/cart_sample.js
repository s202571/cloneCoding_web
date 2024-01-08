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

price_info_open.style.display ='none';
// price_info_open.style = "display:none";

price_info.addEventListener('click', function(){
    price_info_open.style.display ='block';
})
// 내일 출발 i 쿨릭 시 팝업 출력하고 팝업 내 X 클릭 시 팝업 닫히기 JS
// 1. 팝업 숨기기
// 2. i 클릭시 팝업 출력
// X 클릭 시 팝업 닫히기
const benefit_shipping_open = item_detail.querySelector('.benefit_shipping .open')
const benefit_shipping_close = benefit_shipping_open.querySelector('.benefit_shipping .close')
const benefit_shipping_info = item_detail.querySelector('.benefit_shipping i[class$=info]')
console.log(benefit_shipping_open, benefit_shipping_close, benefit_shipping_info)

// 1.
benefit_shipping_open.style.display = 'none';

// 2.
benefit_shipping_info.addEventListener('click', function(){
    benefit_shipping_open.style.display = 'block';
})

// 3.
benefit_shipping_close.addEventListener('click', function(){
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

delivery_menu.addEventListener('click', function(){
    delivery_menu.style = 'border-bottom-left-radius:0; border-bottom-right-radius:0;';
    delivery_menu_fa.style = 'transform :scaleY(-1);'
    delivery_menu_open.style = 'display:flex; '
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

const colorOpt = document.querySelector('#colorOpt')
const sizeOpt = document.querySelector('#sizeOpt')
const selectresult = document.querySelectorAll('.selectResult')
const selectresult_color = document.createElement('em')
const selectresult_size = document.createElement('em')
const opt_list = document.querySelectorAll('.opt_list')
console.log(colorOpt,sizeOpt,selectresult)
console.log(selectresult_color,selectresult_size,opt_list)
console.log(colorOpt.options[1].value)
console.log(colorOpt.options[1].value.text)
// colorOpt, sizeOpt text데이터를 모두 변수로 수집 후
// createElement, appendChild 를 이용해서 opt1, opt2 선택 데이터 출력하기
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
// 1. 색상을 선택 안하면 사이즈가 선택이 안된다
// 2. 색상마다 사이즈값이 개별값이다
// 3. 사이즈 까지 입력해야 selectResult가 나온다
// 4. 똑같은 값을 한번 더 입력하면 '이미 선택한 옵션입니다' 라고 팝업이 나온다
// selectResult에서 + - 사용이된다
// X를 누르면 seletResult가 지워진다
// 가격이 수량에 따라 올라간다
// 주문 가격이 num_result의 모든 값이 합쳐진 금액이다