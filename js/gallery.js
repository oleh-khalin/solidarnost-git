document.addEventListener("DOMContentLoaded", function() {

    const galleryItems = document.querySelectorAll('.gallery-item');
    const body = document.querySelector('body');
    const galleryWindow = document.querySelector('.gallery-window');
    const galleryWindowContainer = document.querySelector('.gallery-window .container');

    galleryItems.forEach(galleryItem => {
        galleryItem.addEventListener('click', () => {
            galleryWindowContainer.querySelector('img').remove();
            galleryWindowContainer.appendChild(galleryItem.querySelector('img').cloneNode(true));
            galleryWindow.classList.toggle('active');
            body.classList.toggle('lock-screen');
            document.ontouchmove = function (e) {
                e.preventDefault();
            }
        });
    });

    galleryWindow.addEventListener('click', () => {
        galleryWindow.classList.toggle('active');
        body.classList.toggle('lock-screen');
        document.ontouchmove = function (e) {
            return true;
        }
    });

});
