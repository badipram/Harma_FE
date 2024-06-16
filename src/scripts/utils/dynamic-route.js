/* eslint-disable consistent-return */
import routes from '../routes/routes';
import Keluarga from '../views/pages/keluarga';
import UrlParser from '../routes/url-parser';
import FormKeluarga from '../views/pages/form-keluarga';
import FormEditPenduduk from '../views/pages/form-edit-penduduk';
// eslint-disable-next-line import/named
import { checkTokenLogin } from './function-helper';
import FormDaftarPenduduk from '../views/pages/form-daftar-penduduk';
import FormKepalaKeluarga from '../views/pages/form-kepkel';
import FormKegiatan from '../views/pages/form-kegiatan';
import Login from '../views/pages/login';

async function addRouteHaveId(url) {
  const urlObj = UrlParser._urlSplitter(url);
  if (urlObj.resource === 'keluarga' && urlObj.id && urlObj.verb === null) {
    routes[url] = Keluarga;
  }

  if (urlObj.resource === 'keluarga' && urlObj.id && urlObj.verb === 'tambah') {
    const { error } = await checkTokenLogin();
    if (error) {
      delete routes[url];
      const prevUrlWithId = `#/${urlObj.resource}/${urlObj.id}`;
      return prevUrlWithId;
    }
    routes[url] = FormKeluarga;
  }

  if (urlObj.resource === 'penduduk' && urlObj.id && urlObj.verb === 'edit') {
    const route = localStorage.getItem('route');
    const previousUrl = `#${route}`;
    const { error } = await checkTokenLogin();
    if (error) {
      delete routes[url];
      if (route === '/penduduk') {
        return previousUrl;
      }
      return previousUrl;
    }
    routes[url] = FormEditPenduduk;
  }
}

async function addProtectedRoute(url) {
  const urlObj = UrlParser._urlSplitter(url);

  // protected route tambah penduduk
  if (urlObj.resource === 'penduduk' && urlObj.verb === 'tambah') {
    const { error } = await checkTokenLogin();
    if (error) {
      delete routes['/penduduk/tambah'];
      const previousUrl = '#/penduduk';
      return previousUrl;
    }
    routes['/penduduk/tambah'] = FormDaftarPenduduk;
  }

  // protected route tambah kepala keluarga
  if (urlObj.resource === 'kepala-keluarga' && urlObj.verb === 'tambah') {
    const { error } = await checkTokenLogin();
    if (error) {
      delete routes['/kepala-keluarga/tambah'];
      const previousUrl = '#/kepala-keluarga';
      return previousUrl;
    }
    routes['/penduduk/tambah'] = FormKepalaKeluarga;
  }

  // protected route tambah kegiatan
  if (urlObj.resource === 'kegiatan' && urlObj.verb === 'tambah') {
    const { error } = await checkTokenLogin();
    if (error) {
      delete routes['/kegiatan/tambah'];
      const previousUrl = '#/kegiatan';
      return previousUrl;
    }
    routes['/kegiatan/tambah'] = FormKegiatan;
  }

  // protected route login
  if (urlObj.resource === 'login') {
    const { error } = await checkTokenLogin();
    if (!error) {
      delete routes['/login'];
      const previousUrl = '#/beranda';
      return previousUrl;
    }
    routes['/login'] = Login;
  }
}

// export default dynamicRoute;
export { addRouteHaveId, addProtectedRoute };
