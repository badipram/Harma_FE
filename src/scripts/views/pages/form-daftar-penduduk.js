/* eslint-disable camelcase */
import Swal from 'sweetalert2';
import { addPenduduk } from '../../data/main';
import createFormDaftarPenduduk from '../templates/template-form-daftar-penduduk';

const { customAlphabet } = require('nanoid');

const FormDaftarPenduduk = {
  async render() {
    return createFormDaftarPenduduk();
  },

  async afterRender() {
    const nanoid = customAlphabet('0123456789', 9);
    const form = document.querySelector('form');
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const id_penduduk = nanoid();
      const nama = document.querySelector('#nama').value;
      const alamat = document.querySelector('#alamat').value;
      const tanggal_lahir = document.querySelector('#tanggal_lahir').value;
      const jenis_kelamin = document.querySelector('#jenis_kelamin').value;
      const penduduk = {
        id_penduduk, nama, alamat, tanggal_lahir, jenis_kelamin,
      };

      try {
        await addPenduduk(penduduk);
        Swal.fire({
          title: 'Berhasil!',
          text: 'Penduduk telah berhasil ditambahkan.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      } catch (error) {
        console.error('Error saat menambahkan penduduk:', error);
        Swal.fire({
          title: 'Gagal!',
          text: 'Terjadi masalah saat menambahkan penduduk. Silakan coba lagi.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    });
  },
};

export default FormDaftarPenduduk;
