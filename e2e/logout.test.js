/* eslint-disable global-require */
/* eslint-disable no-undef */
Feature('logout');

Before(({ I }) => {
  I.amOnPage('/#/beranda');
});

Scenario('logout', async ({ I }) => {
  const loginHelper = require('./helpers/login-helper');
  await loginHelper.validLogin(I);

  I.waitForElement('.login', 5);
  I.see('Logout', '.login');

  I.click('.login');

  I.waitForElement('.swal2-popup', 5);
  I.see('Konfirmasi Logout', '.swal2-popup');
  I.click('.swal2-confirm');

  I.waitForElement('.login', 5);
  I.see('Login', '.login');
});
