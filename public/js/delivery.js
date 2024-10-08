let button = document.querySelector('.submit-button');
let preloader = document.querySelector('.spinner');
let fetchData = document.querySelector('.fetch-data');

button.addEventListener('click', function () {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    preloader.style.display = 'flex';

    async function asyncFetch() {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/?_start=1&_limit=${randomNumber}`);
            const user = await response.json();
            preloader.style.display = 'none';
            if (user) {
                for (let i = 0; i < user.length; i++) {
                    let template = document.getElementById('user-template');
                    let clone = template.content.cloneNode(true);
                    clone.children[0].textContent = 'Имя пользователя: ' + user[i].name +
                        ', Город: ' + user[i].address.city +
                        ', Адрес: ' + user[i].address.street +
                        ', ZIP: ' + user[i].address.zipcode;
                    fetchData.appendChild(clone);
                }
            } else {
                console.error('Пользователь не найден');
            }
        } catch (error) {
            let warning = document.createElement('p');
            warning.textContent = 'fetch не получился';
            warning.style.color = 'solid black';
            fetchData.appendChild(warning);
            preloader.style.display = 'none';
        }
        Toastify({
            text: `Показано ${randomNumber} заказов`, //  текст внутри уведомления
            close: true, // возможность закрытия уведомления
            style: { //цвет уведомления
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGNLdW8xsD33A--RJ0CnGNOTE_3t6aSwB_4GuJcUn1PA&s' //картинка перед текстом уведомления
        }).showToast();
    }



    setTimeout(async () => {
        await asyncFetch();
    }, 0)
});
