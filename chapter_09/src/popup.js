'use strict';

export default class PopUp {
    constructor() {
        this.popUp = document.querySelector('.pop_up');
        this.popUpText = document.querySelector('.pop_up_message');
        this.popUpRefresh = document.querySelector('.pop_up_refresh');
        this.popUpRefresh.addEventListener('click', () =>{
            this.onClick && this.onClick();
            this.hide();
        });
    }

    setClickListener(onClick) {
        this.onClick = onClick;
    }

    showWithText(text) {
        this.popUpText.innerHTML = text;
        this.popUp.classList.remove('pop_up_hide');
    }

    hide() {
        this.popUp.classList.add('pop_up_hide');
    }
}
