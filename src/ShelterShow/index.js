import React from 'react'
import {Button} from 'semantic-ui-react'

function ShelterShow(props) {
     const shelteraddress = props.new.address
     const sheltercity = props.new.city
     const sheltername = props.new.name
     const shelterphone = props.new.phone
    //  const shelterpets = props.animals
    //  .map((animal) => {
    //      return(
    //          <ul>
    //              <li>{animal}</li>
    //          </ul>
    //      )
    //  })
    //  .map((shelter) => {
        //  return(
        // <div>
        // <ul>
        //     <li key={shelter.id}> {shelter.name} <br/> {shelter.address} <br/>  </li>
            
        // </ul>
        // </div>
        //  )
    //  })

     console.log('In ShelterShow shelter is:',  {shelteraddress})
     console.log('shelter show', {sheltername})
    return(
        <div>
            <h1>{sheltername}</h1>
            <p> {shelteraddress} {sheltercity} {shelterphone}</p>
            {/* <section>{shelterpets}</section> */}
            <Button onClick={() => {props.shelteranimals(props.new.id)}}>Show me your pets</Button>
        </div>
    )
   
    
    // // .map((shelter) => {
    // //     return(
    // //         <p>{shelter[0]}</p>
    // //     )
    // // })
    // console.log('In ShelterShow shelter is:',  shelter)
    
    // return(
    //     <div>
    //         <h2>Sup</h2>
           
    //     </div>
    // )
}

export default ShelterShow