document.addEventListener('DOMContentLoaded', function () {
    const email = document.querySelector('.email')
    email.addEventListener('focus', function () {
        email.style.width = '26em';
    });

    email.addEventListener('blur', function () {
        email.style.width = '25em';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const password = document.querySelector('.password')
    password.addEventListener('focus', function () {
        password.style.width = '26em';
    });

    password.addEventListener('blur', function () {
        password.style.width = '25em';
    });
});
