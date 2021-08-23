import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import { useRef } from 'react'
import ListItem from "../listItem/ListItem"
import "./list.scss"

const List = ({ list }) => {

    // on clicking left button appears
    const [isMoved, setIsMoved] = useState(false)
    const [slideNumber, setSlideNumber] = useState(0)
    const [clickLimit, setClickLimit] = useState(window.innerWidth / 230)

    const listRef = useRef()

    const handleClick = (direction) => {
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x - 50
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1)
            // since box width + padding = 230px
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }

        if (direction === "right" && slideNumber < 10 - clickLimit) {
            setSlideNumber(slideNumber + 1)
            // since box width + padding = 230px
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }

    return (
        <div className="list">
            <span className="listTitle">{list.title}</span>
            <div className="wrapper">
                {/* Add buttons to add slider effect */}
                <ArrowBackIosOutlined className="sliderArrow left" onClick={() => handleClick("left")} style={{ display: !isMoved && "none" }} />
                <div className="container" ref={listRef}>
                    {list.content.map((item, i) => (
                        <ListItem index={i} item={item} />
                    ))}

                </div>
                <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick("right")} />
            </div>
        </div>
    )
}

export default List
