import { ArrowBackOutlined, Movie } from '@material-ui/icons';
import { useLocation, Link } from 'react-router-dom';
import React from 'react'
import "./watch.scss";

const Watch = () => {
    const location = useLocation()
    const movie = location.movie
    return (
        <div className="watch">
            {/* Go back to Home Page */}
            <Link to="/"><div className="back">
                <ArrowBackOutlined />
                Home
            </div></Link>


            <video
                className="video"
                autoPlay
                progress
                controls
                src={movie.video}
            />
        </div>
    )
}

export default Watch
