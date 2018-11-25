import { Action } from "redux";
import { IContact } from "../typings/contact";

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

export type ContactsAction =
    AddContactAction
    | FetchContactsAction
    | FetchContactsSuccessAction
    | AddContactSuccessAction;