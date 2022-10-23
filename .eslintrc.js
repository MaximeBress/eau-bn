module.exports = {
  extends: ['next', 'next/core-web-vitals'],
  rules:   {
    'react/no-unescaped-entities':    0,
    'react/display-name':             'off',
    '@next/next/no-page-custom-font': 'off',
    '@next/next/no-img-element':      'off',
    'quotes':                         ['error', 'single'],
    'jsx-quotes':                     ['error', 'prefer-double'],
    'object-curly-spacing':           ['error', 'always'],
  },
};
