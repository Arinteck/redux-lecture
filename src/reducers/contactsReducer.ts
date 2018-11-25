import { IContactsState } from "../typings/state";
import {
    ADD_CONTACT_SUCCESS, ContactsAction, FETCH_CONTACTS,
    FETCH_CONTACTS_SUCCESS
} from "../actions/contactsActions";

export const contactsInitialState: IContactsState = {
    isLoading: false,
    list: []
};

export default function contacts(
    state: IContactsState = contactsInitialState,
    action: ContactsAction
): IContactsState {
    switch (action.type) {
        case FETCH_CONTACTS:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_CONTACTS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                list: action.contacts
            }
        }
        case ADD_CONTACT_SUCCESS: {
            return {
                ...state,
                list: [...state.list, action.contact]
            }
        }
        default:
            return state;
        }
}