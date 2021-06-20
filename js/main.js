const SearchElement = document.querySelector('.search');
const SearchInputElement = SearchElement.querySelector('input');


SearchElement.addEventListener('click', () => {
    SearchInputElement.focus();
});

SearchInputElement.addEventListener('focus', () => {
    SearchElement.classList.add('focused');
    // html 속성 추가 하는 것.
    SearchInputElement.setAttribute('placeholder', '통합검색');
});

SearchInputElement.addEventListener('blur', () => {
    SearchElement.classList.remove('focused');
    // html 속성 추가 하는 것.
    // SearchInputElement.removeAttribute('placeholder');
    SearchInputElement.setAttribute('placeholder', '');
});

const badgeElement = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(() => {
    // console.log(window.scrollY);
    if (window.scrollY > 500) {
        // 배지 숨기기
        // gsap.to(요소, 지속시간,옵션);
        gsap.to(badgeElement, .6, {
            opacity: 0,
            display: 'none'
        });
    }
    else {
        // 배지 보여주기
        gsap.to(badgeElement, .6, {
            opacity: 1,
            display: 'block'
        });
    }
}, 300));
// _.throttle(함수,시간)


const fadeElements = document.querySelectorAll('.visual .fade-in');
fadeElements.forEach((fadeElement, index) => {
    gsap.to(fadeElement, 1, {
        delay: (index + 1) * 0.6,
        opacity: 1
    })
});


// Swiper
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});
new Swiper('.promotion .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 4000,
    },
    pagination: {
        el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable: true, // 사용자의 페이지 번호 요소 제어
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next',
    },
})

const promotionElement = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', () => {
    isHidePromotion = !isHidePromotion
    if (isHidePromotion) {
        //숨김처리
        promotionElement.classList.add('hide');
    } else {
        //보임 처리
        promotionElement.classList.remove('hide');
    }
})
// 랜덤 변수
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
// icon 움직임 (youtube 영상내)
function floatingObject(selector, delay, size) {
    // gsap.to(요소,시간,옵션);
    gsap.to(
        selector, // 선택자
        random(1.5, 2.5), // 애니메이션 동작 시간
        {// 옵션
            y: size, // y축
            repeat: -1,
            yoyo: true,
            ease: Power1.easeInout,
            delay: random(0, delay),
        });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);