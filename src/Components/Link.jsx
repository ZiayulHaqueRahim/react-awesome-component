import React from 'react';

const Link = ({footerData}) => {
    return (
        <li className='mr-5'>
            <a href={footerData.path}>{footerData.name}</a>
        </li>
    );
};

export default Link;