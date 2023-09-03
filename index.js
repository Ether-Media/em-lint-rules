const no_unwrapped_jsx_text = require('./rules/no-unwrapped-jsx-text');

const allRules = {
  'no-unwrapped-jsx-text': no_unwrapped_jsx_text,
};

const rulesConfig = {
  plugins: ['@em'],
  parserOptions: {
    ecmaFeatures: {jsx: true},
  },
  rules: {
    '@em/no-unwrapped-jsx-text': 2,
  },
};

module.exports = {
  rules: allRules,
  configs: {
    recommended: rulesConfig,
    all: rulesConfig,
  },
};
