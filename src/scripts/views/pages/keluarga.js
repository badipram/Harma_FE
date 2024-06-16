import createDaftarPendudukTemplate from '../templates/template-daftar-penduduk-helper';
import { deleteKeluargaById, getKeluargaById } from '../../data/main';
import UrlParser from '../../routes/url-parser';
import {
  createPendudukElement, makeKepalaKeluargainKeluarga,
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
        <a href="/#/keluarga/${id}/tambah" id="tambah-keluarga">Tambah Keluarga</a>
      </div>
    `;

    // Data Keluarga untuk Kepala Keluarga
    const templateWarga = document.querySelector('.wrapper-daftar-penduduk');
    makeKepalaKeluargainKeluarga({
      keluargaById, templateWarga, deleteData: deleteKeluargaById, getData: getKeluargaById,
    });

    // Data Keluarga untuk Anggota Keluarga
    Keluargas.forEach(async (keluarga) => {
      const detailAnggotaKeluarga = keluarga.Penduduk;
      Object.assign(detailAnggotaKeluarga, {
        id_keluarga: keluarga.id_keluarga,
        hubungan: keluarga.hubungan,
      });
      createPendudukElement({
        penduduk: detailAnggotaKeluarga,
        templateWarga,
        deleteData: deleteKeluargaById,
        getData: getKeluargaById,
        id_kepala_keluarga: keluarga.id_kepala_keluarga,
      });
    });
  },
};

export default Keluarga;
