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

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();