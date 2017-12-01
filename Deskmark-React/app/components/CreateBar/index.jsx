import './style.scss';
import React from 'react';



function CreateBar({onClick}) {
    return (
        <a href="#" onClick={onClick} className="list-group-item create-bar-component">
            + Create New Article
        </a>  )
}

export default CreateBar;