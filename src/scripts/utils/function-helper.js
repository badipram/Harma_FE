/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable import/no-cycle */
/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import Swal from 'sweetalert2';
import { tryAccessProtectedRoute } from '../data/main';

const templateHtmlPenduduk = (penduduk, tanggalLahir) => `
    <div class="list-penduduk">
      <div class="content-penduduk">
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
              <a href="/#/penduduk/${penduduk.id_penduduk}/edit" class="button-edit"><i class="fa-solid fa-pencil"></i></a>
              <a class="button-delete" id="${penduduk.id_penduduk}"><i class="fa-solid fa-trash-can"></i></a>
          </div>
      </div>
    </div>
`;

const createPendudukElement = ({
  penduduk, templateWarga, deleteData, getData, id_kepala_keluarga,
}) => {
  const date = new Date(penduduk.tanggal_lahir);
  const tanggalLahir = date.toLocaleDateString('en-GB').replace(/\//g, '-');
  templateWarga.innerHTML += templateHtmlPenduduk(penduduk, tanggalLahir);

  const buttonsDelete = document.querySelectorAll('.button-delete');
  buttonsDelete.forEach((buttonDelete) => {
    eventButtonDelete({
      buttonDelete, deleteData, templateWarga, getData, id_kepala_keluarga,
    });
  });

  if (id_kepala_keluarga) {
    const descriptions = document.querySelectorAll('.description-penduduk');
    descriptions.forEach((description, index) => {
      if (index > 0) {
        description.innerHTML += `
            <span>Hubungan: ${penduduk.hubungan}</span>
          `;
      }
    });

    buttonsDelete[buttonsDelete.length - 1].id = `${penduduk.id_keluarga}`;
  }
};

const createKepalaKeluargaElement = ({
  kepalaKeluarga, templateWarga, deleteData, getData,
}) => {
  const date = new Date(kepalaKeluarga.Penduduk.tanggal_lahir);
  const tanggalLahir = date.toLocaleDateString('en-GB').replace(/\//g, '-');
  templateWarga.innerHTML += templateHtmlPenduduk(kepalaKeluarga.Penduduk, tanggalLahir);

  const tagALinks = document.querySelectorAll('.wrapper-img a');
  tagALinks[tagALinks.length - 1].href = `/#/keluarga/${kepalaKeluarga.id_kepala_keluarga}`;

  const buttonsDelete = document.querySelectorAll('.button-delete');
  buttonsDelete[buttonsDelete.length - 1].id = kepalaKeluarga.id_kepala_keluarga;
  buttonsDelete.forEach((buttonDelete) => {
    eventButtonDelete({
      buttonDelete, deleteData, templateWarga, getData,
    });
  });

  if (!kepalaKeluarga.Keluargas) {
    const buttonEdit = document.querySelectorAll('.button-edit');
    buttonEdit.forEach((btnEdit) => {
      btnEdit.remove();
    });
  }
};

const makeKepalaKeluargainKeluarga = ({
  keluargaById, templateWarga, deleteData, getData,
}) => {
  createKepalaKeluargaElement({
    kepalaKeluarga: keluargaById, templateWarga, deleteData, getData,
  });
  const description = document.querySelector('.description-penduduk');
  description.innerHTML += `
    <span>Hubungan: Kepala Keluarga</span>
  `;
  const deleteButton = document.querySelector('.button-delete');
  deleteButton.remove();
};

const eventButtonDelete = ({
  buttonDelete, deleteData, templateWarga, getData, id_kepala_keluarga,
}) => {
  buttonDelete.addEventListener('click', async () => {
    const { error } = await checkTokenLogin();
    if (!error) {
      buttonDeleteFunction({
        buttonDelete, deleteData, templateWarga, getData, id_kepala_keluarga,
      });
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
};

const buttonDeleteFunction = async ({
  buttonDelete, deleteData, templateWarga, getData, id_kepala_keluarga,
}) => {
  const { id } = buttonDelete;
  await deleteData(id);

  if (id_kepala_keluarga) {
    const newPenduduk = await getData(id_kepala_keluarga);
    const { Keluargas } = newPenduduk;
    templateWarga.innerHTML = '';
    makeKepalaKeluargainKeluarga({
      keluargaById: newPenduduk, templateWarga, deleteData, getData,
    });
    Keluargas.forEach((keluarga) => {
      const detailAnggotaKeluarga = keluarga.Penduduk;
      Object.assign(detailAnggotaKeluarga, {
        id_keluarga: keluarga.id_keluarga,
        hubungan: keluarga.hubungan,
      });
      createPendudukElement({
        penduduk: detailAnggotaKeluarga, templateWarga, deleteData, getData, id_kepala_keluarga,
      });
    });
  } else {
    const newPenduduk = await getData();
    templateWarga.innerHTML = '';
    newPenduduk.forEach((penduduk) => {
      if (penduduk.id_kepala_keluarga) {
        createKepalaKeluargaElement({
          kepalaKeluarga: penduduk, templateWarga, deleteData, getData,
        });
      } else {
        createPendudukElement({
          penduduk, templateWarga, deleteData, getData,
        });
      }
    });
  }
};

const checkTokenLogin = async () => {
  const token = localStorage.getItem('token');
  const protectedRoute = await tryAccessProtectedRoute(token);
  return protectedRoute;
};

export {
  createPendudukElement, createKepalaKeluargaElement, buttonDeleteFunction, templateHtmlPenduduk, makeKepalaKeluargainKeluarga, checkTokenLogin,
};
