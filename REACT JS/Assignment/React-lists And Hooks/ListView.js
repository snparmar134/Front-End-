// ListView.js

import React from 'react';

const ListView = ({ items }) => {
    return (
        <div>
            <h2>List View</h2>
            <ul>
                {items.map((element, index) => (
                    <li key={index}>{element}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListView;
