export default {
    // 统一定义AppState和AppData，影响admin页面的自动生成
    AppSettingsSchema: [
        // 网站设置
        {
            class: '网站设置',
            label: 'Title',
            source: 'AppState',
            key: 'title',
            type: String
        },
        {
            class: '网站设置',
            label: 'Metas',
            source: 'AppState',
            key: 'metas',
            type: Array // 每一项是一个html meta
        },
        {
            class: '网站设置',
            label: 'Links',
            source: 'AppState',
            key: 'links',
            type: Array // 每一项是一个html link
        },

        // 导航栏设置
        {
            class: '导航栏设置',
            label: 'Brand',
            source: 'AppState',
            key: 'appbarBrand',
            type: Object // {text, href}
        },
        {
            class: '导航栏设置',
            label: 'Links',
            source: 'AppState',
            key: 'appbarLinks',
            type: Array // [{text, href}]
        },

        // 页脚设置
        {
            class: '页脚设置',
            label: '页脚内容',
            source: 'AppState',
            key: 'footer',
            type: Object // {text, href, target}
        },

        // 首页设置
        {
            class: '首页设置',
            label: '标题',
            source: 'AppData',
            key: 'indexPageTitle',
            type: String
        },
        {
            class: '首页设置',
            label: '轮播海报',
            source: 'AppData',
            key: 'indexPageCarousel',
            type: Array // [{src, href, head, body}] - 建议n个16:9
        },
        {
            class: '首页设置',
            label: '区域A',
            source: 'AppData',
            key: 'indexPageSectionA',
            type: Array // [{src, href}] - 建议1~2个16:9
        },
        {
            class: '首页设置',
            label: '区域A',
            source: 'AppData',
            key: 'indexPageSectionB',
            type: Array // [{src, href}] - 建议4或8个1:1
        }
    ]

}