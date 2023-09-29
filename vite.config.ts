/// <reference types="vitest" />

import path from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Markdown from 'unplugin-vue-markdown/vite'
import Components from 'unplugin-vue-components/vite'
import {

  ElementPlusResolver,
} from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import VueMacros from 'unplugin-vue-macros/vite'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    VueMacros({
      defineOptions: false,
      defineModels: false,
      plugins: {
        vue: Vue({
          include: [/\.vue$/, /\.md$/], // <-- allows Vue to compile Markdown files
          script: {
            propsDestructure: true,
            defineModel: true,
          },
        }),
      },
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
      ],
      dts: true,
      dirs: [
        './src/composables',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      resolvers: [ElementPlusResolver()],
      dts: true,
    }),

    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    UnoCSS(),
    Markdown({ /* options */ }),
  ],

  css: {
    preprocessorOptions: {
      postcss: {
        // 一些配置
      },
      scss: {
        additionalData: '@import "./src/styles/main.scss";'
      }
    }
  },

  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },
})
