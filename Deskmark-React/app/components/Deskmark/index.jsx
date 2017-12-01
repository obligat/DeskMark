
import './style.scss';
import React from 'react';
import uuid from 'uuid';

import CreateBar from '../CreateBar';
import List from '../List';
import ItemEditor from '../ItemEditor';
import ItemShowLayer from '../ItemShowLayer';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            selectedId: null,
            editing: false
        };

    }

    createItem() {
        this.setState({
            selectedId: null,
            editing: true,
        })
    }

    selectItem(id) {
        if (id === this.state.selectedId) {
            return;
        }
        this.setState({
            selectedId: id,
            editing: false,
        })
    }

    saveItem(item) {
        let items = this.state.items;

        if (!item.id) {
            Object.assign(item, {
                id: uuid.v4(),
                time: new Date().getTime()
            });
            items.push(item);
        } else {
            items = items.map(
                exist => (
                    exist.id === item.id ? Object.assign(exist, item) : exist
                )
            );
        }
        this.setState({
            items,
            selectedId: item.id,
            editing: false,
        });
    }

    cancelEdit() {
        this.setState({editing: false});
    }

    editItem(id) {
        this.setState({
            selectedId: id,
            editing: true,
        });
    }

    deleteItem(id) {
        if (!id) {
            return;
        }

        this.setState({
            items: this.state.items.filter(
                result => result.id !== id
            ),
        });
    }

    render() {
        const {items, selectedId, editing} = this.state;
        const selected = selectedId && items.find(item => item.id === selectedId);

        const mainPart = editing ?
            (<ItemEditor
                item={selected}
                onSave={this.saveItem.bind(this)}
                onCancel={this.cancelEdit.bind(this)}/>) :
            ( <ItemShowLayer
                item={selected}
                onEdit={this.editItem.bind(this)}
                onDelete={this.deleteItem.bind(this)}
            />);
        return (
            <section className="deskmark-component">
                <nav className="navbar navbar-fixed-top bg-info">
                    <a className="navbar-brand"> DeskMark App </a>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 list-group">
                            <CreateBar onClick={this.createItem.bind(this)}/>
                            <List items={this.state.items} onSelect={this.selectItem.bind(this)}/>
                        </div>
                        {mainPart}
                    </div>
                </div>
            </section>);
    }
}