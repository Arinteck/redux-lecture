import * as React from 'react';
import { IContact } from "../../typings/contact";
import AppScreenContainer from "../../containers/AppContainer/AppScreenContainer";

interface IAppState {
    contacts: IContact[];
}

export default class App extends React.Component<{}, IAppState> {
    public render() {
        return (
            <AppScreenContainer />
        );
    }
}

