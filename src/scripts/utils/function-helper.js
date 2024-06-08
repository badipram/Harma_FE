/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */

import Swal from 'sweetalert2';

const templateHtmlPenduduk = (penduduk, tanggalLahir) => `
    <div class="list-penduduk">
      <div class="content-penduduk" data-aos="fade-up" data-aos-duration="1200">
          <div class="wrapper-img">
            <a> 
              <i class="fa fa-user"></i>
            </a>                 
          </div>
          <div class="description-penduduk">
              <span>Nama: ${penduduk.nama}</span>
              <span>Tgl Lahir: ${tanggalLahir}</span>
              <span>Alamat: ${penduduk.alamat}</span>
              <span>Jenis Kelamin: ${penduduk.jenis_kelamin}</span>
          </div>
          <div class="action">
              <a href="/#/penduduk/${penduduk.id_penduduk}/edit" class="button-edit"><i class="fa fa-pencil"></i></a>
              <a class="button-delete" id="${penduduk.id_penduduk}"><i class="fa fa-trash"></i></a>
          </div>
      </div>
    </div>
`;

const createPendudukElement = (penduduk, template) => {
  const date = new Date(penduduk.tanggal_lahir);
  const tanggalLahir = date.toLocaleDateString('en-GB').replace(/\//g, '-');
  template.innerHTML += templateHtmlPenduduk(penduduk, tanggalLahir);
};

const createKepalaKeluargaElement = (kepalaKeluarga, template) => {
  const date = new Date(kepalaKeluarga.Penduduk.tanggal_lahir);
  const tanggalLahir = date.toLocaleDateString('en-GB').replace(/\//g, '-');

  template.innerHTML += templateHtmlPenduduk(kepalaKeluarga.Penduduk, tanggalLahir);
};

const makeKepalaKeluargainKeluarga = (keluargaById, templateWarga) => {
  createKepalaKeluargaElement(keluargaById, templateWarga);
  const description = document.querySelector('.description-penduduk');
  description.innerHTML += `
    <span>Hubungan: Kepala Keluarga</span>
  `;
  const deleteButton = document.querySelector('.button-delete');
  deleteButton.remove();
};

const buttonDeleteFunction = ({
  buttonDelete, deleteData, templateWarga, getData, id_keluarga,
}) => {
  buttonDelete.addEventListener('click', async () => {
    const result = await Swal.fire({
      title: 'Apakah anda yakin ingin menghapus?',
      text: 'Anda tidak akan dapat mengembalikan ini!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, hapus saja!',
      cancelButtonText: 'Batal',
    });

    if (result.isConfirmed) {
      const { id } = buttonDelete;
      await deleteData(id);

      Swal.fire(
        'Terhapus!',
        'Data telah berhasil dihapus.',
        'success',
      );

      if (id_keluarga) {
        const newPenduduk = await getData(id_keluarga);
        const { Keluargas } = newPenduduk;
        templateWarga.innerHTML = '';
        makeKepalaKeluargainKeluarga(newPenduduk, templateWarga);
        Keluargas.forEach((keluarga) => {
          createPendudukElement(keluarga.Penduduk, templateWarga);
        });
      } else {
        const newPenduduk = await getData();
        console.log('berhasil');
        templateWarga.innerHTML = '';
        newPenduduk.forEach((penduduk) => {
          if (penduduk.Penduduk) {
            createPendudukElement(penduduk.Penduduk, templateWarga);
          } else {
            createPendudukElement(penduduk, templateWarga);
          }
        });
      }
    }
  });
};

export {
  createPendudukElement, createKepalaKeluargaElement, buttonDeleteFunction, templateHtmlPenduduk, makeKepalaKeluargainKeluarga,
};
