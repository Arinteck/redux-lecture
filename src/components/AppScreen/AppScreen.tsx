import * as React from 'react';
import ContactsList from "../ContactsList/ContactsList";
import AddItem from "../AddItem/AddItem";
import { IContact } from "../../typings/contact";

interface IAppScreenProps {
    contacts: IContact[];
    onAddItem: (contact: IContact) => void;
}

export default class AppScreen extends React.Component<IAppScreenProps, {}> {
    render() {
        const { contacts, onAddItem } = this.props;
        return (
            <div>
                <AddItem onAddItem={onAddItem} />
                <ContactsList contacts={contacts} />
            </div>
        );
    }
}
