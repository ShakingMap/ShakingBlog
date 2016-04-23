import Const from './constants'

export default {
    core: {
        setSubTitle({LocalState}, subTitle) {
            LocalState.set('subTitle', subTitle);
        }
    }
};