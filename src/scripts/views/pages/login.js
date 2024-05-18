import { createLoginTemplate } from "../templates/template-login-helper";

const Login = {
    async render() {
        const loginHTML = createLoginTemplate();
        return`
        <section class="login-container">${loginHTML}</section>
        `;
    },
    async afterRender() {},
};

export default Login;