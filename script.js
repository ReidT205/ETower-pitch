document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // Initialize first slide
    updateSlides();

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'prev');
            
            if (index === currentSlide) {
                slide.classList.add('active');
            } else if (index < currentSlide) {
                slide.classList.add('prev');
            }
            // Future slides just stay at 100% left
        });
    }

    window.nextSlide = function() {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            updateSlides();
        }
    };

    window.prevSlide = function() {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlides();
        }
    };

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'Space') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });
});
