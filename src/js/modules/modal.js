function modal() {
    function showModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener('click', () => {
                modal.classList.add('overlay_active');
                document.body.style.overflow = 'hidden';
            });
        });

        modal.addEventListener('click', (e) => {
            if(e.target === modal) {
                modal.classList.remove('overlay_active');
                document.body.style.overflow = '';
            }
        });

        close.addEventListener('click', () => {
            modal.classList.remove('overlay_active');
            document.body.style.overflow = '';
        });
    }
    showModal('.header__call','.overlay','.modal__close');
    showModal('.button_transparent','.overlay','.modal__close');
}
export default modal;