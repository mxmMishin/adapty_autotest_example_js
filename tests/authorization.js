module.exports = {
  // авторизация существующего пользователя
  login(browser) {
    let loginPage = browser.page.login();
    let user = browser.globals.userData;

    loginPage
      .navigate()
      .waitForElementVisible('@form')
      .setValue('@emailField', user.email)
      .setValue('@passwordField', user.password)
      .saveScreenshot('output/authorization.png')
      .click('@btnLogin')
      .assert.urlContains('https://dev.adapty.io/dashboard')
      .expect.element('.content').to.be.visible

    browser.end();
  },

  // изменения пароля
  loginWithChangedPassword(browser){
    let loginPage = browser.page.login();
    let accountPage = browser.page.account();
    let dashboardPage = browser.page.dashboard()
    let header = dashboardPage.section.header;
    let user = browser.globals.userData;

    loginPage
      .navigate()
      .waitForElementVisible('@form')
      .setValue('@emailField', user.email)
      .setValue('@passwordField', user.password)
      .click('@btnLogin')
      .assert.urlContains('https://dev.adapty.io/dashboard')
      .expect.element('.content').to.be.visible

    accountPage
      .navigate()
      .waitForElementVisible('@btnOpenModalChangePassword')
      .click('@btnOpenModalChangePassword')
      .waitForElementVisible('@modalChangePassword', 'Change password Modal was shown')
      .setValue('@oldPasswordField', user.password)
      .setValue('@newPasswordField', user.password)
      .saveScreenshot('output/changePassword.png')
      .click('@btnChangePassword')
      .getLocationInView('@btnLogOut');

    browser.end();
  },

  // валидации полей
  fieldTest(browser){
    let loginPage = browser.page.login();
    loginPage
      .navigate()

    loginPage
      .assert.visible('@emailField', 'Email field is visible')      // проверка наличия всех элементов полей полей
      .assert.visible('@passwordField', 'Password field is visible')
      .assert.visible('@btnLogin', 'Login button is visible')

    browser.end();
  }
};