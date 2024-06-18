/* eslint-disable no-empty-function */
import { createFasilitasTemplate } from '../templates/template-fasilitas-helper';

const Fasilitas = {
  async render() {
    const fasilitasHTML = createFasilitasTemplate();
    return `
        <section class="fasilitas">${fasilitasHTML}</section>
    `;
  },

  async afterRender() {},
};

export default Fasilitas;
