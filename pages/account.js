module.exports = {
  url: 'https://dev.adapty.io/account',
  elements: {
    btnOpenModalChangePassword: {
      selector: '.account__btn'
    },
    modalChangePassword: {
      selector: '.ant-modal-body'
    },
    oldPasswordField: {
      selector: '[name="new_password1"]'
    },
    newPasswordField: {
      selector: '[name="new_password2"]'
    },
    btnChangePassword: {
      selector: '.ant-modal-body [type="submit"]'
    },
    btnCloseModalChangePassword: {
      selector: '.ant-modal-body .ant-modal-close-x'
    },
    btnLogOut: {
      selector: '//*[@id="root"]/div/section/div[2]/section/main/div[3]/div/div/div[2]/button',
      locateStrategy: 'xpath'
    }
  }
};