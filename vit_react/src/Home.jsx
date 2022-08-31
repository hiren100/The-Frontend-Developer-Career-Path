import React from "react"
import {Link, Routes , Route} from "react-router-dom"

export default function HOme(props) {
    return (
            <h1>
                Home Component Render<br/>
                <Link to="/link">second</Link>         
            </h1>
    )
}