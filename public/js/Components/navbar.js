const navbarAction = () => {
    const navbarLists = document.querySelectorAll('.navbar__nav--list');
    const navbarListsText = document.querySelectorAll('.navbar__nav--list-text');
    const navbarListsIcon = document.querySelectorAll('.navbar__nav--list-icon path');
    console.log(navbarListsIcon);
    const navContainer = document.querySelector('.navbar__nav--lists');
    const ribbon = document.createElement('div');
    ribbon.classList.add('ribbon');
    navbarListsText[0].classList.add('active__text');
    navbarLists[0].appendChild(ribbon);
    navbarLists.forEach((item) => {
        item.addEventListener('click', (e) => {
            item.append(ribbon);
            navbarListsText.forEach((el) => {
                if (el.classList[1] === 'active__text') {
                    el.className = 'navbar__nav--list-text';
                }
            });
            navbarListsIcon.forEach((el) => {
                if (el.classList[1] === 'active__icon') {
                    //     el.className = 'navbar__nav--list-icon';
                    el.setAttribute('class', 'navbar__nav--list-icon');
                }
            });
            document.querySelector('.ribbon').previousElementSibling.classList.add('active__text');
            document.querySelector('.ribbon').previousElementSibling.previousElementSibling.classList.add('active__icon');
        });
    });
};

export { navbarAction };