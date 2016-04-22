import Const from '../constants';

export default function ({LocalState}) {
    // ListPosts页面文章加载数目
    // blog.ListPostsPage.loadLimit
    LocalState.extendSchema({
        'blog.ListPostsPage.loadLimit': Number
    });
    LocalState.set('blog.ListPostsPage.loadLimit', Const.listPostsPageLoadLimitStep);

    // ListPosts页面初始滚动位置
    // blog.ListPostsPage.scrollTop
    LocalState.extendSchema({
        'blog.ListPostsPage.scrollTop': Number
    });

    // BlogAdmin页面文章加载数目
    // blog.BlogAdminPage.loadLimit
    LocalState.extendSchema({
        'blog.BlogAdminPage.loadLimit': Number
    });
    LocalState.set('blog.BlogAdminPage.loadLimit', Const.blogAdminPageLoadLimitStep);

    // BlogAdmin页面初始滚动位置
    // blog.BlogAdminPage.scrollTop
    LocalState.extendSchema({
        'blog.BlogAdminPage.scrollTop': Number
    });
}