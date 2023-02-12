const headerAction = () => {
    const navLinks = document.querySelectorAll('.header__nav--text');

    navLinks.forEach((element) => {
        element.addEventListener('click', (el) => {
            navLinks.forEach((e) => {
                if (e.classList.contains('active__header')) {
                    e.classList.remove('active__header');
                }
            });
            el.target.className = 'header__nav--text active__header';
        });
    });
};

export { headerAction };