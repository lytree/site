import unocss from '@unocss/eslint-config/flat'

export default [
  {

    rules: {
      'prefer-regex-literals': 'off',
    },
    // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
    ignores: [
      './fixtures',
      'package.json',
      'pnpm-lock.yaml'
    ],
  },
  unocss,

]
