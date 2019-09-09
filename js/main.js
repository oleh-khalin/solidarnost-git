document.addEventListener("DOMContentLoaded", function() {

const body = document.querySelector('body');





    const popupMakePayment = document.querySelector('.popup-make-payment');
    const tabItems = popupMakePayment.querySelectorAll('.popup-make-payment-tab-item');
    tabItems.forEach(it => {
        it.addEventListener('click', () => {
            const isAnItem = it.classList.contains('popup-make-payment-tab-item-anonymous');
            const isAnForm = popupMakePayment.classList.contains('anonymous');
            if (isAnForm !== isAnItem) {
                popupMakePayment.classList.toggle('anonymous');
                if (!isAnForm) {
                    popupMakePayment.querySelectorAll('label input').forEach(el => {
                        el.removeAttribute('required');
                    });
                } else {
                    popupMakePayment.querySelectorAll('label input').forEach(el => {
                        el.setAttribute('required', '');
                    });
                }
            }
        });
    });









    const rangeSlider = document.getElementById('popup-make-payment-range-price');

    const moneyFormat = wNumb({
        decimals: 0,
        thousand: ' ',
        suffix: ' грн'
    });

    noUiSlider.create(rangeSlider, {
        start: 0,
        behaviour: 'snap',
        step: 10,
        range: {
            'min': [10],
            'max': [1000000]
        },
        format: moneyFormat,
        connect: 'lower'
    });


    const localStringToNumber = ( s ) => {
        return Number(String(s).replace(/[^0-9.-]+/g,""));
    };

    document.querySelector('.input-price').addEventListener('focus', (e) => {
        const value = e.target.value;
        e.target.value = value ? localStringToNumber(value) : '';
        setTimeout(() => {
            e.target.selectionStart = e.target.selectionEnd = 10000;
        }, 0);
    });
    document.querySelector('.input-price').addEventListener('focusout', (e) => {
        const value = e.target.value;
        console.log(value);
        e.target.value = value ? moneyFormat.to(localStringToNumber(value)) : '';
    });
    document.querySelector('.input-price').addEventListener('change', () => {
        rangeSlider.noUiSlider.set([document.querySelector('.input-price').value, null]);
    });

    rangeSlider.noUiSlider.on('update', function(values, handle) {
        document.querySelector('.input-price').value = (values[0]);
    });








    const openPopupNeedhelp = document.querySelectorAll('.open-popup-needhelp');
    const openPopupMakePayment = document.querySelectorAll('.open-popup-make-payment');


    const popup = document.querySelector('.popup');
    const popupClose = document.querySelectorAll('.popup-form-close');
    const popupOverlay = document.querySelector('.popup-overlay');

    openPopupNeedhelp.forEach( el => {
        el.addEventListener('click', (e) => {
            console.log('t');
            e.preventDefault();
            popup.classList.add('active', 'ask-for-help');
            body.classList.add('lock-screen');
        });
    });

    openPopupMakePayment.forEach( el => {
        el.addEventListener('click', (e) => {
            console.log('t');
            e.preventDefault();
            popup.classList.add('active', 'make-payment');
            body.classList.add('lock-screen');
        });
    });

    popupOverlay.addEventListener('click', () => {
        popup.classList.remove('active', 'ask-for-help', 'make-payment');
        if(!mainHeader.classList.contains('active'))
            body.classList.remove('lock-screen');
    });
    popupClose.forEach(el => {
        el.addEventListener('click', () => {
            popup.classList.remove('active', 'ask-for-help', 'make-payment');
            if(!mainHeader.classList.contains('active'))
                body.classList.remove('lock-screen');
        });
    });







    // top menu search line
    const svgSearch = document.querySelector('.svg-search');
    const svgClose = document.querySelector('.svg-close');
    const searchLine = document.querySelector('.search-line');
    svgSearch.addEventListener('click', () => {
        if(!searchLine.classList.contains('active'))
            searchLine.classList.toggle('active');
    });
    svgClose.addEventListener('click', () => {
        searchLine.classList.remove('active');
    });


    // Mobile menu
    const openMobileMenu = document.querySelector('.main-header-menu-mobile-open');
    const mainHeader = document.querySelector('.main-header');

    openMobileMenu.addEventListener('click', () => {
        mainHeader.classList.toggle('active');
        body.classList.toggle('lock-screen');
        if(body.classList.contains('lock-screen')) {
            console.log('preventDefault');
            document.ontouchmove = function (e) {
                e.preventDefault();
            }
        } else {
            console.log('true');
            document.ontouchmove = function (e) {
                return true;
            }
        }
    });

});
