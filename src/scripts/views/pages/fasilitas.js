import { createFasilitasTemplate } from '../templates/template-fasilitas-helper';

const Fasilitas = {
    async render() {
        const fasilitasHTML = createFasilitasTemplate();
    return`
        <section class="fasilitas">${fasilitasHTML}</section>
    `;
    },
      // eslint-disable-next-line no-empty-function
      async afterRender() {},
};

export default Fasilitas;