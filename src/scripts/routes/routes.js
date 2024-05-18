import AboutUs from '../views/pages/about-us';
import Beranda from '../views/pages/beranda';
import Fasilitas from '../views/pages/fasilitas';
import Kegiatan from '../views/pages/kegiatan';
import Login from '../views/pages/login';
import FormFasilitas from '../views/pages/form-fasilitas';
import FormKegiatan from '../views/pages/form-kegiatan';

const routes = {
    '/': Beranda,
    '/beranda': Beranda,
    '/fasilitas': Fasilitas,
    '/kegiatan': Kegiatan,
    '/about-us': AboutUs,
    '/login': Login,
    '/fasilitas/tambah': FormFasilitas,
    '/kegiatan/tambah': FormKegiatan,
};

export default routes;
