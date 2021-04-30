//Слайдеры
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
  loop: true,
  spaceBetween: 40,

  pagination: {
    el: '.card-swiper-pagination',
  }
});

const swiper3 = new Swiper('.feedback-swiper-container', {
  loop: true,
  spaceBetween: 40,

  pagination: {
    el: '.feedback-swiper-pagination',
  }
});

// ресайз окна
const resizeWindow = () => {

  const changeText = (section, str) => {
    let text;
    if (section === 'join') {
      text = document.querySelector('.join__text');
    }
    else {
      text = document.querySelector('.signup__text');
    }

    text.innerHTML = str;
  };

  if (window.innerWidth <= 480) {
    const str = 'Удобно получать на емейл уникальные проверенные рецепты, которые дружная&nbsp;команда Tastycookery попробовала сама и рекомендует';
    changeText('join', str);
    const str2 = 'Sign up to receive daily manually selected recipes, delicious weekly articles, 3-piece sets of slow cooker, vegetarian, and lunch ideas, plus Quick&Easy recipes and Nutrition Value flashcards via email.';
    changeText('signup', str2);
  }
  else {
    const str = 'Удобно получать на емейл уникальные проверенные рецепты, которые&nbsp;дружная&nbsp;команда Tastycookery попробовала сама и рекомендует';
    changeText('join', str);
    const str2 = 'Sign up to receive daily manually selected recipes, delicious weekly articles, 3&#8209;piece&nbsp;sets&nbsp;of slow cooker, vegetarian, and&nbsp;lunch ideas, plus Quick&Easy recipes and&nbsp;Nutrition Value flashcards via email.';
    changeText('signup', str2);
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 480) {
      const str = 'Удобно получать на емейл уникальные проверенные рецепты, которые дружная&nbsp;команда Tastycookery попробовала сама и рекомендует';
      changeText('join', str);
    }
    else {
      const str = 'Удобно получать на емейл уникальные проверенные рецепты, которые&nbsp;дружная&nbsp;команда Tastycookery попробовала сама и рекомендует';
      changeText('join', str);
      const str2 = 'Sign up to receive daily manually selected recipes, delicious weekly articles, 3&#8209;piece&nbsp;sets&nbsp;of slow cooker, vegetarian, and&nbsp;lunch ideas, plus Quick&Easy recipes and&nbsp;Nutrition Value flashcards via email.';
      changeText('signup', str2);
    }
  });
}

resizeWindow();

// плавный скролл
const scrollingDown = () => {
  const scrollLinks = document.querySelectorAll('a[href*="#"]');
  scrollLinks.forEach((scrollLink) => {
    scrollLink.addEventListener('click', (elem) => {
      elem.preventDefault();
      const blockID = scrollLink.getAttribute('href').substr(1);
      if (document.getElementById(blockID) !== null) {
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

scrollingDown();

// валидация формы

const validation = () => {

  const input = document.querySelector('input');

  input.addEventListener('input', () => {
    input.value = input.value.replace(/[^a-zA-Z\.\@\_\-\s\d]/gi,'');
  });

};

validation();