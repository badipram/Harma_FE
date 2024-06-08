/* eslint-disable no-param-reassign */
import { getKepalaKeluarga, deleteKepalaKeluargaById } from '../../data/main';
import { createKepalaKeluargaElement, buttonDeleteFunction } from '../../utils/function-helper';
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
    <a href="/#/kepala-keluarga/tambah">Tambah Kepala Keluarga</a>
      </div>
    `;

    const kepalaKeluargas = await getKepalaKeluarga();
    if (!kepalaKeluargas.length > 0) {
      templateWarga.innerHTML = '<h1 style="color:white;">Data masih kosong</h1>';
    }

    kepalaKeluargas.forEach((kepalaKeluarga, index) => {
      createKepalaKeluargaElement(kepalaKeluarga, templateWarga);

      const tagALinks = document.querySelectorAll('.wrapper-img a');
      tagALinks[index].href = `/#/keluarga/${kepalaKeluarga.id_kepala_keluarga}`;

      const buttonsDelete = document.querySelectorAll('.button-delete');
      buttonsDelete[index].id = `${kepalaKeluarga.id_kepala_keluarga}`;
    });

    const buttonEdit = document.querySelectorAll('.button-edit');
    buttonEdit.forEach((btnEdit) => {
      btnEdit.remove();
    });

    const buttonsDelete = document.querySelectorAll('.button-delete');
    buttonsDelete.forEach((buttonDelete) => {
      buttonDeleteFunction({
        buttonDelete, deleteData: deleteKepalaKeluargaById, templateWarga, getData: getKepalaKeluarga,
      });
    });
  },
};

export default KepalaKeluarga;
