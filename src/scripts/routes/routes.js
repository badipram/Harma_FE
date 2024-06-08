import AboutUs from '../views/pages/about-us';
import Beranda from '../views/pages/beranda';
import Penduduk from '../views/pages/penduduk';
import KepalaKeluarga from '../views/pages/kepala-keluarga';
import Kegiatan from '../views/pages/kegiatan';
import Login from '../views/pages/login';
import FormKepalaKeluarga from '../views/pages/form-kepkel';
import FormDaftarPenduduk from '../views/pages/form-daftar-penduduk';
import FormKegiatan from '../views/pages/form-kegiatan';

const routes = {
  '/': Beranda,
  '/beranda': Beranda,
  '/penduduk': Penduduk,
  '/kepala-keluarga': KepalaKeluarga,
  '/kegiatan': Kegiatan,
  '/about-us': AboutUs,
  '/login': Login,
  '/kepala-keluarga/tambah': FormKepalaKeluarga,
  '/penduduk/tambah': FormDaftarPenduduk,
  '/kegiatan/tambah': FormKegiatan,
};

export default routes;
