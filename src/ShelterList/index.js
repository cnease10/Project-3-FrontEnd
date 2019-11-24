import React from 'react'
// import {Link} from 'react-router-dom'
import {Button, Grid, Icon} from 'semantic-ui-react'
import './shelterlist.css';



function ShelterList(props) {
    const shelters = props.shelters.map((shelter) => {
        return(
            <Grid> 

         
            <Grid.Row >
             <Grid.Column>
           
                <h1 className="homeh1" key={shelter.id}>{shelter.name}</h1>
                <Button className="ui color1 button"  onClick={() => props.shelterShow(shelter.id)}><Icon name="thumbs up outline"/>Show me More</Button>
            
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

