import React from 'react';
import classes from './header.scss';
import { APP_ROUTES } from '../../utils/appRoutes';

function Header(){
    const handleHref = (pathname) => {
        if(pathname !== window.location.pathname || window.location.hash)
            window.location.href = window.location.origin + pathname;
    };
    return(
        <div className={classes.headerContainer}>
           
                <button onClick={() => handleHref( APP_ROUTES.HOME )}
                    className={classes.headerBtn} title='Home' > Home </button>
           
                <button onClick={() => handleHref( APP_ROUTES.PROFESSION )}
                    className={classes.headerBtn} title='Professions' > Professions </button>
            
                <button onClick={() => handleHref( APP_ROUTES.COUNSELLORS )}
                    className={classes.headerBtn} title='Counsellors' > Counsellors </button>
            
        </div>
    );
}

export default Header;