import {Mongo} from 'meteor/mongo';
import {Collection2} from 'meteor/aldeed:collection2';

/**
 * 应用状态，在客户端保持实时同步，仅维持少量数据
 * 所有数据以{_id, value}的形式保存
 */
export const AppState = new Mongo.Collection('app_state');

/**
 * 应用数据，客户端需要时拉取，可以保存较大量的数据
 * 所有数据以{_id, value}的形式保存
 */
export const AppData = new Mongo.Collection('app_data');

export const Posts = new Mongo.Collection('posts');
Posts.attachSchema(new SimpleSchema({
    creatorId: {
        type: String,
        index: true
    },

    createdAt: {
        type: Date,
        index: true
    },

    updatedAt: {
        type: Date,
        index: true
    },

    title: {
        type: String,
        index: true
    },

    published: {
        optional: true,
        type: Boolean,
        index: true
    },

    summary: {
        optional: true,
        type: String
    },

    content: {
        type: String
    }
}));