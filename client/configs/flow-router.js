import {FlowRouter} from 'meteor/kadira:flow-router';
import LocalState from './local-state';

FlowRouter.triggers.enter([function (context) {
    LocalState.delete('subTitle');
}]);

export default FlowRouter;