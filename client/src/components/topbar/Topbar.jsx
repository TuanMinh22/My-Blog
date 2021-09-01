import React, { useContext, useEffect } from 'react'
import { GitHub, Facebook, Twitter, Instagram, Search } from '@material-ui/icons'
import './topbar.css'
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

export default function Topbar() {
    const { user, dispatch } = useContext(Context);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const handleLogout = async () => {
        dispatch({ type: "LOGOUT" });
        window.location.replace("/login")
    }
    return (
        <div className="topbar">
            <div className="topLeft">
                <a href="https://www.facebook.com/minh.tuan.5621149/" ><Facebook className="topLeftIcons" /></a>
                <a href="https://twitter.com/NguyenT03940587" ><Twitter className="topLeftIcons" /></a>
                <a href="https://github.com/tuanminh01" ><GitHub className="topLeftIcons" /></a>
                <a href="https://www.instagram.com/ntminhk1/" ><Instagram className="topLeftIcons" /></a>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                            HOME
                        </Link>
                    </li>
                    <li className="topListItem">
                        ABOUT
                    </li>
                    <li className="topListItem">
                        CONTACT
                    </li>
                    <li className="topListItem">
                        <Link to="/write" style={{ textDecoration: 'none', color: 'black' }}>
                            WRITE
                        </Link>
                    </li>
                    {/* onClick={handleLogout} */}
                    <li className="topListItem" onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <Link to="/settings">
                        <img className="topbarImg" src={user ? PF + user.profilePicture : PF + "noAvatar.png"} alt="" />
                    </Link>
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">
                                LOGIN
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">
                                REGISTER
                            </Link>
                        </li>
                    </ul>
                )}
                <div className="search-box">
                    <input type="text" placeholder="Search ..." className="input-text" />
                    <Search className="topSearchIcon" />
                </div>
            </div>
        </div>
    )
}
