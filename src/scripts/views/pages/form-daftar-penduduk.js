/* eslint-disable camelcase */
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
        console.log('Penduduk telah berhasil ditambahkan.');
      } catch (error) {
        console.error('Error saat menambahkan penduduk:', error);
      }
    });
  },
};

export default FormDaftarPenduduk;
