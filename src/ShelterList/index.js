import React from 'react'
// import {Link} from 'react-router-dom'
import {Button, Grid} from 'semantic-ui-react'
import './shelterlist.css';



function ShelterList(props) {
    const shelters = props.shelters.map((shelter) => {
        return(
            <Grid> 

         
            <Grid.Row >
             <Grid.Column>
           
                <h1 className="homeh1" key={shelter.id}>{shelter.name}</h1>
                <Button className="ui color1 button"  onClick={() => props.shelterShow(shelter.id)}>Show me More</Button>
            
            </Grid.Column>
              
              </Grid.Row>
                  
                 </Grid>
        )
    })
   
    return (
        <Grid>
           
                {shelters}
        </Grid>
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

