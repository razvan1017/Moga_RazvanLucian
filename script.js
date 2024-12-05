document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const items = document.querySelectorAll(".carousel-item");
    const totalItems = items.length;
    let currentIndex = 0;

    for (let i = 0; i < totalItems; i++) {
        const clone = items[i].cloneNode(true);
        carousel.appendChild(clone);
    }

    function rotateCarousel() {
        currentIndex = (currentIndex + 1) % totalItems;

        const offset = -(currentIndex * 20);
        carousel.style.transition = 'transform 1s ease';
        carousel.style.transform = `translateX(${offset}%)`;

        if (currentIndex === totalItems) {
            setTimeout(() => {
                carousel.style.transition = 'none';
                carousel.style.transform = 'translateX(0%)';
                currentIndex = 0;
            }, 1000);
        }
    }

    setInterval(rotateCarousel, 3000);
});
