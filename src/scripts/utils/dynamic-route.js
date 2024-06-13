// import routes from '../routes/routes';
// import Keluarga from '../views/pages/keluarga';
// import UrlParser from '../routes/url-parser';
// import FormKeluarga from '../views/pages/form-keluarga';
// import FormEditPenduduk from '../views/pages/form-edit-penduduk';

// function dynamicRoute(url) {
//   const urlObj = UrlParser._urlSplitter(url);
//   if (urlObj.resource === 'keluarga' && urlObj.id) {
//     routes[url] = Keluarga;
//   }

//   if (urlObj.resource === 'keluarga' && urlObj.id && urlObj.verb) {
//     routes[url] = FormKeluarga;
//   }

//   if (urlObj.resource === 'penduduk' && urlObj.id && urlObj.verb === 'edit') {
//     routes[url] = FormEditPenduduk;
//   }
// }

// export default dynamicRoute;

// eslint-disable-next-line import/named
import routes from '../routes/routes';
import Keluarga from '../views/pages/keluarga';
import UrlParser from '../routes/url-parser';
import FormKeluarga from '../views/pages/form-keluarga';
import FormEditPenduduk from '../views/pages/form-edit-penduduk';
import { checkTokenLogin } from './function-helper';
import FormDaftarPenduduk from '../views/pages/form-daftar-penduduk';
import FormKepalaKeluarga from '../views/pages/form-kepkel';
import FormKegiatan from '../views/pages/form-kegiatan';
import Login from '../views/pages/login';

async function addRouteHaveId(url) {
  const urlObj = UrlParser._urlSplitter(url);
  const { error } = await checkTokenLogin();
  if (urlObj.resource === 'keluarga' && urlObj.id) {
    routes[url] = Keluarga;
  }

  if (urlObj.resource === 'keluarga' && urlObj.id && urlObj.verb) {
    if (error) {
      delete routes[url];
    } else {
      routes[url] = FormKeluarga;
    }
  }

  if (urlObj.resource === 'penduduk' && urlObj.id && urlObj.verb === 'edit') {
    if (error) {
      delete routes[url];
    } else {
      routes[url] = FormEditPenduduk;
    }
  }
}

async function addProtectedRoute() {
  const { error } = await checkTokenLogin();

  if (error) {
    delete routes['/penduduk/tambah'];
    delete routes['/kepala-keluarga/tambah'];
    delete routes['/kegiatan/tambah'];
  } else {
    routes['/penduduk/tambah'] = FormDaftarPenduduk;
    routes['/kepala-keluarga/tambah'] = FormKepalaKeluarga;
    routes['/kegiatan/tambah'] = FormKegiatan;
  }

  if (!error) {
    delete routes['/login'];
  } else {
    routes['/login'] = Login;
  }
}

export { addRouteHaveId, addProtectedRoute };
