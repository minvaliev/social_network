import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://tripmydream.cc/travelhub/travel/seo/img/304/28/gallery_1445598267_1918595054_fit.jpg" alt=""/>
            </div>
            <div>
                ava + discription
            </div>
           <MyPosts/>
        </div>
    );
}

export default Profile;