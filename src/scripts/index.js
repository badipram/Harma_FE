import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import AOS from 'aos';
import App from './views/app';
import 'aos/dist/aos.css';
import 'animate.css';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

document.addEventListener('DOMContentLoaded', () => {
  AOS.init();
});
