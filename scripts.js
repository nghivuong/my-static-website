const carouselImages = document.querySelector('.carousel-images');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

let currentIndex = 0;
const imagesToShow = 3; // Số hình ảnh hiển thị cùng lúc
const imageWidth = 160; // Chiều rộng của mỗi hình ảnh và margin
const totalImages = carouselImages.children.length;

rightArrow.addEventListener('click', () => {
    if (currentIndex < totalImages - imagesToShow) {
        currentIndex++;
        updateCarousel();
    }
});

leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

function updateCarousel() {
    const newTransform = -currentIndex * imageWidth;
    carouselImages.style.transform = `translateX(${newTransform}px)`;
}
