const protectedRoutes = [
  {
    method: 'GET',
    path: '/kepala-keluarga/tambah',
    options: {
      auth: 'jwt',
    },
    handler: (request, h) => h.response({ message: 'You have accessed a secured endpoint' }).code(200),
  },
  {
    method: 'GET',
    path: '/penduduk/tambah',
    options: {
      auth: 'jwt',
    },
    handler: (request, h) => h.response({ message: 'You have accessed a secured endpoint' }).code(200),
  },
];

module.exports = protectedRoutes;
