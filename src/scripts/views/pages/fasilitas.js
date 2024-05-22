import { createFasilitasTemplate } from '../templates/template-fasilitas-helper';

const Fasilitas = {
  async render() {
    const fasilitasHTML = createFasilitasTemplate();
    return `
        <section class="fasilitas">${fasilitasHTML}</section>
    `;
  },

  async afterRender() {
    // const btnFasilitas = document.querySelector('.btn-fasilitas a');
    // btnFasilitas.innerText = 'Tambah Fasilitas';
    // btnFasilitas.href = '#/fasilitas/tambah';
  },
};

export default Fasilitas;
