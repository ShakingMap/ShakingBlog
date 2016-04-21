import * as Collections from '../../lib/collections';
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {ActiveRoute} from 'meteor/zimme:active-route';
import {Tracker} from 'meteor/tracker';
import {DocHead} from 'meteor/kadira:dochead';
import {Roles} from 'meteor/alanning:roles';
import AppRoles from '../../lib/app-roles';
import Toast from '../lib/toast';
import SchemaReactiveDict from '../lib/schema-reactive-dict';
import LocalStateSchema from './local-state-schema';
import Constants from './constants'

export default function () {
    return {
        Meteor,
        Accounts,
        FlowRouter,
        ActiveRoute,
        Collections,
        Constants: Constants(),
        LocalState: new SchemaReactiveDict(LocalStateSchema()),
        Tracker,
        DocHead,
        Roles,
        AppRoles,
        Toast
    };
}
