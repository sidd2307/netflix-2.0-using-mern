import React, { useEffect, useState } from 'react'
import './widgetSm.css'
import { Visibility } from '@material-ui/icons'
import axios from 'axios'

export default function WidgetSm() {
    const [newUsers, setNewUsers] = useState([])

    useEffect(() => {
        const getNewUsers = async () => {
            try {
                const res = await axios.get("/users?new=true", { headers: { token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMDgwMzkxOTk5MDQ0MjkxNGI3MzMxNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyOTMxNjUwNywiZXhwIjoxNjI5NzQ4NTA3fQ.iv8UzoTcLWmpC9nv2gOK5b3KIKHt4OB7KW59FP1fFLU" } })
                setNewUsers(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getNewUsers()
    }, [])
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                {newUsers.map(user => (
                    <li className="widgetSmListItem">
                        <img src={user.profileic || "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"} alt="" className="widgetSmImg" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">{user.username}</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon" />
                            Display
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
