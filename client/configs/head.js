/**
 * 配置并自动更新html head
 */

import {Tracker} from 'meteor/tracker';
import {DocHead} from 'meteor/kadira:dochead';
import {AppState} from '/lib/collections';
import _ from 'lodash';

export default function () {
    Tracker.autorun(()=> {
        DocHead.removeDocHeadAddedTags();
        DocHead.setTitle(getAppState('title'));
        _.forEach(getAppState('metas'), (meta)=> {
            DocHead.addMeta(meta);
        });
        _.forEach(getAppState('links'), (link)=>{
            DocHead.addLink(link);
        })
    });
}

function getAppState(id) {
    const doc = AppState.findOne({_id: id});
    return doc && doc.value;
}