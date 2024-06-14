/* eslint-disable global-require */
/* eslint-disable no-undef */
Feature('kepala-keluarga-with-same-id');

Before(({ I }) => {
  I.amOnPage('/#/beranda');
});

// menambahkan kepala keluarga bila id nya sama
Scenario('adding kepala keluarga with same id', async ({ I }) => {
  const loginHelper = require('./helpers/login-helper');
  await loginHelper.validLogin(I);

  const addingPendudukHelper = require('./helpers/add-penduduk-helper');
  await addingPendudukHelper.addingPenduduk(I);

  I.amOnPage('/#/beranda');

  I.seeElement('.dropdown-toggle');
  I.click('.dropdown-toggle');

  I.waitForElement('.dropdown-content', 5);
  I.seeElement('.dropdown-content');

  I.click('.dropdown-content li a[href="#/kepala-keluarga"]');

  I.seeCurrentUrlEquals('/#/kepala-keluarga');

  I.seeElement('.btn-penduduk');
  I.click('#tambah-kepala-keluarga');

  I.seeElement('#penduduk');

  I.selectOption('#penduduk', 'Pram');

  I.click('button[type=submit]');

  I.waitForElement('.swal2-popup', 5);
  I.see('Berhasil', '.swal2-popup');

  I.click('.swal2-confirm');

  I.amOnPage('/#/kepala-keluarga');

  I.see('Pram', '.wrapper-daftar-penduduk');

  I.click('#tambah-kepala-keluarga');

  I.seeElement('#penduduk');

  I.selectOption('#penduduk', 'Pram');

  I.click('button[type=submit]');

  I.waitForElement('.swal2-popup', 5);
  I.see('Gagal', '.swal2-popup');

  I.click('.swal2-confirm');

  I.seeCurrentUrlEquals('/#/kepala-keluarga');

  I.seeElement('.button-delete');

  I.click('.button-delete');

  I.waitForElement('.swal2-popup', 5);
  I.see('Apakah anda yakin ingin menghapus data kepala keluarga ini?', '.swal2-popup');
  I.click('.swal2-confirm');
});
