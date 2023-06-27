//================================================================================================================================================
//-----------------SCROLL---------------\
const smoothScroll = (target, duration) => {
  const targetSection = document.querySelector(target);
  const targetPosition = targetSection.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;
  
  const animateScroll = currentTime => {
    if (startTime === null) {
      startTime = currentTime;
    }
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  };
  
  const ease = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };
  
  requestAnimationFrame(animateScroll);
};

const navLinks = document.querySelectorAll('.header__link');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetSection = e.target.getAttribute('href');
    const duration = 1000;
    smoothScroll(targetSection, duration);
  });
});
  
//================================================================================================================================================
//-----------------ACARDEON---------------\
const items = document.querySelectorAll('.projects__acardeon-item'); // сам акордеон и его содержимое(конкретно карточка)

items.forEach(item => {
    const name = item.querySelector('.projects__acardeon-name'); // названия всех айтемов

    name.addEventListener("click", function(){
        items.forEach( el => {
            if(el !== item) {
                el.classList.remove("avtive")
            }
        });

        item.classList.toggle('active');
    });
});
//================================================================================================================================================
//-----------------TAb---------------\

// Получаем все ссылки табов
const tabLinks = document.querySelectorAll('.projects__tab-link');

// Получаем все контенты табов
const tabContents = document.querySelectorAll('.projects__content');

// Обходим все ссылки табов и вешаем на них обработчик события "клик"
tabLinks.forEach(function(tabLink, index) {
  tabLink.addEventListener('click', function(event) {
    // Отменяем стандартное поведение ссылки
    event.preventDefault();

    // Удаляем класс "active" у всех ссылок табов
    tabLinks.forEach(function(link) {
      link.classList.remove('active');
    });

    // Удаляем класс "active" у всех контентов табов
    tabContents.forEach(function(content) {
      content.classList.remove('active');
    });

    // Добавляем класс "active" текущей ссылке таба
    this.classList.add('active');

    // Добавляем класс "active" соответствующему контенту таба
    tabContents[index].classList.add('active');
  });
});
// //================================================================================================================================================
// //-----------------POPUP---------------\
const writeLink = document.querySelector('.write__link');
const writePopup = document.querySelector('.write__popup');
const writeClose = writePopup.querySelector('.close');

writeLink.addEventListener('click', function(evt) {
  evt.preventDefault();
  writePopup.classList.add('active');
  document.body.classList.toggle('_lock');
});

writeClose.addEventListener('click', function() {
  writePopup.classList.remove('active');
  document.body.classList.remove('_lock');
});

window.addEventListener('click', function(evt) {
  if (evt.target === writePopup) {
    writePopup.classList.remove('active');
    document.body.classList.remove('_lock');
  }
});
//================================================================================================================================================
//-----------------BURGER---------------\
const burger = document.querySelector('.burger');
const list = document.querySelector('.header__list');

burger.addEventListener('click', function() {
list.classList.toggle('_active');
burger.classList.toggle('_active');
document.body.classList.toggle('_lock');
});