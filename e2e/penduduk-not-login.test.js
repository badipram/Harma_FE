/* eslint-disable global-require */
/* eslint-disable no-undef */
Feature('penduduk-not-login');

Before(({ I }) => {
  I.amOnPage('/#/beranda');
});

// menambahkan penduduk bila belum login
Scenario('adding penduduk when not logged in', async ({ I }) => {
  const loginHelper = require('./helpers/login-helper');
  await loginHelper.validLogin(I);

  const addingPendudukHelper = require('./helpers/add-penduduk-helper');
  await addingPendudukHelper.addingPenduduk(I);

  const logoutHelper = require('./helpers/logout-helper');
  await logoutHelper.logoutHandler(I);

  I.amOnPage('/#/beranda');

  I.waitForElement('.swal2-popup', 5);
  I.click('.swal2-confirm');

  I.seeElement('.dropdown-toggle');
  I.click('.dropdown-toggle');

  I.waitForElement('.dropdown-content', 5);
  I.seeElement('.dropdown-content');

  I.click('.dropdown-content li a[href="#/penduduk"]');

  I.seeCurrentUrlEquals('/#/penduduk');

  I.seeElement('.btn-penduduk');
  I.click('#btn-tambah-penduduk');

  I.waitForElement('.swal2-popup', 5);
  I.see('Login Dulu!', '.swal2-popup');

  I.click('.swal2-confirm');
});

// edit penduduk bila belum login
Scenario('editing penduduk when not logged in', async ({ I }) => {
  I.amOnPage('/#/penduduk');

  I.seeElement('.button-edit');
  I.click('.button-edit');

  I.waitForElement('.swal2-popup', 5);
  I.see('Login Dulu!', '.swal2-popup');

  I.click('.swal2-confirm');
});

// menghapus penduduk bila belum login
Scenario('deleting penduduk when not logged in', async ({ I }) => {
  I.amOnPage('/#/penduduk');

  I.seeElement('.button-delete');
  I.click('.button-delete');

  I.waitForElement('.swal2-popup', 5);
  I.see('Login Dulu!', '.swal2-popup');

  I.click('.swal2-confirm');
});
