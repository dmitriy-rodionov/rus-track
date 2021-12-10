import {tns} from "tiny-slider";

const tiny = ()=> {
    const slider = tns({
        container: '.categories__slider',
        items: 4,
        autoWidth: false,
        edgePadding: 0,
        gutter: 27,
        responsive: {
            1201:{
                items: 4,
            },
            993: {
                items: 3,
                autoWidth: true,
            },
            769: {
                items: 2
            },
            577: {
                items: 2,
                edgePadding: 0,
                gutter: 15,
            },
            320: {
              items: 1,
              edgePadding: 30,
              gutter: 16,
              autoWidth: true
            },
          },
        mouseDrag: true,
        controls: true,
        controlsContainer: '.categories__btns',
        nav: false
      });

    const info = slider.getInfo();
    let current = document.querySelector('.categories__counter-first'),
        total = document.querySelector('.categories__counter-second');

    total.textContent = info.slideCount;
    slider.events.on ('transitionEnd', function (info) {
        current.textContent = slider.getInfo().displayIndex;
    });
}

export default tiny;