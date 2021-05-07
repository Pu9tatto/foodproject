function slider({container, slide, nextArrow, prevArrow, wrapper, field}) {
    const slideImg = document.querySelectorAll(slide),
        slider = document.querySelector(container),
        sliderNext = document.querySelector(nextArrow),
        sliderPrev = document.querySelector(prevArrow),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        width = window.getComputedStyle(slidesWrapper).width,
        indicators = document.createElement('ol'),
        dots = [];
    let indexSlider = 0,
        offset = 0;

        document.querySelector('#current').innerHTML = `01`;

    if (slideImg.length < 10) {
        document.querySelector('#total').innerHTML = `0${slideImg.length}`;
    } else {
        document.querySelector('#total').innerHTML = `${slideImg.length}`;
    }

    slidesField.style.width = 100 * slideImg.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';
    slidesWrapper.style.overflow = 'hidden';

    slideImg.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
    `;
    slider.append(indicators);

    for (let i = 0; i < slideImg.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
        box-sizing: content-box;
        flex: 0 1 auto;
        width: 30px;
        height: 6px;
        margin-right: 3px;
        margin-left: 3px;
        cursor: pointer;
        background-color: #fff;
        background-clip: padding-box;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        opacity: .5;
        transition: opacity .6s ease;
        `;
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }

    sliderNext.addEventListener('click', () => {
        if (offset == forNumber(width) * (slideImg.length - 1)) {
            offset = 0;
        } else {
            offset += forNumber(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (indexSlider == slideImg.length - 1) {
            indexSlider = 0;
        } else {
            indexSlider++;
        }

        velueCurrentSlider();

        dots.forEach(dot => dot.style.opacity = '.5');
        dots[indexSlider].style.opacity = 1;
    });

    sliderPrev.addEventListener('click', () => {
        if (offset == 0) {
            offset = forNumber(width) * (slideImg.length - 1);
        } else {
            offset -= forNumber(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (indexSlider == 0) {
            indexSlider = slideImg.length - 1;
        } else {
            indexSlider--;
        }

        velueCurrentSlider();
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[indexSlider].style.opacity = 1;
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            indexSlider = slideTo - 1;
            offset = forNumber(width) * (slideTo - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;

            velueCurrentSlider();
            dots.forEach(dot => dot.style.opacity = '.5');
            dots[indexSlider].style.opacity = 1;
        });
    });

    function velueCurrentSlider() {
        if (indexSlider < 10) {
            document.querySelector('#current').innerHTML = `0${indexSlider+1}`;
        } else {
            document.querySelector('#current').innerHTML = `${indexSlider+1}`;
        }
    }

    function forNumber(element) {
        return +element.replace(/\D/g, '');
    }
}

export default slider;