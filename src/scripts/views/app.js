import Swal from 'sweetalert2';
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
// import dynamicRoute from '../utils/dynamic-route';
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

  // async renderPage() {
  //   const url = UrlParser.parseActiveUrlWithCombiner();
  //   // dynamicRoute(url);
  //   // await dynamicRoute(url);
  //   await addRouteHaveId(url);
  //   await addProtectedRoute();
  //   const page = routes[url];
  //   this._content.innerHTML = await page.render();
  //   await page.afterRender();
  // }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();

    await addRouteHaveId(url);
    await addProtectedRoute();

    const page = routes[url];
    if (!page) {
      this._content.innerHTML = '<p class="error-message">Page not found 🥲</p>';
      Swal.fire({
        title: 'Info',
        text: 'Anda sudah login.',
        icon: 'info',
        timer: 3000,
        timerProgressBar: true,
        willClose: () => {
          window.location.href = '#/beranda';
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
