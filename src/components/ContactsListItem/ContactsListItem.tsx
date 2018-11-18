import * as React from 'react';
import { IContact } from "../../typings/contact";
import './ContactsListItem.css';

export interface IContactsListProps {
    contact: IContact;
}

export default class ContactsListItem extends React.Component<IContactsListProps> {
    public render() {
        const { contact } = this.props;
        return (
            <div className="contact-list-item">
                <span className="contact-list-item__field" >{contact.name}</span>
                <span className="contact-list-item__field" >{contact.phone}</span>
            </div>
        );
    }
}
