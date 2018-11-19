import * as React from "react";
import { IContact } from "../../typings/contact";
import axios from "axios";
import AppScreen from "../../components/AppScreen/AppScreen";

export interface IAppDataSourceContainerProps {
    contacts: IContact[];
    isLoading: boolean;
    addContact: (contact: IContact) => void;
    fetchContacts: () => void;
    onContactsFetched: (contacts: IContact[]) => void;
}


export class AppDataSource extends React.Component<IAppDataSourceContainerProps, {}> {
    async getContacts() {
        this.props.fetchContacts();

        const res = await axios.get('/contacts');

        if (res.status === 200) {
            this.props.onContactsFetched(res.data);
        }
    }

    async postContact(contact: IContact) {
        const res = await axios.post('/contacts', { contact });
        if (res.status === 200 && res.data) {
            this.props.addContact(contact);
        }
    }

    componentDidMount() {
        this.getContacts();
    }

    render() {
        const { contacts, isLoading } = this.props;

        return (
            <AppScreen
                isLoading={isLoading}
                contacts={contacts}
                onAddItem={this.handleAddItem}
            />
        );
    }

    private handleAddItem = (contact: IContact) => {
        this.postContact(contact);
    }
}
