import {addContact, fetchContacts} from "../../actions/contactsActions";
import {IContact} from "../../typings/contact";
import {IState} from "../../typings/state";
import {AppDataSource} from "../AppDataSourceContainer/AppDataSourceContainer";
import {Action, Dispatch} from "redux";
import {connect} from "react-redux";

interface IStateProps {
    contacts: IContact[];
    isLoading: boolean;
}

interface IDispatchProps {
    fetchContacts: () => void,
    addContact: (contact: IContact) => void
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
    addContact: (contact: IContact) => dispatch(addContact({ contact })),
    fetchContacts: () => dispatch(fetchContacts())
});

const AppScreenContainer = connect<
    IStateProps,
    IDispatchProps,
    {}
    >(mapStateToProps, mapDispatchToProps)(AppDataSource);
export default AppScreenContainer;