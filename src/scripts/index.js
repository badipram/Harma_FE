/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import AOS from 'aos';
import { CountUp } from 'countup.js';
import App from './views/app';
import renderFasilitas from './utils/show-all-facility';
import 'aos/dist/aos.css';
import 'animate.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function initCountUpObserver() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const countUpOptions = { duration: 2 };
        const countUp = new CountUp(entry.target.id, parseInt(entry.target.dataset.count, 10), countUpOptions);
        if (!countUp.error) {
          countUp.start();
          observer.unobserve(entry.target);
        } else {
          console.error(countUp.error);
        }
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  const elementsToObserve = document.querySelectorAll('.countup');
  elementsToObserve.forEach((element) => observer.observe(element));
}

document.addEventListener('DOMContentLoaded', () => {
  AOS.init();

  const app = new App({
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelector('#navigationDrawer'),
    content: document.querySelector('#mainContent'),
  });

  const initializeSwiper = () => {
    // eslint-disable-next-line no-unused-vars
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      speed: 1000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  };

  window.addEventListener('hashchange', async () => {
    await app.renderPage();
    initCountUpObserver();
    initializeSwiper();
    renderFasilitas();
  });

  window.addEventListener('load', async () => {
    await app.renderPage();
    initCountUpObserver();
    initializeSwiper();
    renderFasilitas();
  });

  const dropdown = document.querySelector('.dropdown');
  const dropdownToggle = dropdown.querySelector('.dropdown-toggle');

  dropdownToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    dropdown.classList.toggle('dropdown-active');
  });

  document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove('dropdown-active');
    }
  });
});
