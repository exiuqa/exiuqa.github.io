module.exports = {
    title: '一休强开讲啦',
    description: '人的综合素养主要包括科学素养,人文素养和艺术素养。科学追求的是真、给人以理性、使人理智；人文追求的是善、给人以悟性、使人虔诚；艺术追求的是美、给人以感性、让人富有激情。',
    dest: './dist',    // 设置输出目录
    base: '/dist', // 设置站点根路径
    port: 7070,
    themeConfig: {
        repo: 'https://github.com/exiuqa',
        nav: [
            { text: '首页', link: '/' },
            {
                text: '行动现在',
                items: [{ text: 'spring', link: '/now/spring/' },
                { text: 'spring-batch', link: '/now/springbatch/' },]
            },
            { text: '准备未来', link: '/future/' },
            { text: '封存过去', link: '/past/' },
            { text: '联系我', link: '/me/me.md' },
        ],
        sidebar: {
            '/now/': [{
                title: '行动现在',
                collapsable: true,
                children: [
                    ''
                ]
            }],
            '/future/': [{
                title: '准备未来',
                collapsable: false,
                children: [
                    '',
                ]
            }],
        }
    }, //themeConfig
}