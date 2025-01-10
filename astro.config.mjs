import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://opensource.smilingrobo.com',
  base: '/',
  integrations: [starlight({
    title: 'Open-Source Sprint',
    logo: {
      src: './src/assets/logo.png'
    },
    social: {
      github: 'https://github.com/SmilingRobo/'
    },
    sidebar: [{
      label: '[home] Home',
      link: '/'
    }, {
      label: '[box] Projects',
      autogenerate: {
        directory: 'projects'
      }
    }, {
      label: '[box] Guides',
      autogenerate: {
        directory: 'guides'
      }
    }],
    components: {
      ThemeProvider: './src/components/ThemeProvider.astro',
      ThemeSelect: './src/components/ThemeSelect.astro',
      SiteTitle: './src/components/SiteTitle.astro',
      Sidebar: './src/components/Sidebar.astro',
      Pagination: './src/components/Pagination.astro',
      Hero: './src/components/Hero.astro',
      Head: './src/components/Head.astro',
      PageTitle: './src/components/PageTitle.astro'
    },
    customCss: [
      '@fontsource-variable/space-grotesk/index.css',
      '@fontsource/space-mono/400.css',
      '@fontsource/space-mono/700.css',
      './src/styles/theme.css'
    ],
    expressiveCode: {
      themes: ['github-dark']
    },
    pagination: false,
    lastUpdated: true
  })],
  output: "static"
});