import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  content: {
    pipeline: {
      exclude: ['node_modules', 'dist', '.git', '.husky', '.vscode', 'public', 'build', 'mock', './stats.html', 'assets/style'],
    },
  },
  transformers: [transformerDirectives()],
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none'],
    ['border-top', 'border-t-[1px] border-b-0 border-x-0   light:border-[#3c3c3c1f] dark:border-[#5454547a] border-solid'],
    ['border-bottom', 'border-b-[1px] border-t-0 border-x-0   light:border-[#3c3c3c1f] dark:border-[#5454547a] border-solid'],
  ],
  rules: [
    [
      RegExp(`^col-?(\\d*)$`),
      ([, size]: any): any => {
        if (size) {
          return {
            flex: `0 0 ${(size / 12) * 100}%`,
            width: `${(size / 12) * 100}%`,
          }
        }
        else {
          return {
            flex: '1 0 0%',
          }
        }
      },
      { autocomplete: 'col-<num>' },
    ],
    [
      `col-auto`,
      {
        flex: '0 0 auto',
        width: 'auto',
      },
    ],
    [
      `col-fill`,
      {
        flex: '1 1 auto',
        width: 'auto',
      },
    ],
  ],
  theme: {
    breakpoints: {
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography({
      selectorName: 'markdown',
      cssExtend: {
        '*': {
          'text-align': 'left',
        },
        'p img': { display: 'block', margin: '0 auto' },
      },
    }),
    // presetGrid({
    //   piece: "0px"
    // })
    // presetWebFonts({
    //   fonts: {
    //     sans: 'DM Sans',
    //     serif: 'DM Serif Display',
    //     mono: 'DM Mono',
    //   },
    // }),
  ],
})
