import React, { useEffect, useState } from 'react'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import Navbar from '../../components/navbar/Navbar'
import "./home.scss"
import axios from "axios"

const Home = ({ type }) => {
    const [lists, setLists] = useState([])
    const [genre, setGenre] = useState(null)

    // const url = "http://localhost:8800/api/"

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(`lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMDgwMzkxOTk5MDQ0MjkxNGI3MzMxNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyOTQ4NDMzMSwiZXhwIjoxNjI5OTE2MzMxfQ.s88BcdTM5fBLym1fGIj7qYFh8buGPioXihNf152dxAQ"
                    },
                })
                console.log(res.data)
                setLists(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getRandomLists()
    }, [type, genre])
    return (
        <div className="home">
            <Navbar />
            {/* Pass props as movie */}
            <Featured type={type} setGenre={setGenre}/>
            {lists.map((list) => (
                <List list={list} />
            ))}

        </div>
    )
}

export default Home
