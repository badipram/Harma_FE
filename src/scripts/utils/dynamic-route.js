import routes from '../routes/routes';
import Keluarga from '../views/pages/keluarga';
import UrlParser from '../routes/url-parser';
import FormKeluarga from '../views/pages/form-keluarga';

function dynamicRoute(url) {
  const urlObj = UrlParser._urlSplitter(url);
  if (urlObj.resource === 'keluarga' && urlObj.id) {
    routes[url] = Keluarga;
  }

  if (urlObj.resource === 'keluarga' && urlObj.id && urlObj.verb) {
    routes[url] = FormKeluarga;
  }
}

export default dynamicRoute;
