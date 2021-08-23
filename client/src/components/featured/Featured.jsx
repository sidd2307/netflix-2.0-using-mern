import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import "./featured.scss"

// Pass a prop
const Featured = ({ type, setGenre }) => {
    const [content, setContent] = useState({})

    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`/movies/random?type=${type}`, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMDgwMzkxOTk5MDQ0MjkxNGI3MzMxNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyOTQ4NDMzMSwiZXhwIjoxNjI5OTE2MzMxfQ.s88BcdTM5fBLym1fGIj7qYFh8buGPioXihNf152dxAQ"
                    },
                })
                setContent(res.data[0])
            } catch (error) {
                console.log(error);
            }
        };
        getRandomContent()
    }, [type])
    return (
        <div className="featured">

            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre" onChange={e => setGenre(e.target.value)}>
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}

            <img src={content.img} alt="" />
            <div className="info">
                <img src={content.imgTitle} alt="" />
                <span className="desc">{content.desc}
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span className="">Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span className="">Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured
