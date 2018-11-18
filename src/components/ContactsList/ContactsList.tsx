import * as React from 'react';
import { IContact } from "../../typings/contact";
import ContactsListItem from "../ContactsListItem/ContactsListItem";
import './ContactsList.css';

export interface IContactsListProps {
    contacts: IContact[];
}

export default class ContactsList extends React.Component<IContactsListProps> {
    public render() {
        const { contacts } = this.props;
        return (
            <div className="contacts-list">
                {contacts.map((contact: IContact) =>
                    <ContactsListItem key={contact.phone} contact={contact}/>
                )}
            </div>
        );
    }
}
