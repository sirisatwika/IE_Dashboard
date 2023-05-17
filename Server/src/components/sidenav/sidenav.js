import React from "react";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { useProSidebar } from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import DashboardIcon from '@mui/icons-material/Dashboard';
// import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
// import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
// import UpdateIcon from '@mui/icons-material/Update';
// import SyncIcon from '@mui/icons-material/Sync';
import StorageIcon from '@mui/icons-material/Storage';
import SettingsIcon from '@mui/icons-material/Settings';
import PieChartIcon from '@mui/icons-material/PieChart';
import GppGoodIcon from '@mui/icons-material/GppGood';
import MonitorIcon from '@mui/icons-material/Monitor';
// import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
// import Avatar from '@mui/material/Avatar';
// import Badge from '@mui/material/Badge';
// import { styled } from '@mui/material/styles';
import '../sidenav/sidenav.css';



// const StyledBadge = styled(Badge)(({ theme }) => ({
//     '& .MuiBadge-badge': {
//         backgroundColor: '#44b700',
//         color: '#44b700',
//         boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
//         '&::after': {
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             borderRadius: '50%',
//             border: '1px solid currentColor',
//             content: '""',
//         },
//     },
// }));


function SideNav() {
    const { collapseSidebar } = useProSidebar();


    return (
        <React.Fragment>
            <div className="navmenus">
                <Sidebar breakPoint="md" backgroundColor="#fff">
                    <div className="sidebar-logo">
                        <img src={require("../../assets/ltts_logo.png")} alt="Logo" className='img-fluid' />
                        <span onClick={() => collapseSidebar()}>
                            <MenuOpenIcon />
                        </span>
                    </div>

                    <Menu className="sidemenu">
                        {/* <div className="userAvatar">
                            <div className="avatar">
                                <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
                                    <Avatar alt="User Avatar" src={require("../../assets/face.jpg")} />
                                </StyledBadge>
                            </div>
                            <div className="avatarName">
                                <h2>Username</h2>
                                <span>UI Designer</span>
                            </div>
                        </div> */}
                        <NavLink to="/dashboard">
                            <MenuItem icon={<DashboardIcon />}>Discovery</MenuItem>
                        </NavLink>
                        <NavLink to="/configuration">
                            <MenuItem icon={<SettingsIcon />}>Configuration & Management</MenuItem>
                        </NavLink>
                        {/* <NavLink to="/deviceconfig">
                        <Menu>
                            <SubMenu label="Device Configuration" icon={<DevicesOtherIcon />}>
                                <MenuItem> Device -01 </MenuItem>
                                <MenuItem>Device -02</MenuItem>
                            </SubMenu>
                        </Menu>
                        </NavLink> */}
                        <NavLink to="/datacollection">
                            <MenuItem icon={<StorageIcon />}>Data Collection</MenuItem>
                        </NavLink>
                        <NavLink to="/analytics">
                            <MenuItem icon={<PieChartIcon />}>Analytics</MenuItem>
                        </NavLink>
                        <NavLink to="/security">
                            <MenuItem icon={<GppGoodIcon />}>Security</MenuItem>
                        </NavLink>
                        <NavLink to="/monitoring">
                            <MenuItem icon={<MonitorIcon />}>Monitoring</MenuItem>
                        </NavLink>
                    </Menu>
                </Sidebar>
            </div>
        </React.Fragment>
    );
}
export default SideNav;