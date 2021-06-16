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
