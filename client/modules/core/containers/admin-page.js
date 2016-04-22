import {composeWithTracker, composeAll, useDeps} from 'mantra-core';
import AdminPage from '../components/admin-page';
import _ from 'lodash';
import adminOnly from '../high-order/admin-only';
import Const from '../constants';

export const composer = ({context, actions}, onData)=> {
    const {Meteor, Collections, Toast, FlowRouter} = context();
    const {AppState, AppData} = Collections;
    const stateSub = Meteor.subscribe('AppState');
    const dataSub = Meteor.subscribe('AppData', {
        keys: [
            'indexPageTitle',
            'indexPageCarousel',
            'indexPageSectionA',
            'indexPageSectionB'
        ]
    });

    function getAppState(key, defaultValue) {
        return _.get(AppState.findOne({_id: key}), 'value', defaultValue);
    }

    function getAppData(key, defaultValue) {
        return _.get(AppData.findOne({_id: key}), 'value', defaultValue);
    }

    function parseJSON(value, callback) {
        try {
            const parsed = JSON.parse(value);
            callback(parsed);
        }
        catch (err) {
            Toast.error('JSON格式错误。');
        }
    }

    function getItemValue(item) {
        let value;
        if (item.source === 'AppState') {
            value = getAppState(item.key);
        }
        else if (item.source === 'AppData') {
            value = getAppData(item.key)
        }
        else throw new Error('wrong source');

        if (item.type === 'array' || item.type === 'object') {
            value = JSON.stringify(value, null, 4);
        }

        return value;
    }

    function updateItem(item, key, value) {
        Meteor.call(`core.set${item.source}`, {key, value}, (err)=> {
            if (err) {
                if (err.error === 'no-permission') {
                    Toast.error('权限不足。');
                }
                else {
                    console.error(err);
                    Toast.error('更新失败。');
                }
            }
            else {
                Toast.success('更新成功。', {timeout: 'flash'})
            }
        })
    }

    if (stateSub.ready() && dataSub.ready()) {
        onData(null, {
            links: [
                {text: '管理文章', href: FlowRouter.path('blog.admin')}
            ],
            sections: _(Const.appSettingsSchema).groupBy('class').map((items, clazz)=> {
                return {
                    name: clazz,
                    items: _.map(items, (item)=> {
                        return {
                            name: item.label,
                            type: item.type,
                            value: getItemValue(item),
                            onUpdate: (value)=> {
                                if (item.type === 'object' || item.type === 'array') {
                                    parseJSON(value, (value)=>updateItem(item, item.key, value));
                                }
                                else updateItem(item, item.key, value)
                            }
                        }
                    })
                }
            }).value()
        });
    }
    else {
        onData();
    }
};

export default composeAll(
    composeWithTracker(composer),
    adminOnly,
    useDeps()
)(AdminPage)