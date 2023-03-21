const logoutAction = () => {
    const logoutBtn = document.querySelector('.logout__btn');

    logoutBtn.addEventListener('click', (e) => {
        swal({
            title: "Are you sure?",
            text: "Are you sure you want to exit the music player application?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("You have successfully exited the application!", {
                        icon: "success",
                    });
                }
            });
    });
};

export { logoutAction };