import React from 'react'
import {Link} from 'react-router-dom'

function ShelterList(props) {
    const shelters = props.shelters.map((shelter) => {
        return(
            <div>
            <ul>
                <li key={shelter.id}>{shelter.name}</li>
            </ul>
            </div>
        )
    })
    return (
        <div>
            <h3>Shelter List</h3>
            <Link to='./animals' >{shelters}</Link>
        </div>
    )
}

export default ShelterList
