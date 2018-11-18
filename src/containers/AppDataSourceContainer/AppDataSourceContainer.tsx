import * as React from "react";
import { IContact } from "../../typings/contact";
import axios from "axios";
import AppScreen from "../../components/AppScreen/AppScreen";

export interface IAppDataSourceContainerState {
    contacts: IContact[];
}

export default class AppDataSourceContainer extends React.Component<{}, IAppDataSourceContainerState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            contacts: []
        };
    }

    async getContacts() {
        const res = await axios.get('/contacts');

        if (res.status === 200) {
            this.setState({
                contacts: res.data
            });
        }
    }

    async postContact(contact: IContact) {
        const res = await axios.post('/contacts', { contact });
        if (res.status === 200 && res.data) {
            this.setState({
                contacts: [...this.state.contacts, contact]
            });
        }

    }

    componentDidMount() {
        this.getContacts();
    }

    render() {
        const { contacts } = this.state;

        return (
            <AppScreen
                contacts={contacts}
                onAddItem={this.handleAddItem}
            />
        );
    }

    private handleAddItem = (contact: IContact) => {
        this.postContact(contact);
    }
}