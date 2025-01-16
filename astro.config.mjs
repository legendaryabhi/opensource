import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  
  site: 'https://opensource.smilingrobo.com',
  base: '/',
  integrations: [starlight({
    head: [
      // Example: add Microsoft Clarity script tag.
      {
        tag: 'script',
        attrs: {
          type: 'text/javascript',
        },
        children: `
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "puub8562bk");
        `,
      },
    ],
    title: 'Open-Source Sprint',
    logo: {
      src: './src/assets/logo.png'
    },
    social: {
      github: 'https://github.com/SmilingRobo/',
      linkedin: 'https://www.linkedin.com/company/smilingrobo/',
      twitter:'https://x.com/smilingrobo',
      youtube: 'https://www.youtube.com/@SmilingRoboOrg'
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
      label: '[list] How to Contribute',
      link: '/how-to-contribute/'
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
