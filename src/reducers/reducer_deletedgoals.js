import { SET_DELETED } from '../constants';

export default (state = [],action) => {
    switch (action.type) {
        case SET_DELETED:
            const { deleteGoals } = action;
            return deleteGoals;
        default:
            return state;

    }
}