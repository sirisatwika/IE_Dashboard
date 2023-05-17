import React from "react";
import { useProSidebar } from 'react-pro-sidebar';
import '../topnav/topnav.css';
import { Dropdown } from 'react-bootstrap';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
// import { authProvider } from '../../AuthProvider';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { Menu } from '@mui/material';
// import { MenuItem } from '@mui/material';



function TopNav() {

    const { toggleSidebar, broken } = useProSidebar();



    return (
        <React.Fragment>
            <div className="topnavigation">
                {broken ? (<MenuOpenIcon className="mobile-menu" onClick={() => toggleSidebar()} />) : null}
                <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 d-flex flex-row">
                    {/* <div className="page_title">
                        <h1 className="topnavtitle">Dashboard</h1>
                    </div> */}
                    <div className="navbar-menu-wrapper d-flex align-items-stretch">
                        <ul className="navbar-nav navbar-nav-right">
                            <li className="nav-item nav-profile">
                                <Dropdown>
                                    <Dropdown.Toggle className="nav-link count-indicator">
                                        <NotificationsIcon />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="navbar-dropdown">
                                        <Dropdown.Item hre="#">
                                            <h4>Temperature alert-above threshold</h4>
                                        </Dropdown.Item>
                                        <Dropdown.Item hre="#">
                                            <h4>Device update: exampleedevice-POST</h4>
                                        </Dropdown.Item>
                                        <Dropdown.Item hre="#">
                                            <h4>Device update: testdevice-DELETE</h4>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li className="nav-item nav-profile">
                                <Dropdown>
                                    <Dropdown.Toggle className="nav-link count-indicator">
                                        <EmailIcon />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="navbar-dropdown">
                                        <Dropdown.Item hre="#">
                                            <h4>Temperature alert-above threshold</h4>
                                        </Dropdown.Item>
                                        <Dropdown.Item hre="#">
                                            <h4>Device update: exampleedevice-POST</h4>
                                        </Dropdown.Item>
                                        <Dropdown.Item hre="#">
                                            <h4>Device update: testdevice-DELETE</h4>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li className="nav-item nav-profile">
                                <Dropdown>
                                    <Dropdown.Toggle className="nav-link">
                                        User Name  <img src={require("../../assets/face.jpg")} alt="user" className='img-fluid user-icons' />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="navbar-dropdown">
                                        <Dropdown.Item href="#">
                                            My Profile <PersonPinIcon />
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#">
                                            Settings <SettingsSuggestIcon />
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#" >
                                                Signout < LogoutOutlinedIcon />
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    );
}
export default TopNav;