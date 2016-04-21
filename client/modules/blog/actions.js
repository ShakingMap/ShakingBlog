export default {
    blog: {
        resetListPostsPageLoadLimit({LocalState, Constants}) {
            LocalState.set('blog.ListPostsPage.loadLimit', Constants.blog.listPostsPageLoadLimitStep);
        },

        incListPostsPageLoadLimit({LocalState, Constants}) {
            const loadLimit = LocalState.get('blog.ListPostsPage.loadLimit');
            LocalState.set('blog.ListPostsPage.loadLimit', loadLimit + Constants.blog.listPostsPageLoadLimitStep);
        },

        setListPostsPageScrollTop({LocalState}, scrollTop) {
            LocalState.set('blog.ListPostsPage.scrollTop', scrollTop)
        },

        resetListPostsPageScrollTop({LocalState}, scrollTop) {
            LocalState.delete('blog.ListPostsPage.scrollTop')
        },

        resetBlogAdminPageLoadLimit({LocalState, Constants}) {
            LocalState.set('blog.BlogAdminPage.loadLimit', Constants.blog.blogAdminPageLoadLimitStep);
        },

        incBlogAdminPageLoadLimit({LocalState, Constants}) {
            const loadLimit = LocalState.get('blog.BlogAdminPage.loadLimit');
            LocalState.set('blog.BlogAdminPage.loadLimit', loadLimit + Constants.blog.blogAdminPageLoadLimitStep);
        },

        setBlogAdminPageScrollTop({LocalState}, scrollTop) {
            LocalState.set('blog.BlogAdminPage.scrollTop', scrollTop)
        },

        resetBlogAdminPageScrollTop({LocalState}, scrollTop) {
            LocalState.delete('blog.BlogAdminPage.scrollTop')
        }
    }
};