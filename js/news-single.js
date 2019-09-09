document.addEventListener("DOMContentLoaded", function() {

    const mainImage = document.querySelector('.news-single-image');
    const more = document.querySelector('.news-single-more');
    const socialButtons = document.querySelector('.section-socials');

    const getOffsetTop = ( elem ) =>
    {
        let offsetTop = 0;
        do {
            if ( !isNaN( elem.offsetTop ) )
            {
                offsetTop += elem.offsetTop;
            }
        } while( elem = elem.offsetParent );

        return offsetTop;
    };


    if(!window.matchMedia('(max-width: 576px)'))
        socialButtons
            .style
            .left = (
                document.querySelector('body')
                    .clientWidth
                - document
                    .querySelector('.container')
                    .clientWidth
                + 32) / 2  + 'px';

    window.addEventListener('scroll', () => {
        if(
            window.scrollY >= getOffsetTop(mainImage)
            &&
            window.scrollY <= getOffsetTop(more) - 100 + (mainImage.clientHeight - socialButtons.offsetTop - socialButtons.offsetHeight) - mainImage.clientHeight)
            socialButtons.classList.add("active");
        else
            socialButtons.classList.remove("active");
    });


    new Glide('.news-single-glide', {
        type: 'carousel',
        startAt: 0,
        perView: 2,
        gap: 32,
        peek: {
            before: 0,
            after: 0
        },
        breakpoints: {
            768: {
                perView: 1
            },
            576: {
                perView: 1,
                gap: 16,
            }
        }
    }).mount();

});
