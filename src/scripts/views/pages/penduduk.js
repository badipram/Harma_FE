import createDaftarPendudukTemplate from '../templates/template-daftarPenduduk-helper';

const Penduduk = {
  async render() {
    return createDaftarPendudukTemplate();
  },

  async afterRender() {
    const url = window.location.hash.slice(1);
    const title = document.querySelector('.title h2');
    const button = document.querySelector('.btn-penduduk a');
    if (url === '/kepala-keluarga') {
      title.innerText = 'Daftar Kepala Keluarga';
      button.innerText = 'Tambah Kepala Keluarga';
    }

    if (url === '/penduduk') {
      title.innerText = 'Daftar Penduduk';
      button.innerText = 'Tambah Penduduk';
    }
    return '';
  },
};

export default Penduduk;
