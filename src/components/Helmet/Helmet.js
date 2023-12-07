import React from 'react';

const Helmet = (props) => {

    document.title = 'Focus Project - ' + props.title

    return (
        <div>
            {props.children}
        </div>
    );
};

export default Helmet;