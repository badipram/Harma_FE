/* eslint-disable no-empty-function */
import { createAboutUsTemplate } from '../templates/template-about-us-helper';

const AboutUs = {
  async render() {
    const aboutUsHTML = createAboutUsTemplate();
    return `
      <div class="content">${aboutUsHTML}</div>
        `;
  },
  async afterRender() {},
};

export default AboutUs;
