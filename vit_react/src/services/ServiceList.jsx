import React from "react"
import serviceData from "./serviceData"
import {Link, useLocation} from "react-router-dom"

function ServicesList() {
    const sData = serviceData.map(data =>{
      return <p key={data._id}><Link to={`/servicelist/${data._id}`}>{data.name}</Link></p>
    })
    const match = useLocation()
    return (
        <div>
            <h1>Services List Page</h1>
            {sData}
        </div>
    )
}

export default ServicesList