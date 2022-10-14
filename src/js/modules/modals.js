const modals = () => {
    const bindModal = ({triggerSelector, modalSelector, closeSelector, closeClickOverlay = true}) =>{
        const triggers = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const windows = document.querySelectorAll('[data-modal]');
        
        const closeModalWindow = (modal) => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        };

        triggers.forEach(el => {
            el.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach(el => {
                    closeModalWindow(el);
                });

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(el => {
                closeModalWindow(el);
            });

            closeModalWindow(modal);
            document.body.style.overflow = '';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay === true) {
                windows.forEach(el => {
                    closeModalWindow(el);
                });

                closeModalWindow(modal);
                document.body.style.overflow = '';
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.code === "Escape" && modal.style.display == 'block') {
                closeModalWindow(modal);
            }
        });
    }  

    const showModalByTime = ((selector, time) => {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    });

    bindModal({
        triggerSelector: '.popup_engineer_btn', 
        modalSelector: '.popup_engineer', 
        closeSelector: '.popup_engineer .popup_close',
        closeClickOverlay: true
    });   
    bindModal({
        triggerSelector: '.phone_link', 
        modalSelector: '.popup', 
        closeSelector: '.popup .popup_close',
        closeClickOverlay: true
    });
    bindModal({
        triggerSelector: '.popup_calc_btn', 
        modalSelector: '.popup_calc', 
        closeSelector: '.popup_calc_close',
        closeClickOverlay: true
    });
    bindModal({
        triggerSelector: '.popup_calc_button',
        modalSelector: '.popup_calc_profile', 
        closeSelector: '.popup_calc_profile_close', 
        closeClickOverlay: false
    });
    bindModal({ 
        triggerSelector: '.popup_calc_profile_button', 
        modalSelector: '.popup_calc_end', 
        closeSelector: '.popup_calc_end_close', 
        closeClickOverlay: false
    });
    // showModalByTime('.popup', 60000);
};                            

export  {modals};