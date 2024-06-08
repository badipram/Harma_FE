import routes from '../routes/routes';
import Keluarga from '../views/pages/keluarga';
import UrlParser from '../routes/url-parser';
import FormKeluarga from '../views/pages/form-keluarga';
import FormEditPenduduk from '../views/pages/form-edit-penduduk';

function dynamicRoute(url) {
  const urlObj = UrlParser._urlSplitter(url);
  if (urlObj.resource === 'keluarga' && urlObj.id) {
    routes[url] = Keluarga;
  }

  if (urlObj.resource === 'keluarga' && urlObj.id && urlObj.verb) {
    routes[url] = FormKeluarga;
  }

  if (urlObj.resource === 'penduduk' && urlObj.id && urlObj.verb === 'edit') {
    routes[url] = FormEditPenduduk;
  }
}

export default dynamicRoute;
