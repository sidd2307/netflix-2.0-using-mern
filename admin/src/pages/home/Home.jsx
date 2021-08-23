import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './home.css'
import { userData } from '../../dummyData'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import { useState, useEffect, useMemo } from 'react';
import axios from 'axios'

export default function Home() {
    const MONTHS = useMemo(() => [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ], [])

    const [userStats, setUserStats] = useState([])

    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await axios.get("/users/stats", { headers: { token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMDgwMzkxOTk5MDQ0MjkxNGI3MzMxNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyOTMxNjUwNywiZXhwIjoxNjI5NzQ4NTA3fQ.iv8UzoTcLWmpC9nv2gOK5b3KIKHt4OB7KW59FP1fFLU" } })
                const statsList = res.data.sort(function (a, b) {
                    return a._id - b._id
                })
                statsList.map(item => setUserStats(prev => [...prev, { name: MONTHS[item._id - 1], "New User": item.total }]))
            }
            catch (error) {
                console.log(error);
            }
        }
        getStats()
    }, [MONTHS])

    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}
