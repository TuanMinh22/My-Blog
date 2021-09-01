import React, { useEffect, useState } from 'react'
import { GitHub, Facebook, Twitter, Instagram, Search } from '@material-ui/icons'
import './sidebar.css';
import { user } from '../../dummyData';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Sidebar({ user }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [cat, setCat] = useState([]);
    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories");
            setCat(res.data);
        }
        getCats();
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                    src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg"
                    alt=""
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
                    necessitatibus nostrum illum reprehenderit.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cat.map(c => (
                        <Link to={`/?cat=${c.name}`} className="link">
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <Facebook className="sidebarIcon" />
                    <Twitter className="sidebarIcon" />
                    <GitHub className="sidebarIcon" />
                    <Instagram className="sidebarIcon" />
                </div>
            </div>
        </div>
    )
}
