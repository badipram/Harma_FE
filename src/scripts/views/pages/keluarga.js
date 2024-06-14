import Swal from 'sweetalert2';
import createDaftarPendudukTemplate from '../templates/template-daftar-penduduk-helper';
import { deleteKeluargaById, getKeluargaById } from '../../data/main';
import UrlParser from '../../routes/url-parser';
import {
  createPendudukElement, makeKepalaKeluargainKeluarga, checkTokenLogin,
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
        <a href="#" id="tambah-keluarga">Tambah Keluarga</a>
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

    const buttonTambahKeluarga = document.getElementById('tambah-keluarga');
    buttonTambahKeluarga.addEventListener('click', async (event) => {
      event.preventDefault();
      const { error } = await checkTokenLogin();
      if (error) {
        Swal.fire({
          icon: 'warning',
          title: 'Login Dulu!',
          text: 'Anda harus login terlebih dahulu untuk menambahkan data.',
          confirmButtonText: 'OK',
        });
      } else {
        window.location.href = `/#/keluarga/${id}/tambah`;
      }
    });
  },
};

export default Keluarga;
