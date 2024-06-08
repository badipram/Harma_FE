/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const jwt = require('jsonwebtoken');
const Bcrypt = require('bcryptjs');
const {
  Penduduk, KepalaKeluarga, Keluarga, User,
} = require('../models');

module.exports = [
  {
    method: 'POST',
    path: '/register',
    handler: async (request, h) => {
      const { email, password } = request.payload;

      // Hash password sebelum menyimpan ke database
      const hashedPassword = await Bcrypt.hash(password, 10);

      try {
        const findUser = await User.findOne({ where: { email } });
        if (findUser) {
          return h.response({ error: 'User has registered' }).code(404);
        }

        const user = await User.create({ email, password: hashedPassword });
        return h.response({ user }).code(201);
      } catch (err) {
        return h.response({ error: err.message }).code(400);
      }
    },
  },
  {
    method: 'POST',
    path: '/login',
    handler: async (request, h) => {
      const { email, password } = request.payload;

      try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
          return h.response({ error: 'User not found' }).code(404);
        }

        const isValid = await Bcrypt.compare(password, user.password);
        if (!isValid) {
          return h.response({ error: 'Invalid password' }).code(401);
        }

        const token = jwt.sign({ email: user.email }, 'your_secret_key', { algorithm: 'HS256' });
        return h.response({ token }).code(200);
      } catch (err) {
        return h.response({ error: err.message }).code(400);
      }
    },
  },
  {
    method: 'POST',
    path: '/penduduk/tambah',
    handler: async (request, h) => {
      const {
        id_penduduk, nama, alamat, tanggal_lahir, jenis_kelamin,
      } = request.payload;

      try {
        const findPenduduk = await Penduduk.findOne({ where: { id_penduduk } });
        if (findPenduduk) {
          return h.response({ error: 'Penduduk telah terdaftar' }).code(400);
        }

        const createPenduduk = await Penduduk.create({
          id_penduduk, nama, alamat, tanggal_lahir, jenis_kelamin,
        });
        return h.response({ createPenduduk }).code(201);
      } catch (error) {
        return h.response({ error: error.message }).code(400);
      }
    },
  },
  {
    method: 'POST',
    path: '/kepala-keluarga/tambah',
    handler: async (request, h) => {
      const { id_kepala_keluarga, id_penduduk } = request.payload;

      try {
        const findKepalaKeluarga = await KepalaKeluarga.findOne({ where: { id_penduduk } });
        const findPendudukInKeluarga = await Keluarga.findOne({ where: { id_anggota_keluarga: id_penduduk } });
        if (findKepalaKeluarga) {
          return h.response({ error: 'Kepala Keluarga telah terdaftar' }).code(400);
        }
        if (findPendudukInKeluarga) {
          return h.response({ error: 'Penduduk telah terdaftar di Keluarga' }).code(400);
        }

        const addKepalaKeluarga = await KepalaKeluarga.create({ id_kepala_keluarga, id_penduduk });
        return h.response({ addKepalaKeluarga }).code(201);
      } catch (error) {
        return h.response({ error: error.message }).code(400);
      }
    },
  },
  {
    method: 'POST',
    path: '/keluarga/{id}/tambah',
    handler: async (request, h) => {
      const { id: id_kepala_keluarga } = request.params;
      const { id_keluarga, id_anggota_keluarga, hubungan } = request.payload;

      try {
        const findAnggotaKeluarga = await Keluarga.findOne({ where: { id_anggota_keluarga } });
        const findPendudukAsKepalaKeluarga = await KepalaKeluarga.findOne({
          where: { id_penduduk: id_anggota_keluarga },
        });

        if (findAnggotaKeluarga) {
          return h.response({ error: 'Anggota Keluarga telah terdaftar' }).code(400);
        }

        if (findPendudukAsKepalaKeluarga) {
          return h.response({ error: 'Penduduk telah terdaftar sebagai Kepala Keluarga' }).code(400);
        }

        const addKeluarga = await Keluarga.create({
          id_keluarga, id_kepala_keluarga, id_anggota_keluarga, hubungan,
        });
        return h.response({ addKeluarga }).code(201);
      } catch (error) {
        return h.response({ error: error.message }).code(400);
      }
    },
  },
  {
    method: 'GET',
    path: '/penduduk',
    handler: async (request, h) => {
      try {
        const penduduks = await Penduduk.findAll();
        return h.response(penduduks).code(200);
      } catch (error) {
        return h.response({ error: error.message }).code(500);
      }
    },
  },
  {
    method: 'GET',
    path: '/penduduk/{id}',
    handler: async (request, h) => {
      try {
        const { id } = request.params;
        const penduduk = await Penduduk.findOne({
          where: { id_penduduk: id },
        });
        return h.response(penduduk).code(200);
      } catch (error) {
        return h.response({ error: error.message }).code(500);
      }
    },
  },
  {
    method: 'GET',
    path: '/kepala-keluarga',
    handler: async (request, h) => {
      try {
        const kepalakeluargas = await KepalaKeluarga.findAll({
          include: {
            model: Penduduk,
          },
        });
        return h.response(kepalakeluargas).code(200);
      } catch (error) {
        return h.response({ error: error.message }).code(500);
      }
    },
  },
  {
    method: 'GET',
    path: '/keluarga/{id}',
    handler: async (request, h) => {
      try {
        const { id } = request.params;
        const keluargas = await KepalaKeluarga.findOne({
          where: { id_kepala_keluarga: id },
          include: [
            {
              model: Penduduk,
            },
            {
              model: Keluarga,
              include: {
                model: Penduduk,
              },
            },
          ],
        });
        return h.response(keluargas).code(200);
      } catch (error) {
        return h.response({ error: error.message }).code(500);
      }
    },
  },
  {
    method: 'PUT',
    path: '/penduduk/{id}/edit',
    handler: async (request, h) => {
      try {
        const { id } = request.params;
        const {
          nama, alamat, tanggal_lahir, jenis_kelamin,
        } = request.payload;

        const [rowsUpdated] = await Penduduk.update({
          nama, alamat, tanggal_lahir, jenis_kelamin,
        }, {
          where: { id_penduduk: id },
        });

        if (rowsUpdated === 0) {
          return h.response({ error: 'Penduduk tidak ditemukan' }).code(404);
        }

        return h.response({
          message: 'Penduduk sukses diupdate',
          rowsUpdated,
        }).code(200);
      } catch (error) {
        return h.response({ error: error.message }).code(500);
      }
    },
  },
  {
    method: 'DELETE',
    path: '/penduduk/{id}',
    handler: async (request, h) => {
      try {
        const { id } = request.params;
        const rowsDeleted = await Penduduk.destroy({
          where: { id_penduduk: id },
        });

        if (rowsDeleted === 0) {
          return h.response({ error: 'Gagal menghapus penduduk' }).code(404);
        }

        return h.response({ message: 'Penduduk berhasil dihapus' }).code(200);
      } catch (error) {
        return h.response({ error: error.message }).code(500);
      }
    },
  },
  {
    method: 'DELETE',
    path: '/kepala-keluarga/{id}',
    handler: async (request, h) => {
      try {
        const { id } = request.params;
        const rowsDeleted = await KepalaKeluarga.destroy({
          where: { id_kepala_keluarga: id },
        });

        if (rowsDeleted === 0) {
          return h.response({ error: 'Gagal menghapus Kepala Keluarga' }).code(404);
        }

        return h.response({ message: 'Kepala Keluarga berhasil dihapus' }).code(200);
      } catch (error) {
        return h.response({ error: error.message }).code(500);
      }
    },
  },
  {
    method: 'DELETE',
    path: '/keluarga/{id}',
    handler: async (request, h) => {
      try {
        const { id } = request.params;
        const rowsDeleted = await Keluarga.destroy({
          where: { id_keluarga: id },
        });

        if (rowsDeleted === 0) {
          return h.response({ error: 'Gagal menghapus anggota keluarga' }).code(404);
        }

        return h.response({ message: 'Anggota keluarga berhasil dihapus' }).code(200);
      } catch (error) {
        return h.response({ error: error.message }).code(500);
      }
    },
  },
];
