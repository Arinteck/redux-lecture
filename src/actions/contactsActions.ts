import {Action, Dispatch} from "redux";
import {IContact} from "../typings/contact";
import axios from "axios";

export const FETCH_CONTACTS = 'FETCH_CONTACTS';
export type FetchContactsAction = Action<typeof FETCH_CONTACTS>;
export  function fetchContacts(): FetchContactsAction {
    return {
        type: FETCH_CONTACTS
    }
}

export function getContacts(): (dispatch: Dispatch<Action>) => Promise<void>  {
    return async (dispatch: Dispatch<Action>) => {
        dispatch(fetchContacts());

        const res = await axios.get('/contacts');

        if (res.status === 200) {
            dispatch(fetchContactsSuccess({ contacts: res.data }));
        }
    }
}

export const FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS';
export interface IFetchContactsSuccessPayload {
    contacts: IContact[];
}
export type FetchContactsSuccessAction = Action<typeof FETCH_CONTACTS_SUCCESS> & IFetchContactsSuccessPayload;
export function fetchContactsSuccess(params: IFetchContactsSuccessPayload): FetchContactsSuccessAction {
    return {
        type: FETCH_CONTACTS_SUCCESS,
        ...params
    }
}


export function addContact(contact: IContact): (dispatch: Dispatch<Action>) => Promise<void>  {
    return async (dispatch: Dispatch<Action>) => {
        const res = await axios.post('/contacts', { contact });
        if (res.status === 200 && res.data) {
            dispatch(addContactSuccess({ contact }));
        }
    }
}

export const ADD_CONTACT_SUCCESS = 'ADD_CONTACT_SUCCESS';
export interface IAddContactSuccessPayload {
    contact: IContact;
}
export type AddContactSuccessAction = Action<typeof ADD_CONTACT_SUCCESS> & IAddContactSuccessPayload;
export function addContactSuccess(params: IAddContactSuccessPayload): AddContactSuccessAction {
    return {
        type: ADD_CONTACT_SUCCESS,
        ...params
    }
}

export type ContactsAction = FetchContactsAction
    | FetchContactsSuccessAction
    | AddContactSuccessAction;