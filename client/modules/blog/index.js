import routes from './routes'
import actions from './actions';
import initLocalState from './configs/local-state';

export default {
    routes,
    actions,
    load(context) {
        initLocalState(context);
    }
}