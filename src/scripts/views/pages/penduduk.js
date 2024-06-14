/* eslint-disable no-use-before-define */
import Swal from 'sweetalert2';
import createDaftarPendudukTemplate from '../templates/template-daftar-penduduk-helper';
import { deletePendudukById, getAllPenduduk, tryAccessProtectedRoute } from '../../data/main';
import { createPendudukElement } from '../../utils/function-helper';

const Penduduk = {
  async render() {
    return createDaftarPendudukTemplate();
  },

  async afterRender() {
    const titlePenduduk = document.querySelector('.title h2');
    const title = document.querySelector('.title');
    titlePenduduk.innerText = 'Daftar Penduduk';
    title.innerHTML += `
      <div class="btn-penduduk">
        <a id="btn-tambah-penduduk" href="/#/penduduk/tambah">Tambah Penduduk</a>
      </div>
    `;

    const btnTambahPenduduk = document.querySelector('#btn-tambah-penduduk');
    btnTambahPenduduk.addEventListener('click', async (event) => {
      event.preventDefault();
      const { error } = await checkTokenLogin();
      if (!error) {
        window.location.href = '/#/penduduk/tambah';
      } else {
        Swal.fire({
          icon: 'warning',
          title: 'Login Dulu!',
          text: 'Anda harus login terlebih dahulu untuk menambahkan penduduk.',
          confirmButtonText: 'OK',
        });
      }
    });

    const templateWarga = document.querySelector('.wrapper-daftar-penduduk');
    const penduduks = await getAllPenduduk();
    if (!penduduks.length > 0) {
      templateWarga.innerHTML = '<h1 class="empty-message">Data masih kosong 😪</h1>';
    }

    penduduks.forEach((penduduk) => {
      createPendudukElement({
        penduduk,
        templateWarga,
        deleteData: deletePendudukById,
        getData: getAllPenduduk,
      });
    });
  },
};

const checkTokenLogin = async () => {
  const token = localStorage.getItem('token');
  const protectedRoute = await tryAccessProtectedRoute(token);
  return protectedRoute;
};

export default Penduduk;
