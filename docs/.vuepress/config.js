module.exports = {
    title:'马新想个人网站',
    head: [
        ["link", { rel: "icon", href: `https://webxiaoma.com/img/manong.jpg` }],
    ], //被注入页面 HTML <head> 额外的标签
    base:'/java-demos/docs/blogs/', // 部署站点的基础路径
    dest: "./blogs", //输出目录
    serviceWorker: true, //缓存那些已访问过的页面的内容
    themeConfig: {  // 导航
        logo:'https://webxiaoma.com/img/manong.jpg',
        searchMaxSuggestions: 15, // 搜索设置数量
        nav: [  // 导航栏 使用了element 导航
            { text: '首页', link: '/' },
            { text: 'Java基础', link:"/base/"},
            { text: 'Java常用工具',  link:"/tools/"},
        ],
        sidebar: {  // 侧边栏
            "/base/":[
               "",
               {
                title: '搭建环境',
                collapsable: true, // 是否可折叠
                children: [
                  "environment_win10"
                ] 
               },{
                title: 'JAVA基础',
                collapsable: true, // 是否可折叠
                children: [
                   "base_data", //Java数据类型
                   "number", 
                   "string", 
                   "array", 
                   "date",
                   "modifier",  //Java修饰符
                   "object2",
                   "package",
                   "reflect"
                ] 
               }
            ],
            "/tools/":[
                "",
               {
                 title: 'Idea工具',
                 collapsable: true, // 是否可折叠
                 children: [
                   "idea"
                 ] 
               }, {
                title: 'Maven',
                collapsable: true, // 是否可折叠
                children: [
                "maven",
                "tomcat"
                ] 
               }
            ]
        },
        sidebarDepth:2,// 侧边栏最大层级 最大只能为2
       // displayAllHeaders:true,  // 侧边栏所有链接全展开
       lastUpdated: '最近更新时间', // 最后更新时间
       serviceWorker: {
            updatePopup: { //刷新内容的弹窗
                message: "这篇文章已经更新", 
                buttonText: "立即刷新" 
            }
        },
        
        // 假定是 GitHub. 同时也可以是一个 完整的 GitLab URL
        repo: 'webxiaoma/java-demo',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'GitHub',
        // 以下为可选的编辑链接选项

        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'webxiaoma/java-demo/docs/blogs',
        // 假如文档不是放在仓库的根目录下：
        docsDir: '/docs/blogs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '文章有问题，欢迎提出！'
       
    },
    plugins:[
        "@vuepress/back-to-top",
        ["@vuepress/pwa",{
            serviceWorker: true,
            updatePopup: true,
        }],
    ]
};





