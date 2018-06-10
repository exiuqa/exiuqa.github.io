module.exports = {
    title: '一休强开讲啦',
    description: '人的综合素养主要包括科学素养,人文素养和艺术素养。科学追求的是真、给人以理性、使人理智；人文追求的是善、给人以悟性、使人虔诚；艺术追求的是美、给人以感性、让人富有激情。',
    dest: './dist',    // 设置输出目录
    base: '/', // 设置站点根路径
    port: 7070,
    themeConfig: {
        repo: 'https://github.com/exiuqa',
        nav: [
            { text: '首页', link: '/' },
            {
                text: '行动现在',
                items: [{ text: 'java', link: '/now/java/' },
                { text: 'spring', link: '/now/spring/' },
                { text: 'git', link: '/now/git/' },
                { text: 'idea', link: '/now/idea/' },
                { text: 'linux', link: '/now/linux/' },
                { text: 'docker', link: '/now/docker/' },
                { text: 'web', link: '/now/web/' },]
            },
            {
                text: '准备未来',
                items: [{ text: '第二大脑', link: '/future/brain/' },
                { text: '解忧杂货', link: '/future/worryGrocery/' },
                ]
            },
            //{ text: '封存过去', link: '/past/' },
            { text: '联系我', link: '/me/me.md' },
        ],
        sidebar: {
            '/future/brain/': [{
                //title: '第二大脑',
                collapsable: false,
                children: [
                    ''
                ]
            }],
            '/future/worryGrocery/': [{
                //title: '解忧杂货',
                collapsable: false,
                children: [
                    ''
                ]
            }],
            '/now/java/': [{
                //title: 'java',
                collapsable: false,
                children: [
                    ['jvm',"1.jvm"],
                    ['foundation',"2.Java基础"],
                    ['concurrent',"3.并发编程"],
                    ['network',"4.网络编程"],
                    ['code',"5.源码解析"],
                    ['design',"6.设计模式"],
                    ['framework',"7.框架"],
                    ['server',"8.应用服务器"],
                    ['structure',"9.数据结构"],
                    ['system',"10.操作系统"],
                    ['compiling',"11.编译原理"],
                    ['store',"12.数据存储"],
                    ['safe',"13.网络安全"],
                    ['frame',"14.架构"],
                    ['data',"15.大数据"],
                    ['deploy',"16.构建&部署"],
                    ['about',"17.相关知识"]
            

                ]
            }],
        }
    }, //themeConfig
}