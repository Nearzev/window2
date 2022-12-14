import checkNumInputs from './checkNumInputs';

const forms = (state) => {
    const   form = document.querySelectorAll('form'),
            inputs = document.querySelectorAll('input');

    checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').innerHTML = message.loading;
        const res = await fetch(url, {
            method: "POST",
            body: data,
        });

        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(el => {
            el.value = '';
        });
    };

    form.forEach(el => {
        el.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            el.appendChild(statusMessage);

            const formData = new FormData(el);
            if (el.getAttribute("data-calc") === "end") {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            postData('assets/server.php', formData)
                .then(res => {
                    statusMessage.textContent = message.success
                })
                .catch(() => {
                    statusMessage.textContent = message.failure
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });
        });
    });
};

export  {forms};