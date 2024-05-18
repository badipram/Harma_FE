import { createAboutUsTemplate } from '../templates/template-aboutUs-helper';

const AboutUs = {
    async render() {
        const aboutUsHTML = createAboutUsTemplate();
      return `
      <div class="content">${aboutUsHTML}</div>
        `;
    },
    // eslint-disable-next-line no-empty-function
    async afterRender() {},
  };
  
  export default AboutUs;