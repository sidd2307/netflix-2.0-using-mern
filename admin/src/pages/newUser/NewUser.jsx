import React from 'react'
import './newUser.css'

export default function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form action="" className="newUserForm">
                <div className="newUserItem">
                    <label>UserName</label>
                    <input type="text" placeholder="annabeck99" />
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="Anna Backer" />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="annabeck99@gmail.com" />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="text" placeholder="password" />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder="+1 123 456 67" />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="New York | USA" />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" className="" />
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="female" className="" />
                        <label for="male">Female</label>
                        <input type="radio" name="gender" id="other" className="" />
                        <label for="male">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}
