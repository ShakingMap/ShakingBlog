import React from 'react';
import {Button} from 'react-bootstrap';
import Inview from '../../core/components/inview';

class Component extends React.Component {
    render() {
        const {state, onLoadMore, loadMoreOnInview, wrapperProps, ...otherProps} = this.props;
        const disabled = state !== 'ready';
        const text = this.getText(state);
        const onInview = loadMoreOnInview ? this.onInview.bind(this) : null;

        return <Inview onInview={onInview} {...wrapperProps}>
            <Button disabled={disabled} onClick={()=>onLoadMore()} {...otherProps}>{text}</Button>
        </Inview>
    }

    getText(state) {
        return state === 'ready' ? '加载更多'
            : state === 'loading' ? '加载中…'
            : state === 'noMore' ? '没有更多'
            : '错误状态'
    }

    onInview(event, isInview) {
        if (isInview && this.props.state === 'ready') {
            this.props.onLoadMore();
        }
    }
}

Component.propTypes = {
    state: React.PropTypes.oneOf(['ready', 'loading', 'noMore']),

    // func()
    onLoadMore: React.PropTypes.func,

    // 当按钮从视口外进入视口内，则触发load more事件
    loadMoreOnInview: React.PropTypes.bool,

    wrapperProps: React.PropTypes.object
};

export default Component;

/**
 * 辅助计算当前状态
 * @param ready - 数据是否加载完成
 * @param limit - 当前最大加载数限制
 * @param count - 当前实际加载数
 * @returns {string}
 */
export function getState(ready, limit, count) {
    return !ready ? 'loading' :
        limit > count ? 'noMore' : 'ready';
}