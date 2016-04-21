export default function () {
    return {
        core: {
            // 统一定义AppState和AppData，影响admin页面的自动生成
            AppSettingsSchema: [
                // 网站设置
                {
                    class: '网站设置',
                    label: 'Title',
                    source: 'AppState',
                    key: 'title',
                    type: 'string'
                },
                {
                    class: '网站设置',
                    label: 'Metas',
                    source: 'AppState',
                    key: 'metas',
                    type: 'array' // 每一项是一个html meta
                },
                {
                    class: '网站设置',
                    label: 'Links',
                    source: 'AppState',
                    key: 'links',
                    type: 'array' // 每一项是一个html link
                },

                // 导航栏设置
                {
                    class: '导航栏设置',
                    label: 'Brand',
                    source: 'AppState',
                    key: 'appbarBrand',
                    type: 'object' // {text, href}
                },
                {
                    class: '导航栏设置',
                    label: 'Links',
                    source: 'AppState',
                    key: 'appbarLinks',
                    type: 'array' // [{text, href}]
                },

                // 页脚设置
                {
                    class: '页脚设置',
                    label: '页脚内容',
                    source: 'AppState',
                    key: 'footer',
                    type: 'object' // {text, href, target}
                },

                // 首页设置
                {
                    class: '首页设置',
                    label: '标题',
                    source: 'AppData',
                    key: 'indexPageTitle',
                    type: 'string'
                },
                {
                    class: '首页设置',
                    label: '轮播海报',
                    source: 'AppData',
                    key: 'indexPageCarousel',
                    type: 'array' // [{src, href, head, body}] - 建议n个16:9
                },
                {
                    class: '首页设置',
                    label: '区域A',
                    source: 'AppData',
                    key: 'indexPageSectionA',
                    type: 'array' // [{src, href}] - 建议1~2个16:9
                },
                {
                    class: '首页设置',
                    label: '区域A',
                    source: 'AppData',
                    key: 'indexPageSectionB',
                    type: 'array' // [{src, href}] - 建议4或8个1:1
                }
            ]
        },
        blog: {
            listPostsPageLoadLimitStep: 10,
            blogAdminPageLoadLimitStep: 10
        }
    }
}