/* eslint-disable global-require */
/* eslint-disable no-undef */
Feature('kepala-keluarga-not-login');

Before(({ I }) => {
  I.amOnPage('/#/beranda');
});

// adding kepala keluarga kalau belum login
Scenario('adding kepala keluarga when not logged in', async ({ I }) => {
  I.amOnPage('/#/beranda');

  I.seeElement('.dropdown-toggle');
  I.click('.dropdown-toggle');

  I.waitForElement('.dropdown-content', 5);
  I.seeElement('.dropdown-content');

  I.click('.dropdown-content li a[href="#/kepala-keluarga"]');

  I.seeCurrentUrlEquals('/#/kepala-keluarga');

  I.seeElement('.btn-penduduk');
  I.click('#tambah-kepala-keluarga');

  I.waitForElement('.swal2-popup', 5);
  I.see('Route Dibatasi', '.swal2-popup');

  I.click('.swal2-confirm');
});
