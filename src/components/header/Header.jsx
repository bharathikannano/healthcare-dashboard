import React from 'react';
import TestCare from '../../assets/TestCare.svg';
import profileImage from '../../assets/profileImage.png';
import settings from './../../assets/icons/settings.svg';
import home from './../../assets/icons/home.svg';
import group from './../../assets/icons/group.svg';
import calendar from './../../assets/icons/calendar.svg';
import credit_card from './../../assets/icons/credit_card.svg';
import chat_bubble from './../../assets/icons/chat_bubble.svg';
import './Header.css';

const Header = () => {
return(
    <>
    <header className="navbar">
        <div className="navbar-left">
        <div className="logo">
            <img src={TestCare} alt="Tech.Care Logo" />
        </div>
        <div className="navbar-item"><img src={home} alt="home" />Overview</div>
        <div className="navbar-item active"><img src={group} alt="group" />Patients</div>
        <div className="navbar-item"><img src={calendar} alt="calendar" />Schedule</div>
        <div className="navbar-item"><img src={chat_bubble} alt="chat_bubble" />Message</div>
        <div className="navbar-item"><img src={credit_card} alt="credit_card" />Transactions</div>
        </div>
        <div className="navbar-right">
        <div className="profile">
            <img src={profileImage} alt="Dr. Jose Simmons" />
            <div className="profile-info">
            <span>Dr. Jose Simmons</span>
            <span>General Practitioner</span>
            </div>
        </div>
        <div className="vl"></div>
        <div className="settings-icon"><img src={settings} alt="settings" /></div>
        <div className="more-options">⋮</div>
        </div>
    </header>
    </>
)
};

export default Header;


