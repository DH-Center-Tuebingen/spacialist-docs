import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  base: '/spacialist-docs/',
  lang: 'en-US',

  title: 'Spacialist Documentation',
  description: 'A documentation for the Spacialist project',

  head:[
    ['link', { rel: 'icon', href: './favicon.ico', media: '(prefers-color-scheme: no-preference)' }],
    ['link', { rel: 'icon', href: './favicon.ico', media: '(prefers-color-scheme: light)' }],
    ['link', { rel: 'icon', href: './favicon-white.ico', media: '(prefers-color-scheme: dark)' }],

  ],

  theme: defaultTheme({
    logo: '/images/logos/spacialist_logo_lines_tiny_pad.svg',
    logoDark: './images/logos/spacialist_logo_lines_tiny_pad_white.svg',

    navbar: ['/', '/user/guide', '/development/coding-style'],
    sidebar: [
      {
        text: 'User Guide',
        link: '/user/',
        children: [
          '/user/guide',
          '/user/data'
        ]
      },
      {
        text: 'Development',
        link: '/development/',
        children: [
          '/development/coding-structure', 
          '/development/plugins',
          '/development/docs',
        ]
      }
    ]
  }),

  bundler: viteBundler(),
})
