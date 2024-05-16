import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import App from '../views/app';

console.log('Hello Coders! :)');

const app = new App({
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelector('#navigationDrawer'),
    content: document.querySelector('#mainContent'),
});
