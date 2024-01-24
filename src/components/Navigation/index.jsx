import React from 'react';

import Logo from '../../static/images/logo.png'

import style from './style.module.scss';

const Navigation = () => {
    return (
        <div className={style.headerWrapper}>
            <div className={style.contentWrapper}>
                <div className={style.logoImage}>
                    <img src={Logo} alt="logo" />
                </div>
                <div className={style.toolbar}>
                    <button className={style.buttonLogin}>Login</button>
                    <button className={style.buttonRegis}>Register</button>
                </div>
            </div>

        </div>
    );
};

export default Navigation