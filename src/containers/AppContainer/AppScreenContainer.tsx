import {addContact, getContacts} from "../../actions/contactsActions";
import {IContact} from "../../typings/contact";
import {IState} from "../../typings/state";
import {AppDataSource} from "../AppDataSourceContainer/AppDataSourceContainer";
import {Action, bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";

interface IStateProps {
    contacts: IContact[];
    isLoading: boolean;
}

interface IDispatchProps {
    actions: {
        getContacts: () => (dispatch: Dispatch<Action>) => Promise<void>,
        addContact: (contact: IContact) => (dispatch: Dispatch<Action>) => Promise<void>
    }
}

const mapStateToProps = (state: IState) => {
    const {
        contacts: {
            list, isLoading
        }
    } = state;

    return {
        contacts: list,
        isLoading
    };
}

const mapDispatchToProps = (dispatch: Dispatch<Action>): IDispatchProps => ({
    actions:
        bindActionCreators({ getContacts, addContact }, dispatch),

});

const AppScreenContainer = connect<
    IStateProps,
    IDispatchProps,
    {}
    >(mapStateToProps, mapDispatchToProps)(AppDataSource);
export default AppScreenContainer;