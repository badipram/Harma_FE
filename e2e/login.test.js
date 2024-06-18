/* eslint-disable global-require */
/* eslint-disable no-undef */
Feature('login');

Before(({ I }) => {
  I.amOnPage('/#/beranda');
});

// Valid login
Scenario('Valid Login', async ({ I }) => {
  const loginHelper = require('./helpers/login-helper');
  await loginHelper.validLogin(I);
});

// Invalid login
Scenario('Invalid Login', ({ I }) => {
  I.seeElement('.login');
  I.click('.login');

  I.seeCurrentUrlEquals('/#/login');

  I.wait(1);

  I.seeElement('#email');
  I.seeElement('#password');

  I.wait(1);

  I.fillField('#email', 'mamanRacing@gmail.com');
  I.fillField('#password', 'racing');

  I.click('button[type=submit]');

  I.waitForElement('.swal2-popup', 5);
  I.see('Login Gagal', '.swal2-popup');

  I.click('.swal2-confirm');
});
