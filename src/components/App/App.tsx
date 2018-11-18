import * as React from 'react';
import axios from 'axios';
import ContactsList from "../ContactsList/ContactsList";
import AddItem from "../AddItem/AddItem";
import { IContact } from "../../typings/contact";
import './App.css';

interface IAppState {
    contacts: IContact[];
}

class App extends React.Component<{}, IAppState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            contacts: []
        };
    }

    componentDidMount() {
        this.getContacts();
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

    public render() {
        const { contacts } = this.state;
        return (
            <div>
                <AddItem onAddItem={this.handleAddItem} />
                <ContactsList contacts={contacts} />
            </div>
        );
    }

    private handleAddItem = (contact: IContact) => {
        this.postContact(contact);
    }
}

export default App;
