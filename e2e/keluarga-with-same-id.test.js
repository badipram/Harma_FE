/* eslint-disable global-require */
/* eslint-disable no-undef */
Feature('keluarga-with-same-id');

Before(({ I }) => {
  I.amOnPage('/#/beranda');
});

// menambahkan keluarga bila id nya sama
Scenario('adding keluarga with same id', async ({ I }) => {
  const loginHelper = require('./helpers/login-helper');
  await loginHelper.validLogin(I);

  const addingPendudukHelper = require('./helpers/add-penduduk-helper');
  await addingPendudukHelper.addingPenduduk(I);

  const addingKeluargaHelper = require('./helpers/add-keluarga-helper');
  await addingKeluargaHelper.addingKeluarga(I);

  const addingKepalaKeluargaHelper = require('./helpers/add-kepkel-helper');
  await addingKepalaKeluargaHelper.addingKepalaKeluarga(I);

  I.amOnPage('/#/kepala-keluarga');

  I.wait(1);

  I.see('Pram', '.wrapper-daftar-penduduk');
  I.seeElement('.wrapper-img');
  const href = await I.grabAttributeFrom('.wrapper-img a', 'href');

  const id = href.split('/').pop();

  I.wait(1);

  I.click('.wrapper-img');

  I.wait(1);

  I.seeElement('.btn-penduduk');
  I.click('.btn-penduduk');

  I.wait(1);

  I.selectOption('#penduduk', 'Lisa');

  I.click('button[type=submit]');

  I.waitForElement('.swal2-popup', 5);
  I.see('Berhasil', '.swal2-popup');

  I.click('.swal2-confirm');

  I.amOnPage(`/#/keluarga/${id}`);

  I.wait(1);

  I.seeElement('.btn-penduduk');
  I.click('.btn-penduduk');

  I.selectOption('#penduduk', 'Lisa');

  I.click('button[type=submit]');

  I.waitForElement('.swal2-popup', 5);
  I.see('Gagal', '.swal2-popup');

  I.click('.swal2-confirm');

  I.amOnPage('/#/kepala-keluarga');

  I.seeElement('.button-delete');

  I.click('.button-delete');

  I.waitForElement('.swal2-popup', 5);
  I.see('Apakah anda yakin ingin menghapus data kepala keluarga ini?', '.swal2-popup');
  I.click('.swal2-confirm');

  I.waitForElement('.swal2-popup', 5);
  I.see('Terhapus!', '.swal2-popup');
  I.click('.swal2-confirm');
});
