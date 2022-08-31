import React from "react"
import serviceData from "./serviceData"
import {useParams} from "react-router-dom"


function ServiceDetail(props) {
    
    const {serviceId} = useParams()
    console.log(serviceId)


    const thisService = serviceData.filter(service => service._id === serviceId)
    console.log(thisService[0].name)
    
    return (
        <div>
            <h1>Service Detail Page</h1>
            <h3>{thisService[0].name} - ${thisService[0].price}</h3>
            <p>{thisService[0].description}</p>
        </div>
    )
}

export default ServiceDetail