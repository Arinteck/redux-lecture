import * as React from 'react';
import { IContact } from "../../typings/contact";
import AppDataSourceContainer from "../../containers/AppDataSourceContainer/AppDataSourceContainer";

interface IAppState {
    contacts: IContact[];
}

export default class App extends React.Component<{}, IAppState> {
    public render() {
        return (
            <AppDataSourceContainer />
        );
    }
}

