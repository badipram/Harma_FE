// import createDaftarPendudukTemplate from '../templates/template-daftar-penduduk-helper';
// import { deletePendudukById, getAllPenduduk } from '../../data/main';
// import { buttonDeleteFunction, createPendudukElement } from '../../utils/function-helper';

// const Penduduk = {
//   async render() {
//     return createDaftarPendudukTemplate();
//   },

//   async afterRender() {
//     const titlePenduduk = document.querySelector('.title h2');
//     const title = document.querySelector('.title');
//     titlePenduduk.innerText = 'Daftar Penduduk';
//     title.innerHTML += `
//     <div class="btn-penduduk">
//     <a href="/#/penduduk/tambah">Tambah Penduduk</a>
//       </div>
//     `;

//     const templateWarga = document.querySelector('.wrapper-daftar-penduduk');
//     const penduduks = await getAllPenduduk();
//     if (!penduduks.length > 0) {
//       templateWarga.innerHTML = '<h1 style="color:white;">Data masih kosong</h1>';
//     }

//     penduduks.forEach((penduduk) => {
//       createPendudukElement(penduduk, templateWarga);
//     });

//     const buttonsDelete = document.querySelectorAll('.button-delete');
//     buttonsDelete.forEach((buttonDelete) => {
//       buttonDeleteFunction({
//         buttonDelete, deleteData: deletePendudukById, templateWarga, getData: getAllPenduduk,
//       });
//     });
//   },
// };

// export default Penduduk;

import Swal from 'sweetalert2';
import createDaftarPendudukTemplate from '../templates/template-daftar-penduduk-helper';
import { deletePendudukById, getAllPenduduk } from '../../data/main';
import { buttonDeleteFunction, checkTokenLogin, createPendudukElement } from '../../utils/function-helper';

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
        <a href="/#/penduduk/tambah">Tambah Penduduk</a>
      </div>
    `;

    const templateWarga = document.querySelector('.wrapper-daftar-penduduk');
    const penduduks = await getAllPenduduk();
    if (!penduduks.length > 0) {
      templateWarga.innerHTML = '<h1 style="color:white;">Data masih kosong</h1>';
    }

    penduduks.forEach((penduduk) => {
      createPendudukElement(penduduk, templateWarga);
    });

    const buttonsDelete = document.querySelectorAll('.button-delete');
    const { error } = await checkTokenLogin();
    buttonsDelete.forEach((buttonDelete) => {
      if (!error) {
        buttonDeleteFunction({
          buttonDelete, deleteData: deletePendudukById, templateWarga, getData: getAllPenduduk,
        });
      } else {
        buttonDelete.addEventListener('click', () => {
          Swal.fire({
            icon: 'warning',
            title: 'Login Dulu!',
            text: 'Anda harus login terlebih dahulu untuk menghapus data.',
            confirmButtonText: 'OK',
          });
        });
      }
    });
  },
};

export default Penduduk;
