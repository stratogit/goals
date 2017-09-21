import {combineReducers} from 'redux';
import user from './reducer_user';
import goals from './reducer_goals';
import deleteGoals from './reducer_deletedgoals';

export default combineReducers ({
    user,
    goals,
    deleteGoals
})