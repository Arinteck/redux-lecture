import { Action } from "redux";
import {IContact} from "../typings/contact";

export const FETCH_CONTACTS = 'FETCH_CONTACTS';
export type FetchContactsAction = Action<typeof FETCH_CONTACTS>;
export  function fetchContacts(): FetchContactsAction {
    return {
        type: FETCH_CONTACTS
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

export const ADD_CONTACT = 'ADD_CONTACT';
export interface IAddContactPayload {
    contact: IContact;
}
export type AddContactAction = Action<typeof ADD_CONTACT> & IAddContactPayload;
export function addContact(params: IAddContactPayload): AddContactAction {
    return {
        type: ADD_CONTACT,
        ...params
    }
}

export type ContactsAction = FetchContactsAction
    | FetchContactsSuccessAction
    | AddContactAction;