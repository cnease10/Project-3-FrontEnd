import React from 'react'
import {Card, Image, Grid, Icon, Button } from 'semantic-ui-react'
import './sheltershow.css'

function ShelterShow(props) {
     const shelteraddress = props.new.address
     const sheltercity = props.new.city
     const sheltername = props.new.name
     const shelterphone = props.new.phone
    

     console.log('In ShelterShow shelter is:',  {shelteraddress})
     console.log('shelter show', {sheltername})
     const animals = props.animals.map((animal) => {
         return(
            <Grid> 

         
            <Grid.Row >
             <Grid.Column>
            <Card raised>
            <Image src={animal.photo} wrapped ui={false} />
            <Card.Content>
            <Card.Description className="biggerfont">
            <Icon name="paw"/>Bio: <br/>
            My name is {animal.name}. <br/>
             {animal.description} <br/>
            </Card.Description>
            </Card.Content>
            <Card.Content >
            <Card.Description className="biggerfont">
            Breed: {animal.breed} <br/>
            Gender: {animal.gender} <br/>  
            Age: {animal.age}
            </Card.Description>
            </Card.Content>
            <Card.Content>
            { props.adminlogged ? 
              <React.Fragment>
                 <Button className="ui color1 button" size="small"onClick={() => props.openModal(animal)}><Icon name='edit outline'/>Edit Animal</Button>
                <Button className="ui color1 button" size="small"onClick={() => props.deleteAndGet(animal.id)}><Icon name='heart outline'/>Adopt Animal</Button>
              </React.Fragment> : null
            }
            </Card.Content>
            </Card>
            </Grid.Column>
              
            </Grid.Row>
                
               </Grid>

         )
     })
    return(
        <div className="animallist">
            <h1 className="homeh1">{sheltername}</h1>
            
           <div className="shelter">
            <p> <Icon name='marker'/>{shelteraddress} {sheltercity} <Icon name="phone"/>{shelterphone}</p>
            {props.adminlogged ? <React.Fragment>
                <Button className="ui color1 button" onClick={() => {props.openAnimalAdd()}}> <Icon name='paw'/>Add An Animal</Button>
            </React.Fragment> : null}
           </div>
            <Grid> 
            {animals} 
             </Grid>      
        </div>
    )
   
}

export default ShelterShow