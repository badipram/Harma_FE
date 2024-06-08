import { createLoginTemplate } from '../templates/template-login-helper';
import { tryLogin } from '../../data/main';

const Login = {
  async render() {
    const loginHTML = createLoginTemplate();
    return `
        <section class="login-container">${loginHTML}</section>
        `;
  },
  async afterRender() {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = document.querySelector('#email').value;
      const password = document.querySelector('#password').value;
      const login = { email, password };
      tryLogin(login);
    });
  },
};

export default Login;
