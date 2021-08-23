import React from 'react'
import './topbar.css'
import { NotificationsNone, Language, Settings } from '@material-ui/icons'

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">admin@netflix</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <div className="topIconBadge">2</div>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <div className="topIconBadge">2</div>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://avatars.githubusercontent.com/u/77796121?v=4" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
