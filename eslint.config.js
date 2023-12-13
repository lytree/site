import antfu from '@antfu/eslint-config'
import unocss from '@unocss/eslint-plugin'

export default antfu(
  {
    rules: {
      'prefer-regex-literals': 'off',
    },

  },
  unocss.configs.flat,

)
