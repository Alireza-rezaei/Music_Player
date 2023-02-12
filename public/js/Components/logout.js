const logoutAction = () => {
    const logoutBtn = document.querySelector('.logout__btn');

    logoutBtn.addEventListener('click', (e) => {
        const isClose = confirm('Are You Sure Close Music player ?');

        console.log(isClose);

        if (isClose) {
            console.log('closed');
        }
    });
};

export { logoutAction };