import createKegiatanTemplate from '../templates/template-kegiatan-helper';

const Kegiatan = {
  async render() {
    const kegiatanHTML = createKegiatanTemplate();
    return `
        <section class="kegiatan">${kegiatanHTML}</section>
    `;
  },

  async afterRender() {
    const titleKegiatan = document.querySelector('.title');
    titleKegiatan.innerHTML += `
        <div class="btn-kegiatan">
            <a href="/#/kegiatan/tambah">Tambah Kegiatan</a>
        </div>
    `;
  },
};

export default Kegiatan;
