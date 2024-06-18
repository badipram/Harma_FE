import Swal from 'sweetalert2';
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import { addProtectedRoute, addRouteHaveId } from '../utils/dynamic-route';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();

    const prevUrlWithId = await addRouteHaveId(url);
    const previousUrl = await addProtectedRoute(url);

    const page = routes[url];
    if (previousUrl || prevUrlWithId) {
      this._content.innerHTML = '<p class="error-message">Page not found 🥲</p>';
      Swal.fire({
        title: 'Route Dibatasi',
        text: 'Anda tidak memiliki akses ke route tersebut',
        icon: 'warning',
        timer: 3000,
        timerProgressBar: true,
        willClose: () => {
          if (previousUrl) {
            window.location.href = `${previousUrl}`;
          } else {
            window.location.href = `${prevUrlWithId}`;
          }
        },
      });
      return;
    }

    try {
      this._content.innerHTML = await page.render();
      await page.afterRender();
    } catch (error) {
      console.error('Error rendering page:', error);
      this._content.innerHTML = '<p class="error-message">Error rendering page</p>';
    }
  }
}

export default App;
