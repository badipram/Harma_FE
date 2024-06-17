/* eslint-disable global-require */
/* eslint-disable no-undef */
Feature('add-keluarga');

Before(({ I }) => {
  I.amOnPage('/#/beranda');
});

// adding keluarga kalau login dulu
Scenario('adding keluarga when already logged in', async ({ I }) => {
  const loginHelper = require('./helpers/login-helper');
  await loginHelper.validLogin(I);

  const addingPendudukHelper = require('./helpers/add-penduduk-helper');
  await addingPendudukHelper.addingPenduduk(I);

  const addingKeluargaHelper = require('./helpers/add-keluarga-helper');
  await addingKeluargaHelper.addingKeluarga(I);

  const addingKepalaKeluargaHelper = require('./helpers/add-kepkel-helper');
  await addingKepalaKeluargaHelper.addingKepalaKeluarga(I);

  I.amOnPage('/#/kepala-keluarga');

  I.see('Pram', '.wrapper-daftar-penduduk');

  I.seeElement('.wrapper-img');
  const href = await I.grabAttributeFrom('.wrapper-img a', 'href');

  const id = href.split('/').pop();

  I.click('.wrapper-img');

  I.seeElement('.btn-penduduk');
  I.click('.btn-penduduk');

  I.selectOption('#penduduk', 'Lisa');

  I.click('button[type=submit]');

  I.waitForElement('.swal2-popup', 5);
  I.see('Berhasil', '.swal2-popup');

  I.click('.swal2-confirm');

  I.amOnPage(`/#/keluarga/${id}`);
});

// edit keluarga kalau login dulu
Scenario('editing keluarga when already logged in', async ({ I }) => {
  const loginHelper = require('./helpers/login-helper');
  await loginHelper.validLogin(I);

  I.amOnPage('/#/kepala-keluarga');

  I.see('Pram', '.wrapper-daftar-penduduk');

  I.wait(1);

  I.seeElement('.wrapper-img');
  const href = await I.grabAttributeFrom('.wrapper-img a', 'href');

  const id = href.split('/').pop();

  I.wait(1);

  I.click('.wrapper-img');

  I.wait(1);

  I.seeElement('.button-edit');
  I.click('.button-edit');

  I.wait(1);

  I.seeElement('#nama');
  I.seeElement('#alamat');
  I.seeElement('#tanggal_lahir');
  I.seeElement('#jenis_kelamin');

  I.wait(1);

  I.fillField('#nama', 'Agus');
  I.fillField('#alamat', 'Bonang');
  I.fillField('#tanggal_lahir', '12-12-2001');
  I.selectOption('#jenis_kelamin', 'L');

  I.click('button[type=submit]');

  I.waitForElement('.swal2-popup', 5);
  I.see('Berhasil', '.swal2-popup');

  I.click('.swal2-confirm');

  I.amOnPage(`/#/keluarga/${id}`);
});

// delete keluarga kalau login dulu
Scenario('deleting keluarga when already logged in', async ({ I }) => {
  const loginHelper = require('./helpers/login-helper');
  await loginHelper.validLogin(I);

  I.amOnPage('/#/kepala-keluarga');

  I.wait(1);

  I.seeElement('.wrapper-img');
  const href = await I.grabAttributeFrom('.wrapper-img a', 'href');

  const id = href.split('/').pop();

  I.wait(1);

  I.click('.wrapper-img');
  I.see('Lisa', '.wrapper-daftar-penduduk');

  I.wait(1);

  I.seeElement('.button-delete');
  I.click('.button-delete');

  I.waitForElement('.swal2-popup', 5);

  I.see('Apakah anda yakin ingin menghapus data keluarga ini?', '.swal2-popup');
  I.click('.swal2-confirm');

  I.amOnPage(`/#/keluarga/${id}`);
});

// delete kepala keluarga kalau login dulu
Scenario('deleting kepala keluarga already logged in', async ({ I }) => {
  const loginHelper = require('./helpers/login-helper');
  await loginHelper.validLogin(I);

  I.amOnPage('/#/kepala-keluarga');

  I.wait(1);

  I.seeElement('.button-delete');
  I.click('.button-delete');

  I.waitForElement('.swal2-popup', 5);
  I.see('Apakah anda yakin ingin menghapus data kepala keluarga ini?', '.swal2-popup');
  I.click('.swal2-confirm');

  I.waitForElement('.swal2-popup', 5);
  I.see('Terhapus!', '.swal2-popup');
  I.click('.swal2-confirm');

  I.dontSee('.content-penduduk');
});
