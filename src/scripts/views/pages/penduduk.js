import createDaftarPendudukTemplate from '../templates/template-daftar-penduduk-helper';

const Penduduk = {
  async render() {
    return createDaftarPendudukTemplate();
  },

  async afterRender() {
    const url = window.location.hash.slice(1);
    const titlePenduduk = document.querySelector('.title h2');
    const title = document.querySelector('.title')
    if (url === '/kepala-keluarga') {
      titlePenduduk.innerText = 'Daftar Kepala Keluarga';
      title.innerHTML += `
      <div class="btn-penduduk">
      <a href="/#/kepala-keluarga/tambah">Tambah Kepala Keluarga</a>
        </div>
      `;
    }

    if (url === '/penduduk') {
      titlePenduduk.innerText = 'Daftar Penduduk';
      title.innerHTML += `
      <div class="btn-penduduk">
      <a href="/#/penduduk/tambah">Tambah Penduduk</a>
        </div>
      `;
    }
    return '';
  },
};

export default Penduduk;
