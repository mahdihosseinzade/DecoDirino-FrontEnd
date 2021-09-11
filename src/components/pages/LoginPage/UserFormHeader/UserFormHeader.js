import React from 'react';
import _logo from '../../../../assets/images/Logo-site.png';
import './UserFormHeader.scss';

function UserFormHeader() {
    return (
        <div className="UserFormHeader">
            <img src={_logo} alt="DecoDirino" />
            {' '}
            {/*<h3> DecoDirino</h3>*/}
        </div>

    );
}
export default UserFormHeader;
