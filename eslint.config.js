import antfu from '@antfu/eslint-config'
import unocss from '@unocss/eslint-plugin'

export default antfu(
  {
    unocss: true,
    rules: {
      'prefer-regex-literals': 'off',
    },
    // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
    ignores: [
      './fixtures',
      // ...globs
    ],
  },
  unocss.configs.flat,

)
