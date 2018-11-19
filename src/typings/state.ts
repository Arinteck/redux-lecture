import { IContact } from "./contact";

export interface IContactsState {
    isLoading: boolean;
    list: IContact[]
}

export interface IState {
    contacts: IContactsState;
}