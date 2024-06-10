// /* eslint-disable no-shadow */
// /* eslint-disable camelcase */
// import { editPendudukById, getPendudukById } from '../../data/main';
// import UrlParser from '../../routes/url-parser';
// import createFormDaftarPenduduk from '../templates/template-form-daftar-penduduk';

// const FormEditPenduduk = {
//   async render() {
//     return createFormDaftarPenduduk();
//   },

//   async afterRender() {
//     const { id } = UrlParser.parseActiveUrlWithoutCombiner();
//     const pendudukById = await getPendudukById(id);

//     const form = document.querySelector('.form');
//     const nama = document.querySelector('#nama');
//     const alamat = document.querySelector('#alamat');
//     const tanggal_lahir = document.querySelector('#tanggal_lahir');
//     const jenis_kelamin = document.querySelector('#jenis_kelamin');

//     nama.value = pendudukById.nama;
//     alamat.value = pendudukById.alamat;

//     const [tanggalBaru] = pendudukById.tanggal_lahir.split('T');
//     tanggal_lahir.value = tanggalBaru;

//     if (pendudukById.jenis_kelamin === 'L') {
//       jenis_kelamin.value = 'L';
//     } else if (jenis_kelamin === 'P') {
//       jenis_kelamin.value = 'P';
//     }

//     form.addEventListener('submit', (event) => {
//       event.preventDefault();

//       const penduduk = {
//         nama: nama.value,
//         alamat: alamat.value,
//         tanggal_lahir: tanggal_lahir.value,
//         jenis_kelamin: jenis_kelamin.value,
//       };

//       editPendudukById(penduduk, id);
//     });
//   },
// };

// export default FormEditPenduduk;

/* eslint-disable no-shadow */
/* eslint-disable camelcase */
import Swal from 'sweetalert2';
import { editPendudukById, getPendudukById } from '../../data/main';
import UrlParser from '../../routes/url-parser';
import createFormDaftarPenduduk from '../templates/template-form-daftar-penduduk';

const FormEditPenduduk = {
  async render() {
    return createFormDaftarPenduduk();
  },

  async afterRender() {
    const { id } = UrlParser.parseActiveUrlWithoutCombiner();
    const pendudukById = await getPendudukById(id);

    const form = document.querySelector('.form');
    const nama = document.querySelector('#nama');
    const alamat = document.querySelector('#alamat');
    const tanggal_lahir = document.querySelector('#tanggal_lahir');
    const jenis_kelamin = document.querySelector('#jenis_kelamin');

    nama.value = pendudukById.nama;
    alamat.value = pendudukById.alamat;

    const [tanggalBaru] = pendudukById.tanggal_lahir.split('T');
    tanggal_lahir.value = tanggalBaru;

    if (pendudukById.jenis_kelamin === 'L') {
      jenis_kelamin.value = 'L';
    } else if (pendudukById.jenis_kelamin === 'P') {
      jenis_kelamin.value = 'P';
    }

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const penduduk = {
        nama: nama.value,
        alamat: alamat.value,
        tanggal_lahir: tanggal_lahir.value,
        jenis_kelamin: jenis_kelamin.value,
      };

      try {
        await editPendudukById(penduduk, id);
        Swal.fire({
          title: 'Berhasil!',
          text: 'Penduduk telah berhasil diubah.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      } catch (error) {
        console.error('Error saat mengedit penduduk:', error);
        Swal.fire({
          title: 'Gagal!',
          text: 'Terjadi masalah saat mengedit penduduk. Silakan coba lagi.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    });
  },
};

export default FormEditPenduduk;