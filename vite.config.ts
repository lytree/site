/// <reference types="vitest" />

import path from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// vite.config.ts
import VueRouter from 'unplugin-vue-router/vite'
import Markdown from 'unplugin-vue-markdown/vite'
import Components from 'unplugin-vue-components/vite'
import {
  ElementPlusResolver,
} from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import LinkAttributes from 'markdown-it-link-attributes'
import UnoCSS from 'unocss/vite'
import Shikiji from 'markdown-it-shikiji'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  assetsInclude: ['**/*.gltf', '**/*.awebp'],
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      'assets/': `${path.resolve(__dirname, 'src')}/assets/`,
    },
  },
  plugins: [
    // https://github.com/hannoeru/vite-plugin-pages
    VueRouter({
      routesFolder: 'src/pages',
      extensions: ['.vue', '.md'],
      dts: 'src/typed-router.d.ts',

    }),

    vueJsx({}),
    Vue({
      include: [/\.vue$/, /\.md$/], // <-- allows Vue to compile Markdown files
      script: {
        propsDestructure: true,
        defineModel: true,
      },
    }),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: [
        'vue',
        VueRouterAutoImports,
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        './src/composables',
        './src/stores',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [ElementPlusResolver(
        {
          importStyle: 'sass',
        },
      )],

      dts: 'src/components.d.ts',
    }),

    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    UnoCSS(),
    Markdown({
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
      markdownItUses: [],
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(() => Shikiji({
          themes: {
            light: 'vitesse-light',
            dark: 'vitesse-dark',
          },
        }))
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })
      },
      wrapperClasses: 'markdown-body',
    }),
    VueDevTools(),
  ],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "~/styles/scss/index.scss";',
      },
    },
  },

  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },
})
