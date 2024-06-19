import { createLoginTemplate } from '../templates/template-login-helper';
import { tryLogin } from '../../data/main';
import { updateLoginStatus } from '../../utils/logout-helper';

const Login = {
  async render() {
    const loginHTML = createLoginTemplate();
    return `
        <section class="login-container">${loginHTML}</section>
        `;
  },
  async afterRender() {
    const form = document.querySelector('form');
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const email = document.querySelector('#email').value;
      const password = document.querySelector('#password').value;

      const login = { email, password };
      const resultLogin = await tryLogin(login);
      updateLoginStatus();

      if (!resultLogin.error) {
        window.location.href = '#/beranda';
      }
    });
  },
};

export default Login;
