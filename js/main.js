
  AOS.init();
//================================================================================================================================================
//-----------------TEXT---------------\
const menu = document.querySelector('.header__menu');
const burger = document.querySelector('.burger');

burger.addEventListener('click', function() {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
    document.body.classList.toggle('lock');
})
//================================================================================================================================================
//-----------------TEXT---------------\
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
  if (window.scrollY >= 100){
    header.classList.add('active');
  } 
  if (window.scrollY < 100){
    header.classList.remove('active');
  } 
})
//================================================================================================================================================
//-----------------TEXT---------------\

const headerLink = document.querySelectorAll('.header__link');

headerLink.forEach(el => {
    
    el.addEventListener('click', function(event) {

        event.preventDefault();
    })
  });
  //================================================================================================================================================
  //-----------------TEXT---------------\
  

const clickable = document.querySelectorAll('.clickable');
const subList = document.querySelectorAll('.link-sub__list');

clickable.forEach((link, index) => {
  link.addEventListener('click', function() {
    if (subList[index].classList.contains('active')) {
      subList[index].classList.remove('active');
      link.classList.remove('active');
    } else {
      subList.forEach(list => {
        list.classList.remove('active');
        link.classList.remove('active');
      });

      subList[index].classList.add('active');
      link.classList.add('active');
    }
  });
});
//================================================================================================================================================
//-----------------TEXT---------------\
const spoilerItems = document.querySelectorAll('.choose__item');


spoilerItems.forEach(el => {
  el.addEventListener('click', function() {
    el.classList.toggle('active')
  })
})

//================================================================================================================================================
//-----------------TEXT---------------\
const testimonialClients = document.querySelectorAll('.testimonial__client');
const testimonialDescriptions = document.querySelectorAll('.testimonial__client-description');

testimonialClients.forEach(el => {
  el.addEventListener('click', function(evt) {
    const target = evt.target;
    const isDescriptionClicked = Array.from(testimonialDescriptions).some(description => description.contains(target));

    if (!isDescriptionClicked) {
      const isActive = el.classList.contains('active');
      testimonialClients.forEach(client => {
        client.classList.remove('active');
      });

      if (!isActive) {
        el.classList.add('active');
      }
    }
  });
});
//================================================================================================================================================
//-----------------TEXT---------------\
const swiper = new Swiper('.swiper', {

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true, 
  },

  speed: 800,

});
  