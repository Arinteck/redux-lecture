import {combineReducers} from "redux";
import {IState} from "../typings/state";
import contacts from './contactsReducer';

export default combineReducers<IState>({
    contacts
});