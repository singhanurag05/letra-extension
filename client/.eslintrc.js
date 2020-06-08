module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
    es6: true,
    webextensions: true,
  },
  plugins: [
    'vue'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    'no-param-reassign': [
      'error',
      {
        'props': true,
        'ignorePropertyModificationsFor': [
          'state'
        ]
      }
    ]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js','.jsx','.vue']
      }
    },
  }
}
