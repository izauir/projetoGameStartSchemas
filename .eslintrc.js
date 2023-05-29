//Eslint (biblioteca), "fiscal de código".
module.exports = {
  'env': {
      'es6': true,
      'node': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
      'ecmaVersion': 2022,
      'sourceType': 'module'
  },
  'rules': {
      'quotes': [
          'error',
          'single'
      ],
      'semi': [
          'error',
          'never'
      ]
  }
}