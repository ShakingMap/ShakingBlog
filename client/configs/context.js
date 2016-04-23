import * as Collections from '../../lib/collections';
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import FlowRouter from './flow-router';
import {ActiveRoute} from 'meteor/zimme:active-route';
import {Tracker} from 'meteor/tracker';
import {DocHead} from 'meteor/kadira:dochead';
import {Roles} from 'meteor/alanning:roles';
import AppRoles from '../../lib/app-roles';
import Toast from '../lib/toast';
import LocalState from './local-state';

export default function () {
    return {
        Meteor,
        Accounts,
        FlowRouter,
        ActiveRoute,
        Collections,
        LocalState,
        Tracker,
        DocHead,
        Roles,
        AppRoles,
        Toast
    };
}
