/* eslint-disable no-shadow */
/* eslint-disable camelcase */
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

      await editPendudukById(penduduk, id);

      const prevRoute = localStorage.getItem('route');
      if (prevRoute === '/penduduk') {
        window.location.href = `#${prevRoute}`;
      } else {
        window.location.href = `#${prevRoute}`;
      }
    });
  },
};

export default FormEditPenduduk;
