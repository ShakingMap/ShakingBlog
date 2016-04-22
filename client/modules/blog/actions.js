import Const from './constants'

export default {
    blog: {
        resetListPostsPageLoadLimit({LocalState}) {
            LocalState.set('blog.ListPostsPage.loadLimit', Const.listPostsPageLoadLimitStep);
        },

        incListPostsPageLoadLimit({LocalState}) {
            const loadLimit = LocalState.get('blog.ListPostsPage.loadLimit');
            LocalState.set('blog.ListPostsPage.loadLimit', loadLimit + Const.listPostsPageLoadLimitStep);
        },

        setListPostsPageScrollTop({LocalState}, scrollTop) {
            LocalState.set('blog.ListPostsPage.scrollTop', scrollTop)
        },

        resetListPostsPageScrollTop({LocalState}, scrollTop) {
            LocalState.delete('blog.ListPostsPage.scrollTop')
        },

        resetBlogAdminPageLoadLimit({LocalState}) {
            LocalState.set('blog.BlogAdminPage.loadLimit', Const.blogAdminPageLoadLimitStep);
        },

        incBlogAdminPageLoadLimit({LocalState}) {
            const loadLimit = LocalState.get('blog.BlogAdminPage.loadLimit');
            LocalState.set('blog.BlogAdminPage.loadLimit', loadLimit + Const.blogAdminPageLoadLimitStep);
        },

        setBlogAdminPageScrollTop({LocalState}, scrollTop) {
            LocalState.set('blog.BlogAdminPage.scrollTop', scrollTop)
        },

        resetBlogAdminPageScrollTop({LocalState}, scrollTop) {
            LocalState.delete('blog.BlogAdminPage.scrollTop')
        }
    }
};