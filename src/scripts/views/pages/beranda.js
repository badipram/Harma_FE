import { createFasilitasTemplate } from '../templates/template-fasilitas-helper';
import { createGaleriTemplate } from '../templates/template-galeri-helper';
import { createHeroTemplate } from '../templates/template-hero-helper';
import { createKegiatanTemplate } from '../templates/template-kegiatan-helper';
import { createMotoTemplate } from '../templates/template-moto-helper';
import { createPendudukTemplate } from '../templates/template-penduduk-helper';

const Beranda = {
    async render() {
        const heroHTML = createHeroTemplate();
        const motoHTML = createMotoTemplate();
        const fasilitasHTML = createFasilitasTemplate();
        const galeriHTML = createGaleriTemplate();
        const kegiatanHTML = createKegiatanTemplate();
        const pendudukHTML = createPendudukTemplate();
      return `
      <section class="hero">${heroHTML}</section>
      <section class="moto">${motoHTML}</section>
      <section class="fasilitas">${fasilitasHTML}</section>
      <section class="galeri">${galeriHTML}</section>
      <section class="kegiatan">${kegiatanHTML}</section>
      <section class="penduduk">${pendudukHTML}</section>
        `;
    },
    // eslint-disable-next-line no-empty-function
    async afterRender() {},
  };
  
  export default Beranda;
