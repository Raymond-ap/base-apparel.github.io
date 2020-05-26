const errorConainer = document.querySelector('.error');
const formInput = document.querySelector('.input-form');
const button = document.querySelector('button');

button.addEventListener('click', function (e) {
    if (formInput.value.includes('@') && formInput.value.includes('.com')) {
        errorConainer.style.color = 'hsl(0, 36%, 70%)'
        errorConainer.innerHTML = 'Email submitted';
    } else if (!formInput.value.includes('@') && !formInput.value.includes('.com')) {
        errorConainer.style.color = 'hsl(0, 93%, 68%)';
        errorConainer.style.padding = '0rem 1rem';
        errorConainer.innerHTML = 'Please email should be valid';
        e.preventDefault();
    }
});
