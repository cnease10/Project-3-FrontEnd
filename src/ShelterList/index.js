import React from 'react'
// import {Link} from 'react-router-dom'
import {Button} from 'semantic-ui-react'
// import ShelterShow from '../ShelterShow';



function ShelterList(props) {
    const shelters = props.shelters.map((shelter) => {
        return(
            <div>
            <ul>
                <li key={shelter.id}>{shelter.name}</li>
                <Button onClick={() => props.shelterShow(shelter.id)}>Show me More</Button>
            </ul>
            </div>
        )
    })
   
    return (
        <div>
            <h3>Shelter List</h3>
                {shelters}
        </div>
    )
}

export default ShelterList

// import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
// import {Button} from 'semantic-ui-react'
// import ShelterShow from '../ShelterShow';



//  class ShelterList extends Component {
//      getshelter = () => {
//           this.props.shelters.map((shelter) => {
//              return(
//                  <div>
//                  <ul>
//                      <li key={shelter.id}>{shelter.name}</li>
//                      <Button onClick={() => this.props.shelterShow(shelter.id)}>Show Me More</Button>
//                  </ul>
//                  </div>
//              )
//          })
//      }
//     render() {
//         return (
//             <div>
//                 <h3>Shelter List</h3>
//                 {/* <Link to='./sheltershow/ + {shelter.id}'  >{shelters}</Link> */}
//                 {this.getshelter}
//                 <ShelterShow /> 
//             </div>
//         )
//     }
// }


// export default ShelterList

