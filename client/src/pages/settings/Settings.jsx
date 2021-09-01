import React, { useContext, useState } from 'react'
import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'
import { AccountCircle } from '@material-ui/icons';
import { Context } from '../../context/Context'
import axios from 'axios';

export default function Settings() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [file, setFile] = useState(null);
    const { user, dispatch } = useContext(Context)
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "UPDATE_START" });
        const updatedUser = {
            userId: user._id,
            username,
            password,
            email
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename)
            data.append("file", file)
            updatedUser.profilePicture = filename;
            try {
                await axios.post("/upload", data)
            } catch (err) {
            }
        }
        try {
            const res = await axios.put("users/" + user._id, updatedUser);
            setSuccess(true);
            dispatch({ type: "UPDATE_SUCCESS", payload: res.data })
        } catch (err) {
            dispatch({ type: "UPDATE_FAILURE" })
        }
    }

    return (
        <div className="settings">
            <Sidebar />
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Your Account</span>
                </div>
                <form className="settingsForm" onSubmit={handleSubmit}>
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img
                            src={file ? URL.createObjectURL(file) : PF + user.profilePicture}
                            alt=""
                        />
                        <label htmlFor="fileInput">
                            <AccountCircle className="settingsPPIcon" />
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} onChange={e => setFile(e.target.files[0])} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder={user.username} onChange={(e) => setUsername(e.target.value)} />
                    <label>Email</label>
                    <input type="email" placeholder={user.email} onChange={(e) => setEmail(e.target.value)} />
                    <label>Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                    <button className="settingsSubmit" type="submit">Update</button>
                    {success && <spa style={{ color: 'teal', textAlign: 'center', marginTop: "20px" }}>Profile has been updated.</spa>}
                </form>
            </div>
        </div>
    )
}
