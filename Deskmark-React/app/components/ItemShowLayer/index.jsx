
import './style.scss';

import React from 'react';
import marked from 'marked';


export  default function ItemShowLayer({ item, onEdit, onDelete }) {
    if (!item || !item.id) {
        return (
            <div className="col-md-8 item-show-layer-component">
                <div className="no-select">please choose left article.</div>
            </div>
        );
    }

    const content = marked(item.content);

    return (
        <div className="col-md-8 item-show-layer-component">
            <div className="control-area">
                <button onClick={() => onEdit(item.id)} className="btn btn-primary"> Edit </button>
                <button onClick={() => onDelete(item.id)} className="btn btn-danger">Delete</button>
            </div>
            <h2>{item.title}</h2>
            <div className="item-text">
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    );
}


