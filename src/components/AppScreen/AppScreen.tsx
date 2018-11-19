import * as React from 'react';
import ContactsList from "../ContactsList/ContactsList";
import AddItem from "../AddItem/AddItem";
import { IContact } from "../../typings/contact";

interface IAppScreenProps {
    contacts: IContact[];
    isLoading: boolean;
    onAddItem: (contact: IContact) => void;
}

export default class AppScreen extends React.Component<IAppScreenProps, {}> {
    render() {
        const { contacts, onAddItem, isLoading } = this.props;
        return (
            <div>
                <AddItem onAddItem={onAddItem} />
                {isLoading ? 'Loading...' :
                    <ContactsList contacts={contacts}/>
                }
            </div>
        );
    }
}
