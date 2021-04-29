const swiper = new Swiper('.advantage-swiper-container', {
  // Optional parameters
  loop: true,
  spaceBetween: 40,

  // If we need pagination
  pagination: {
    el: '.advantage-swiper-pagination',
  }
});



const swiper2 = new Swiper('.card-swiper-container', {
  // Optional parameters
  loop: true,
  spaceBetween: 40,

  // If we need pagination
  pagination: {
    el: '.card-swiper-pagination',
  }
});


const swiper3 = new Swiper('.feedback-swiper-container', {
  // Optional parameters
  loop: true,
  spaceBetween: 40,

  // If we need pagination
  pagination: {
    el: '.feedback-swiper-pagination',
  }
});

const resizeWindow = () => {

  const changeText = (str) => {
    const text = document.querySelector('.join__text');
    text.innerHTML = str;
  };

  if (window.innerWidth <= 480) {
    const str = 'Удобно получать на емейл уникальные проверенные рецепты, которые дружная&nbsp;команда Tastycookery попробовала сама и рекомендует';
    changeText(str);
  }
  else {
    const str = 'Удобно получать на емейл уникальные проверенные рецепты, которые&nbsp;дружная&nbsp;команда Tastycookery попробовала сама и рекомендует';
    changeText(str);
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 480) {
      const str = 'Удобно получать на емейл уникальные проверенные рецепты, которые дружная&nbsp;команда Tastycookery попробовала сама и рекомендует';
      changeText(str);
    }
    else {
      const str = 'Удобно получать на емейл уникальные проверенные рецепты, которые&nbsp;дружная&nbsp;команда Tastycookery попробовала сама и рекомендует';
      changeText(str);
    }
  });
}

resizeWindow();