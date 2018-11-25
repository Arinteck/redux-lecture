import * as React from "react";
import { IContact } from "../../typings/contact";
import AppScreen from "../../components/AppScreen/AppScreen";
import { Action, Dispatch } from "redux";

export interface IAppDataSourceContainerProps {
    contacts: IContact[];
    isLoading: boolean;
    actions: {
        getContacts: () => (dispatch: Dispatch<Action>) => Promise<void>,
        addContact: (contact: IContact) => (dispatch: Dispatch<Action>) => Promise<void>,
    }
}

export class AppDataSource extends React.Component<IAppDataSourceContainerProps, {}> {
    componentDidMount() {
        this.props.actions.getContacts();
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
        this.props.actions.addContact(contact);
    }
}
