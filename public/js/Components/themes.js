const switchTheme = () => {
    let getThemeFromLocalStorage = localStorage.getItem('Theme') || 'light';
    const switchToggle = document.querySelector('#switch');
    const themesBtn = document.getElementById('theme');
    const themeBtnText = document.querySelector('#theme span');
    const darkModeBtn = document.querySelector('.darkModeBtn');
    const darkModeBox = document.querySelector('#darkModeBox');
    const ribbon = document.querySelector('.ribbon');
    const homePageElement = document.getElementById('homePage');
    const homePageText = document.querySelector('#homePage .navbar__nav--list-text');

    themesBtn.addEventListener('click', (e) => {
        darkModeBtn.classList.add('activeDarkModeBtn');
        themesBtn.classList.add('active__theme');
        themesBtn.classList.add('activate');
    });

    window.addEventListener('click', (e) => {
        if (themesBtn.className.includes('active__theme')) {
            darkModeBox.classList.add('activeDarkModeBtn');
            themesBtn.classList.remove('active__theme');
        } else {
            darkModeBox.classList.remove('activeDarkModeBtn');
            if (document.querySelector('.navbar__nav--lists').contains(e.target)) {
                console.log('clicked in navbar');
                console.log(e.target);
                themesBtn.classList.remove('activate');
            } else {
                if (themesBtn.className.includes('activate')) {
                    homePageElement.append(ribbon);
                    homePageText.classList.add('active__text');
                    themeBtnText.className = 'navbar__nav--list-text';
                    themesBtn.classList.remove('activate');
                }
            }
        }
    });

    if (getThemeFromLocalStorage === 'dark') {
        document.body.className = 'dark-mode';
        switchToggle.checked = true;
    }

    switchToggle.addEventListener('change', (e) => {
        if (e.target.checked) {
            document.body.className = 'dark-mode';
            localStorage.setItem('Theme', 'dark');
        } else {
            document.body.className = 'light';
            localStorage.setItem('Theme', 'light');
        }
    });
};

export { switchTheme };