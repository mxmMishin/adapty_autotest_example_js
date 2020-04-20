module.exports = {
  url: 'https://dev.adapty.io/dashboard',
  elements: {
    headerAccount: {
      selector: '[href="/account"]'
    }
  },
  sections: {
    header: {
      selector: '.header',
      elements: {
        account: {
          selector: '[href="/account"]'
        }
      }
    },
    sidebar: {
      selector: 'aside',
      elements: {
        dashboard: {
          selector: '[href="/dashboard"]'
        }
      }
    }
  }
};