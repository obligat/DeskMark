import React from 'react';

export default function ListItem({item, onClick}) {
    let formatTime = 'unknown time';
    if(item.time){
        formatTime = new Date(item.time).toISOString().match(/(\d{4}-\d{2}-\d{2})/)[1];
    }

    return (
        <a className="list-group-item item-component" onClick={onClick}>
            <span className="label label-default label-pill pull-right">
                {formatTime}
            </span>
            <span className="item-title">{item.title}</span>
        </a>
    )
};