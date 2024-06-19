/* eslint-disable no-unused-vars */
import Swal from 'sweetalert2';
import { deleteKegiatanById, getAllKegiatan } from '../../data/main';
import { checkTokenLogin, formatTanggal } from '../../utils/function-helper';
import createKegiatanTemplate from '../templates/template-kegiatan-helper';

const Kegiatan = {
  async render() {
    const kegiatanHTML = createKegiatanTemplate();
    return `
        <section class="kegiatan">${kegiatanHTML}</section>
    `;
  },

  async afterRender() {
    const titleKegiatan = document.querySelector('.title');
    titleKegiatan.innerHTML += `
        <div class="btn-kegiatan">
            <a href="/#/kegiatan/tambah">Tambah Kegiatan</a>
        </div>
    `;

    const wrapper = document.querySelector('.list-all-kegiatan');
    wrapper.innerHTML = `
      <div class="loading">
        <i class="fa-solid fa-spinner fa-spin"></i>
      </div>
    `;

    try {
      const allKegiatan = await getAllKegiatan();
      if (allKegiatan.length === 0) {
        wrapper.innerHTML = 'Tidak ada kegiatan saat ini.';
      } else {
        wrapper.innerHTML = '';
        allKegiatan.forEach((kegiatan, index) => {
          const tanggal = new Date(kegiatan.tanggal_kegiatan);
          const tanggalDalamFormat = formatTanggal(tanggal);

          wrapper.innerHTML += `
            <div class="wrapper-kegiatan">
              <div class="content-kegiatan">
                  <div class="title-kegiatan">
                      <div class="waktu">
                          <span class="tanggal">${tanggalDalamFormat}</span>
                      </div>
                      <div class="title">
                          <h2>${kegiatan.nama_kegiatan}</h2>
                      </div>
                  </div>
                  <div class="detail-kegiatan">
                      <div class="detail">
                          <h2>Detail</h2>
                          <div class="body">
                              <p>${kegiatan.detail}</p>
                          </div>
                      </div>
                      <div class="waktu">
                          <h2>Waktu</h2>
                          <div class="body">
                              <span>• ${tanggalDalamFormat} <br>• Jam ${kegiatan.waktu_kegiatan}</span>
                          </div>
                      </div>
                      <div class="tempat">
                          <h2>Tempat</h2>
                          <div class="body">
                              <span>${kegiatan.lokasi}</span>
                          </div>
                      </div>
                  </div>
                   <a class="button-delete" id="${kegiatan.id_kegiatan}"><i class="fa-solid fa-trash-can"></i></a>
              </div>
            </div>
          `;
        });

        const buttonsDelete = document.querySelectorAll('.button-delete');
        buttonsDelete.forEach((buttonDelete) => {
          buttonDelete.addEventListener('click', async () => {
            const { error } = await checkTokenLogin();
            if (!error) {
              await deleteKegiatanById(buttonDelete.id);
              location.reload();
            } else {
              Swal.fire({
                title: 'Route Dibatasi',
                text: 'Anda tidak memiliki akses ke route tersebut',
                icon: 'warning',
                timer: 3000,
                timerProgressBar: true,
                confirmButtonText: 'OK',
              });
            }
          });
        });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      wrapper.innerHTML = 'Terjadi kesalahan saat memuat data. Silakan coba lagi.';
    }
  },
};

export default Kegiatan;
