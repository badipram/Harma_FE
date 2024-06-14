/* eslint-disable no-param-reassign */
import Swal from 'sweetalert2';
import { getKepalaKeluarga, deleteKepalaKeluargaById } from '../../data/main';
import { createKepalaKeluargaElement, checkTokenLogin } from '../../utils/function-helper';
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
        <a href="#" id="tambah-kepala-keluarga">Tambah Kepala Keluarga</a>
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

    // Tambahkan event listener untuk tombol "Tambah Kepala Keluarga"
    const buttonTambahKepalaKeluarga = document.getElementById('tambah-kepala-keluarga');
    buttonTambahKepalaKeluarga.addEventListener('click', async (event) => {
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
        window.location.href = '/#/kepala-keluarga/tambah';
      }
    });
  },
};

export default KepalaKeluarga;
