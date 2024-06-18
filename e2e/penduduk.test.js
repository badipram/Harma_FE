/* eslint-disable global-require */
/* eslint-disable no-undef */
Feature('penduduk-login');

Before(({ I }) => {
  I.amOnPage('/#/beranda');
});

// menambahkan penduduk kalau login dulu
Scenario('adding penduduk when already logged in', async ({ I }) => {
  const loginHelper = require('./helpers/login-helper');
  await loginHelper.validLogin(I);

  I.amOnPage('/#/beranda');

  I.seeElement('.dropdown-toggle');
  I.click('.dropdown-toggle');

  I.waitForElement('.dropdown-content', 5);
  I.seeElement('.dropdown-content');

  I.click('.dropdown-content li a[href="#/penduduk"]');

  I.seeCurrentUrlEquals('/#/penduduk');

  I.seeElement('.btn-penduduk');
  I.click('#btn-tambah-penduduk');

  I.seeElement('#nama');
  I.seeElement('#alamat');
  I.seeElement('#tanggal_lahir');
  I.seeElement('#jenis_kelamin');

  I.fillField('#nama', 'Pram');
  I.fillField('#alamat', 'tangerang');
  I.fillField('#tanggal_lahir', '23-12-2001');
  I.selectOption('#jenis_kelamin', 'L');

  I.click('button[type=submit]');

  I.waitForElement('.swal2-popup', 5);
  I.see('Berhasil', '.swal2-popup');

  I.click('.swal2-confirm');

  I.amOnPage('/#/penduduk');
});

// edit penduduk kalau login dulu
Scenario('editing penduduk when already logged in', async ({ I }) => {
  const loginHelper = require('./helpers/login-helper');
  await loginHelper.validLogin(I);

  I.amOnPage('/#/penduduk');

  I.wait(1);

  I.seeElement('.button-edit');
  I.click('.button-edit');

  I.fillField('#nama', 'mandra');
  I.fillField('#alamat', 'jakarta');
  I.fillField('#tanggal_lahir', '23-12-2024');
  I.selectOption('#jenis_kelamin', 'P');

  I.click('button[type=submit]');

  I.waitForElement('.swal2-popup', 5);
  I.see('Berhasil', '.swal2-popup');

  I.click('.swal2-confirm');

  I.amOnPage('/#/penduduk');

  I.seeElement('.wrapper-daftar-penduduk');
});

// menghapus penduduk ketika sudah login
Scenario('deleting penduduk when already logged in', async ({ I }) => {
  const loginHelper = require('./helpers/login-helper');
  await loginHelper.validLogin(I);

  I.amOnPage('/#/penduduk');

  I.wait(1);

  I.seeElement('.button-delete');
  I.click('.button-delete');

  I.waitForElement('.swal2-popup', 5);
  I.see('Apakah anda yakin ingin menghapus data penduduk ini?', '.swal2-popup');
  I.click('.swal2-confirm');

  I.waitForElement('.swal2-popup', 5);
  I.see('Terhapus!', '.swal2-popup');
  I.click('.swal2-confirm');

  I.dontSee('.content-penduduk');
});
