import * as React from "react";
import { IContact } from "../../typings/contact";
import AppScreen from "../../components/AppScreen/AppScreen";

export interface IAppDataSourceContainerProps {
    contacts: IContact[];
    isLoading: boolean;
    fetchContacts: () => void,
    addContact: (contact: IContact) => void,
}

export class AppDataSource extends React.Component<IAppDataSourceContainerProps, {}> {
    componentDidMount() {
        this.props.fetchContacts();
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
        this.props.addContact(contact);
    }
}
