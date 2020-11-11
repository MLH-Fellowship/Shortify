const { description } = require('../../package');

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: 'Shortify',
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['meta', { name: 'theme-color', content: '#800080	' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ],

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: false,
        nav: [
            {
                text: 'User Guide',
                link: '/user-guide/',
            },
            {
                text: 'Developer Guide',
                link: '/developer-guide/',
            },
        ],
        sidebar: {
            '/developer-guide/': [
                {
                    title: 'Developer Guide',
                    collapsable: false,
                    children: [
                        '',
                        'frontend.md',
                        'backend.md',
                        'contributing.md',
                        'code-of-conduct.md',
                    ],
                },
            ],
            '/user-guide/': [
                {
                    title: 'User Guide',
                    collapsable: false,
                    children: ['', 'features.md', 'demo.md', 'motivation.md'],
                },
            ],
        },
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
};
