const swiperFirst = new Swiper('.swiper', {
    //  Navigation arrows
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
      // If we need pagination
      speed: 800,
        pagination: {
        el: '.swiper-pagination',
        // type: 'bullets', // type: 'fraction', type: 'progressbar', bullets
        clickable: true, // переход по клику на булет
        // dynamicBullets: true, // динамические булеты
        // type: 'fraction',
        // renderFraction: function (currentClass, totalClass) {
        //   return 'Фото <span class="' + currentClass + '"></span>' + // Кастомное добавления слово фото перед фракцией
        //   ' из ' +
        //   '<span class="' + totalClass + '"></span>';
        // },
        // type: 'progressbar'
      },
      // кастомная фракция
      on: {
        init: function(swiper) {
          const allSlides = document.querySelector('.frac-all');
          const allSlidesItems = document.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate, .knifes-catalog__slide)');
          allSlides.innerHTML = allSlidesItems.length;
        },

        slideChange: function(swiper) {
          const currentSlide = document.querySelector('.frac-current');
          currentSlide.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1;
        }

      },


  //  And if we need scrollbar
    //   scrollbar: {
    //   el: '.swiper-scrollbar',
    //   draggable: true,
    // },
  
    // simulateTouch: true, //включает или отключает перетаскивание на Пк
    // touchRatio: 1, // чувствительность свайпа
    // touchAngle: 45, // угол срабатывания слайда
    // grabCursor: true, // Курсор перетаскивания
    // slideToClickedSlide: true, // переход по клику на слайд
  
    // hashNavigation: {
    //   watchState: true, // хэш навигация 
    // },
  
    // keyboard: { // влючает управление клавиатурой
    //   enabled: true,
    //   onlyInViewport: true, // в пределах вьюпорта
    //   pageUpDown: true, // навигация по этим клаишам
    // },
  
    // mousewheel: { // возможность управлять скролом
    //   // invert: true, // инверсия
    //   sensitivity: 1, // сенса
    //   // eventsTarget: ".swiper" // на чем срабатывать юудет
    // },
    // autoHeight: false, // автовысота 
  
    // slidesPerView: 2.3, // количесвто слайдов 
  
    watchOverflow: true, // если будет не достаточно слайдов он перестанет работать 
  
    spaceBetween: 30, // отступы между слайдами
  
    // slidesPerGroup: 1, // колчиство пролистываемых слайдов
  
    // centeredSlides: false, // активный слайд по центру
  
    // initialSlide: 0, // стартовый слайд
  
    // slidesPerColumn: 2, // мультирядность 
  
    loop: true, // бесконечная прокрутка 
  
    // loopedSlides: 0,  // кол-во дублирующи слайдов
  
    // freeMode: true, // свободная прокрутка
  
    autoplay: {
      delay: 3000, // пауза между прокруткой
      stopOnLastSlide: true, // закончить на последнем слайде
      disableOnInteraction: true, //отключить после ручного переключания
    },
  
    // speed: 1000,
  
    // direction: 'horizontal', // вид слайдера 'vertical'
  
    // effect: 'fade', // смена прозрачности(как презентация)
    // fadeEffect: {
    //   crossFade: true // паралельная смена прозрачности
    // },
    // effect: 'coverflow', // эффект потока
    // coverflowEffect: {
    //   rotate: 30,
    //   slideShadows: false,
    // },
    // effect: 'flip', // переворот
    // flipEffect: {
    //   slideShadows: false, // тень
    //   limitRation: true, // показ только активного слайда
    // },
    // effect: 'cube', // эфект перехода куб
    // cubeEffect: { // наустройки тени
    //   slideShadows: false,
    // },
    // effect: 'cards',
    // cardsEffect: {
    //   // ...
    // },
  
  
    // // Responsive breakpoints
    // breakpoints: {
    //   // when window width is >= 320px
    //   320: {
    //     slidesPerView: 2,
    //     spaceBetween: 20
    //   },
    //   // when window width is >= 480px
    //   480: {
    //     slidesPerView: 3,
    //     spaceBetween: 30
    //   },
    //   // when window width is >= 640px
    //   640: {
    //     slidesPerView: 4,
    //     spaceBetween: 40
    //   }
    // },
  
    // // Disable preloading of all images
    // preloadImages: false,
    // // Enable lazy loading
    // lazy: true,
    // lazy: {
    //   loadPrevNext: true,
    // },
  
    // zoom: {
    //   maxRatio: 5, // максимальное значение
    //   minRation: 1, // минимальное значение
    // },
  
  // ммниатюры / превью
    // thumbs: {
     // el: '' // слайдер новый
    //  slidesPerView: 5,
    // },
  
   // observer: true, // обновляет при изменении
  
   // observeParents: true, // обновит при изменении род элементов
  
   // observeSlideChildren: true, // обовит при изменении дочерних эдементов
  
   // parallax: true, // добавляет паралкас(добавить дата атрибуты)
  
   // доступность
  // a11y: { 
    //   prevSlideMessage: 'Previous slide',
    //   nextSlideMessage: 'Next slide',
    // },
    
    // virtual: {
    //   slides: ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5'],
    // },
  
    
    });

    //================================================================================================================================================
  //-----------------Каталог ножей-2---------------\\
  // const swiperThird = new Swiper('.knifes-catalog__slider-02', {
    
  //   pagination: {
  //     el: '.swiper-pagination__dotts-02',
  //     clickable: true, // переход по клику на булет
  //   },

  //   autoplay: {
  //     delay: 3000, // пауза между прокруткой
  //     stopOnLastSlide: true, // закончить на последнем слайде
  //     disableOnInteraction: true, //отключить после ручного переключания
  //   },

  //   observer: true, 

  //   observeParents: true,

  //   slidesPerView: 1,

  //   slidesPerGroup: 1,

  //   spaceBetween: 30,

  //   loop: true,
  
  // });
    // свзяывание двух слайдеров(сначала поместить их в переменные)
  // слайдер№1.controller.control = сладйер№2; 
  // слайдер№2.controller.control = сладйер№1; 