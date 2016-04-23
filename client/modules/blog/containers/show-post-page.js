import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import React from 'react';
import ShowPostPage from '../components/show-post-page';
import _ from 'lodash';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.constructor.defaultState;
    }

    componentDidMount() {
        this.loadPost(this.props.postId);
    }

    render() {
        const {context, disqus} = this.props;
        const {post, error, noPost, loading} = this.state;
        const {Collections} = context();
        const AppState = Collections.AppState;

        if (error) {
            return <div>{error}</div>
        }
        else if (noPost) {
            return <div>no post.</div>
        }
        //else if (loading) {
        //    return <div>loading...</div>
        //}
        return <ShowPostPage {...{
            post,
            disqus
        }}/>
    }

    loadPost(postId) {
        const {context, actions} = this.props;
        const {Meteor} = context();
        this.setState({loading: true});
        Meteor.call('posts.get', {id: postId}, (err, post)=> {
            this.setState({loading: false});
            if (err) {
                console.error(err);
                this.setState({error: err});
            }
            else if (!post) {
                this.setState({noPost: true});
            }
            else {
                this.setState({post});
                actions().core.setSubTitle(post.title);
            }
        });
    }
}

Page.propTypes = {
    postId: React.PropTypes.string.isRequired,
    disqus: React.PropTypes.object
};

Page.defaultState = {
    post: {},
    error: null,
    noPost: false,
    loading: false
};

export const composer = function (props, onData) {
    const {AppState} = props.context().Collections;
    onData(null, _.extend({
        disqus: _.get(AppState.findOne({_id: 'disqus'}), 'value')
    }, props));
};

export default composeAll(
    composeWithTracker(composer),
    useDeps()
)(Page)