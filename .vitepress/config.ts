import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vanilla KZ Guides",
  description: "all you want to learn about vnl kz",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
			{ text: 'VNL.KZ', link: 'https://vnl.kz'},
      { text: 'Home', link: '/' },
    ],

    sidebar: [

    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/xJXhMjHcGV' }
    ]
  }
})
