import { getAllPenduduk, getKepalaKeluarga } from '../../data/main';
import { createFasilitasTemplate } from '../templates/template-fasilitas-helper';
import { createGaleriTemplate } from '../templates/template-galeri-helper';
import { createHeroTemplate } from '../templates/template-hero-helper';
import { createMotoTemplate } from '../templates/template-moto-helper';
import { createPendudukTemplate } from '../templates/template-populasi-penduduk-helper';

const Beranda = {
  async render() {
    const heroHTML = createHeroTemplate();
    const motoHTML = createMotoTemplate();
    const fasilitasHTML = createFasilitasTemplate();
    const galeriHTML = createGaleriTemplate();
    const pendudukHTML = createPendudukTemplate();
    return `
      <section class="hero">${heroHTML}</section>
      <section class="moto">${motoHTML}</section>
      <section class="fasilitas">${fasilitasHTML}</section>
      <section class="galeri">${galeriHTML}</section>
      <section class="penduduk">${pendudukHTML}</section>
        `;
  },
  // eslint-disable-next-line no-empty-function
  async afterRender() {
    const totalPenduduk = document.getElementById('TotalPenduduk');
    const totalKepalaKeluarga = document.getElementById('KepalaKeluarga');
    const totalPerempuan = document.getElementById('Perempuan');
    const totalLaki = document.getElementById('Laki-Laki');

    const allPenduduk = await getAllPenduduk();
    const allKepalaKeluarga = await getKepalaKeluarga();

    const perempuan = allPenduduk.filter((penduduk) => penduduk.jenis_kelamin === 'P');
    const lakiLaki = allPenduduk.filter((penduduk) => penduduk.jenis_kelamin === 'L');

    totalPenduduk.setAttribute('data-count', allPenduduk.length);
    totalKepalaKeluarga.setAttribute('data-count', allKepalaKeluarga.length);
    totalPerempuan.setAttribute('data-count', perempuan.length);
    totalLaki.setAttribute('data-count', lakiLaki.length);
  },
};

export default Beranda;
