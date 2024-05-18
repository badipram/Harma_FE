import AboutUs from '../views/pages/about-us';
import Beranda from '../views/pages/beranda';
import Fasilitas from '../views/pages/fasilitas';
import Kegiatan from '../views/pages/kegiatan';

const routes = {
    '/': Beranda,
    '/beranda': Beranda,
    '/fasilitas': Fasilitas,
    '/kegiatan' : Kegiatan,
    '/about-us': AboutUs,
};

export default routes;
