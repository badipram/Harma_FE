/* eslint-disable no-param-reassign */
import { getKepalaKeluarga, deleteKepalaKeluargaById } from '../../data/main';
import { createKepalaKeluargaElement } from '../../utils/function-helper';
import createDaftarPendudukTemplate from '../templates/template-daftar-penduduk-helper';

const KepalaKeluarga = {
  async render() {
    return createDaftarPendudukTemplate();
  },

  async afterRender() {
    const templateWarga = document.querySelector('.wrapper-daftar-penduduk');
    const titlePenduduk = document.querySelector('.title h2');
    const title = document.querySelector('.title');
    titlePenduduk.innerText = 'Daftar Kepala Keluarga';
    title.innerHTML += `
      <div class="btn-penduduk">
        <a href="/#/kepala-keluarga/tambah" id="tambah-kepala-keluarga">Tambah Kepala Keluarga</a>
      </div>
    `;

    const kepalaKeluargas = await getKepalaKeluarga();
    if (!kepalaKeluargas.length > 0) {
      templateWarga.innerHTML = '<h1 class="empty-message">Data masih kosong 😪</h1>';
    }

    kepalaKeluargas.forEach((kepalaKeluarga) => {
      createKepalaKeluargaElement({
        kepalaKeluarga,
        templateWarga,
        deleteData: deleteKepalaKeluargaById,
        getData: getKepalaKeluarga,
      });
    });
  },
};

export default KepalaKeluarga;
