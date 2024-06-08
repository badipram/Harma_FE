/* eslint-disable consistent-return */
const BASE_URL = 'http://localhost:3000';

const tryLogin = async (login) => {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(login),
    };
    const response = await fetch(`${BASE_URL}/login`, options);
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson;
  } catch (error) {
    console.log(error);
  }
};

const getAllPenduduk = async () => {
  try {
    const response = await fetch(`${BASE_URL}/penduduk`);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log(error);
  }
};

const getKepalaKeluarga = async () => {
  try {
    const response = await fetch(`${BASE_URL}/kepala-keluarga`);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log(error);
  }
};

const getKeluargaById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/keluarga/${id}`);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log(error);
  }
};

const addPenduduk = async (penduduk) => {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(penduduk),
    };
    const response = await fetch(`${BASE_URL}/penduduk/tambah`, options);
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson;
  } catch (error) {
    console.log(error);
  }
};

const addKepalaKeluarga = async (id) => {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(id),
    };
    const response = await fetch(`${BASE_URL}/kepala-keluarga/tambah`, options);
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson;
  } catch (error) {
    console.log(error);
  }
};

const addKeluarga = async (keluarga) => {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(keluarga),
    };
    const response = await fetch(`${BASE_URL}/keluarga/${keluarga.id_kepala_keluarga}/tambah`, options);
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson;
  } catch (error) {
    console.log(error);
  }
};

const deletePendudukById = async (id) => {
  const options = {
    method: 'DELETE',
  };
  try {
    const response = await fetch(`${BASE_URL}/penduduk/${id}`, options);
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson;
  } catch (error) {
    console.log(error);
  }
};

const deleteKepalaKeluargaById = async (id) => {
  const options = {
    method: 'DELETE',
  };
  try {
    const response = await fetch(`${BASE_URL}/kepala-keluarga/${id}`, options);
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson;
  } catch (error) {
    console.log(error);
  }
};

const deleteKeluargaById = async (id) => {
  const options = {
    method: 'DELETE',
  };
  try {
    const response = await fetch(`${BASE_URL}/keluarga/${id}`, options);
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson;
  } catch (error) {
    console.log(error);
  }
};

export {
  tryLogin, getAllPenduduk, getKepalaKeluarga, getKeluargaById,
  addPenduduk, addKepalaKeluarga, addKeluarga, deletePendudukById, deleteKepalaKeluargaById, deleteKeluargaById,
};
