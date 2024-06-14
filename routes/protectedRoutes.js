const protectedRoutes = [
  {
    method: 'GET',
    path: '/secured-route',
    options: {
      auth: 'jwt',
    },
    handler: (request, h) => h.response({ message: 'You have accessed a secured endpoint' }).code(200),
  },
];

module.exports = protectedRoutes;
