import {
    ADD_CONTACT, AddContactAction, addContactSuccess, ContactsAction, FETCH_CONTACTS,
    fetchContactsSuccess
} from "../actions/contactsActions";
import { all, call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

export function* fetchContacts() {
    const res = yield call(axios.get, '/contacts');

    if (res.status === 200) {
        yield put(fetchContactsSuccess({contacts: res.data}));
    }
}

export function* addContact({ contact }: AddContactAction) {
    const res = yield call(axios.post, '/contacts', { contact });
    if (res.status === 200 && res.data) {
        yield put(addContactSuccess({ contact }));
    }
}

function* watchFetchContacts() {
    yield takeEvery<ContactsAction>(
        FETCH_CONTACTS,
        fetchContacts
    );
}

function* watchAddContact() {
    yield takeEvery<ContactsAction>(
        ADD_CONTACT,
        addContact
    );
}

export default function* contactsSaga() {
    yield all([
        watchFetchContacts(),
        watchAddContact()
    ]);
}