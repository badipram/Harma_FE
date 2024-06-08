/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import createDaftarPendudukTemplate from '../templates/template-daftar-penduduk-helper';
import { deleteKeluargaById, getKeluargaById } from '../../data/main';
import UrlParser from '../../routes/url-parser';
import {
  buttonDeleteFunction, createPendudukElement, makeKepalaKeluargainKeluarga,
} from '../../utils/function-helper';

const Keluarga = {
  async render() {
    return createDaftarPendudukTemplate();
  },

  async afterRender() {
    const { id } = UrlParser.parseActiveUrlWithoutCombiner();

    // Mendapatkan data Keluarga berdasarkan Id Kepala Keluarga
    const keluargaById = await getKeluargaById(id);
    // Data anggota keluarga selain Kepala Keluarga
    const { Keluargas } = keluargaById;

    const wrapperTitle = document.querySelector('.title');
    const title = document.querySelector('.title h2');
    title.innerText = `Daftar Keluarga ${keluargaById.Penduduk.nama}`;
    wrapperTitle.innerHTML += `
    <div class="btn-penduduk">
      <a href="/#/keluarga/${id}/tambah">Tambah Keluarga</a>
    </div>
    `;

    // Data Keluarga untuk Kepala Keluarga
    const templateWarga = document.querySelector('.wrapper-daftar-penduduk');
    makeKepalaKeluargainKeluarga(keluargaById, templateWarga);

    // // Data Keluarga untuk Anggota Keluarga
    Keluargas.forEach((keluarga) => {
      createPendudukElement(keluarga.Penduduk, templateWarga);

      const descriptions = document.querySelectorAll('.description-penduduk');
      descriptions.forEach((description, index) => {
        if (index > 0) {
          description.innerHTML += `
            <span>Hubungan: ${keluarga.hubungan}</span>
          `;
        }
      });

      const buttonsDelete = document.querySelectorAll('.button-delete');
      buttonsDelete.forEach((buttonDelete) => {
        buttonDelete.id = `${keluarga.id_keluarga}`;
        buttonDeleteFunction({
          buttonDelete, deleteData: deleteKeluargaById, templateWarga, getData: getKeluargaById, id_keluarga: id,
        });
      });
    });
  },
};

export default Keluarga;
