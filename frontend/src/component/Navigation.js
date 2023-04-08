
import React, { useState } from 'react'
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TuneTwoToneIcon from '@mui/icons-material/TuneTwoTone';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import styled from 'styled-components';
import { orange } from '@mui/material/colors';

const Navigation= () => {
    

    return (
        <Container className='navbox'>
        <a href="/courses" className="nav-brand"> 
        <img src="../Cipherschools_icon.png" className="nav-logo"  alt="cipherschools-logo" />
            <h1 className="nav-title">CipherSchools</h1>
        </a>
        <div className="nav-space-1"></div>
        <div style={{position: "relative"}}>
            <div className="nav-link-left">
                <ExploreOutlinedIcon  className='browse-icon'/>
                
                <span className="browse-title">Browse</span><svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.08847 6.59357C5.86888 7.37116 7.13117 7.37121 7.91165 6.59369L12.2331 2.28855C12.6563 1.867 12.6565 1.18191 12.2337 0.760065C11.8126 0.339954 11.1309 0.339825 10.7096 0.759775L7.91215 3.5485C7.13155 4.32666 5.86852 4.32659 5.08801 3.54835L2.2909 0.759393C1.86986 0.33958 1.18856 0.339433 0.767341 0.759062C0.344011 1.18079 0.343982 1.86624 0.767277 2.288L5.08847 6.59357Z" fill="#808191"/>
</svg></div>
        </div>
        <div className="nav-space-2"></div>
        <div className="nav-right">
            <div>
                
                <div className="nav-mobile-bar"><span className="nav-search">
                        <div className="search-box">
                        <SearchOutlinedIcon  />
                            <div style={{width: "100%"}}><input type="search" className="search-input-field"
                                    placeholder="Search and Learn" autocomplete="off" spellcheck="false" /></div>
                            <div><TuneTwoToneIcon /></div>
                        </div><button className="nav-search-btn"><svg width="17" height="16" fill="none" viewBox="0 0 20 16" class="nav-search-icon" xmlns="http://www.w3.org/2000/svg" aria-controls="" aria-haspopup="true"><path d="M6 16.0005C4.17526 16.0014 2.58119 14.7673 2.125 13.0005H0V11.0005H2.126C2.64564 8.98794 4.62012 7.70874 6.66928 8.05706C8.71845 8.40537 10.1594 10.2651 9.98486 12.3363C9.81035 14.4075 8.07856 16 6 16.0005ZM6 10.0005C4.9074 10.0016 4.01789 10.8793 4.00223 11.9718C3.98658 13.0643 4.85057 13.9672 5.94269 13.9996C7.03481 14.032 7.95083 13.182 8 12.0905V12.4905V12.0005C8 10.8959 7.10457 10.0005 6 10.0005ZM20 13.0005H11V11.0005H20V13.0005ZM11 8.00049C9.17563 8.00096 7.58209 6.76693 7.126 5.00049H0V3.00049H7.126C7.64564 0.987939 9.62012 -0.291258 11.6693 0.0570554C13.7184 0.405368 15.1594 2.26511 14.9849 4.33633C14.8103 6.40755 13.0786 7.99996 11 8.00049ZM11 2.00049C9.9074 2.0016 9.01789 2.87934 9.00223 3.97183C8.98658 5.06433 9.85056 5.9672 10.9427 5.99961C12.0348 6.03203 12.9508 5.18199 13 4.09049V4.49049V4.00049C13 2.89592 12.1046 2.00049 11 2.00049ZM20 5.00049H16V3.00049H20V5.00049Z" fill="var(--text-color)"></path></svg></button>
                    </span></div>
            </div>
            <div className="nav-notification" id="nav-notification">
                <div className="nav-notification-desk-path"><NotificationsNoneOutlinedIcon /><span className="nav-ntf-count">0</span></div>
                <div className="nav-notification-mobile-path"><svg width="15" height="19" fill="none" viewBox="0 0 20 25"
                        xmlns="http://www.w3.org/2000/svg" className="nav-notification-icon">
                        <path
                            d="M19.0724 18.9615L17.4186 17.3077V10.8974C17.4186 6.96154 15.316 3.66667 11.6493 2.79487V1.92308C11.6493 0.858974 10.7904 0 9.72625 0C8.66215 0 7.80318 0.858974 7.80318 1.92308V2.79487C4.12369 3.66667 2.03395 6.94872 2.03395 10.8974V17.3077L0.380099 18.9615C-0.427593 19.7692 0.136509 21.1538 1.27753 21.1538H18.1622C19.316 21.1538 19.8801 19.7692 19.0724 18.9615ZM14.8545 18.5897H4.59805V10.8974C4.59805 7.71795 6.53395 5.12821 9.72625 5.12821C12.9186 5.12821 14.8545 7.71795 14.8545 10.8974V18.5897ZM9.72625 25C11.1365 25 12.2904 23.8462 12.2904 22.4359H7.16215C7.16215 23.1159 7.4323 23.7681 7.91316 24.249C8.39402 24.7299 9.04621 25 9.72625 25Z"
                            fill="var(--text-color)"></path>
                    </svg></div>
            </div>
            <div className="nav-avatar">
                <div className="MuiAvatar-root MuiAvatar-circular avatar MuiAvatar-colorDefault" title="Vivek Juremalani">
                    <AccountCircleSharpIcon sx={{  color: orange[500] ,fontSize: 27 }} />
                </div>
            </div>
            <div className="watch-points-cont" id="nav-cipher-points">
                <div className="rpm-top" title="CipherPoint: 00"><img
                        src="./WatchPoints.1caa87d88b88c0d4b4ee24fdd5b1db3f.svg" className="rpm-watchpoint"
                        alt="watchpoint-icon" />
                    <div className="rpm-point-title"><span>0</span></div>
                </div>
            </div>
            <div id="nav-mode" title="Change Theme" className="">
                <div className="tb-cont">
                    <div className="tb-left"><span></span></div>
                    <div className="tb-right"><span></span></div>
                    <div className="tb-thumb "></div>
                </div>
            </div>
        </div>
    </Container>
    )
}
const Container = styled.div`
    background:"red";
    .nav-avatar{
        background: "red";
    }
`
export default Navigation
