document.addEventListener("DOMContentLoaded", function() {



    const sponsorsCarousel = new Glide('.sponsors-glide', {
        type: 'carousel',
        startAt: 0,
        perView: 6,
        gap: 32,
        peek: {
            before: 0,
            after: 0
        },
        breakpoints: {
            1200: {
                perView: 5
            },
            992: {
                perView: 4
            },
            768: {
                perView: 3
            },
            576: {
                perView: 1,
                gap: 16,
                peek: {
                    before: 80,
                    after: 80
                }
            }
        }
    });
    sponsorsCarousel.on(['build.after'], () => {
        document
            .querySelectorAll('.sponsors-item').forEach((el) => {
                el.style.height = el.clientWidth + "px";
            });

    });
    sponsorsCarousel.mount();


    const newsCarousel = new Glide('.news-glide', {
        type: 'carousel',
        startAt: 0,
        perView: 1,
        gap: 32,
        peek: {
            before: 0,
            after: 210
        },
        breakpoints: {
            1200: {
                peek: {
                    before: 0,
                    after: 100
                }
            },
            992: {
                perView: 2,
                peek: {
                    before: 0,
                    after: 0
                }
            },
            576: {
                perView: 1,
                peek: {
                    before: 0,
                    after: 0
                }
            }
        }
    });

    document.querySelector('.news-section .glide__arrow--left').addEventListener('click', () => {
        newsCarousel.go('<');
    });

    document.querySelector('.news-section .glide__arrow--right').addEventListener('click', () => {
        newsCarousel.go('>');
    });

    newsCarousel.mount();

});
