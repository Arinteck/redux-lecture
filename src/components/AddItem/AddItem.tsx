import * as React from 'react';
import { IContact } from "../../typings/contact";
import './AddItem.css';

export interface IAddItemProps {
    onAddItem: (contact: IContact) => void;
}
export interface IAddItemState {
    name: string;
    phone: string
}

export default class AddItem extends React.Component<IAddItemProps, IAddItemState> {
    constructor(props: IAddItemProps) {
        super(props);

        this.state = {
            name: '',
            phone: ''
        };
    }

    public render() {
        const { name, phone } = this.state;
        return (
            <div className="add-item">
                <input
                    autoComplete="off"
                    placeholder="Имя"
                    className="add-item__input"
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleNameChange}
                />
                <input
                    autoComplete="off"
                    placeholder="Телефон"
                    className="add-item__input"
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={this.handlePhoneChange}
                />
                <button
                    onClick={this.handleClick}
                >
                    Добавить
                </button>
            </div>
        );
    }

    private handleNameChange = (evt: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            name: evt.currentTarget.value
        });
    }

    private handlePhoneChange = (evt: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            phone: evt.currentTarget.value
        });
    }

    private handleClick = () => {
        const { name, phone } = this.state;

        this.props.onAddItem({ name, phone });

        this.setState({
            name: '',
            phone: ''
        });
    }
}
