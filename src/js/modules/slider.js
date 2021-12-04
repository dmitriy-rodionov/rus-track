const slider = () => {
    const left = document.querySelector('.slider__arrow-left'),
          right = document.querySelector('.slider__arrow-right'),
          slides = document.querySelectorAll('.slider__item'),
          dots = document.querySelectorAll('.slider__dot'),
          dotsWrapper = document.querySelector('.slider__dots-wrapper');
    let count = 0;

    slides.forEach((item, i) => {
        if(i === 0) {
            item.classList.add('slider__item_active');
        } else {
            item.classList.remove('slider__item_active');
        }
    });

    dots.forEach((item, i) => {
        if(i === 0) {
            item.classList.add('slider__dot_active');
        } else {
            item.classList.remove('slider__dot_active');
        }
    });

    function moveRight() {
        count++;
        if(count > slides.length - 1){
            count = 0;
        }
        showSlide(count);
        dotActive(count);
    }

    function moveLeft() {
        count--;
        if(count < 0) {
            count = slides.length - 1;
        }
        showSlide(count);
        dotActive(count);
    }

    dotsWrapper.addEventListener('click', (e) => {
        let target = e.target;
        dots.forEach((item, i) => {
            if(item == target) {
                item.classList.add('slider__dot_active');
                showSlide(i);
                count = i;
            } else {
                item.classList.remove('slider__dot_active');
            }
        });
    });

    function dotActive(count) {
        dots.forEach((item, i) => {
            if( i == count) {
                item.classList.add('slider__dot_active');
            } else {
                item.classList.remove('slider__dot_active');
            }
        });
    }
    function showSlide(count) {
        slides.forEach((item, i) => {
            if( i == count) {
                item.classList.add('slider__item_active');
            } else {
                item.classList.remove('slider__item_active');
            }
        });
    }

    right.addEventListener('click', moveRight);

    left.addEventListener('click', moveLeft);
}

export default slider;