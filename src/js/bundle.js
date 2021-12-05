/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function modal() {
    function showModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener('click', () => {
                modal.classList.add('overlay_active');
                document.body.style.overflow = 'hidden';
            });
        });

        modal.addEventListener('click', (e) => {
            if(e.target === modal) {
                modal.classList.remove('overlay_active');
                document.body.style.overflow = '';
            }
        });

        close.addEventListener('click', () => {
            modal.classList.remove('overlay_active');
            document.body.style.overflow = '';
        });
    }
    showModal('.header__call','.overlay','.modal__close');
    showModal('.button_transparent','.overlay','.modal__close');
}
/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");



(0,_modules_slider__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])();
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map