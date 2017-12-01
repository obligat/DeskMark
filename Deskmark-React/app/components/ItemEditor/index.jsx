import './style.scss';

import React from 'react';

export default class ItemEditor extends React.Component {
    render() {
        const {onSave, onCancel} = this.props;

        const item = this.props.item || {
            title: '',
            content: '',
        };

        let saveText = item.id ? 'Save' : 'Create';

        let save = () => {
            let title = this.refs.title.value;
            let content = this.refs.content.value;

            if (!title) {
                return;
            }

            Object.assign(item, {
                title, content
            });
            onSave(item)
        };

        return (
            <div className="col-md-8 item-editor-component">
                <div className="control-area">
                    <button onClick={save} className="btn btn-success">{saveText}</button>
                    <button onClick={onCancel} className="btn secondary">Cancel</button>
                </div>
                <div className="edit-area">
                    <input ref="title" placeholder="please input title" defaultValue={item.title}/>
                    <textarea ref="content" placeholder="please input content" defaultValue={item.content}/>
                </div>
            </div>);
    }
}