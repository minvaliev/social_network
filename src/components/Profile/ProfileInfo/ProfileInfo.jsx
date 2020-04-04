import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://tripmydream.cc/travelhub/travel/seo/img/304/28/gallery_1445598267_1918595054_fit.jpg"
                     alt=""/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + discription
            </div>
        </div>
    );
}

export default ProfileInfo;