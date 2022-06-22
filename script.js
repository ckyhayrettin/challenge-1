const submıtButton = document.querySelector('.btn');
const closeButton = document.querySelector('.close-btn');
const numberValue = document.querySelector('.number-value');
const number = document.querySelector('.number');
const section = document.querySelector('.section');
const show = document.querySelector('.show')


number.addEventListener('click', function (e) {

    if (e.target.classList.contains('val')) {
        let numara = e.target.textContent;
        numberValue.textContent = numara;
    };
    e.preventDefault();
});

submıtButton.addEventListener('click', function () {
    section.className = 'of-value';
    show.className = 'show-value'
})