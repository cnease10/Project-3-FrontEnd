import React from 'react'
import {Grid, Image, Header, Icon, Statistic, Divider} from 'semantic-ui-react'
import './homecomponent.css'


   
const HomeComponent = () => {
    return(

      
      <div className="text">

            <h1 className="homeh1 offcenter">Animal Allies<Icon name="paw"/></h1>
            <Grid >
    <Grid.Row>
      <Grid.Column width={3}>
        <Image className="homeimg"src='https://images.unsplash.com/photo-1526377242861-e4d7afe69623?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1046&q=80' />
      </Grid.Column>
      <Grid.Column width={11}>
        <Header as="h1"  className="ui colorfour header topspace" > Here to help you find the perfect pet</Header>
        <Divider horizontal></Divider>
       <Statistic.Group widths='three'>
        <Statistic>
          <Statistic.Value><Icon name="paw"/>50,000</Statistic.Value>
          <p className="ui stat " >Rescues</p>
        </Statistic>

        <Statistic> 
          <Statistic.Value text>
          Thirty
          <br />
          Thousand
          </Statistic.Value>
          <p className="ui stat ">Adoptions</p>
        </Statistic>

        <Statistic>
          <Statistic.Value>
          <Icon name="heart"/> 368 
          <br/>
          </Statistic.Value>
          <p className="ui stat ">Partner Shelters</p>
        </Statistic>
      </Statistic.Group>
)
      </Grid.Column>
      <Grid.Column width={2}>
        <Header as="h2" className="ui colorone header" >Resources</Header>
        <p>
          <a href="https://www.petfinder.com/dog-breeds/">Dog Breeds</a> <br/>
          <a href="https://www.petfinder.com/cat-breeds/">Cat Breeds</a> <br/> 
          <a href="https://www.petfinder.com/pet-adoption/dog-adoption/">Dog Adoption</a> <br/>   
          <a href="https://www.petfinder.com/pet-adoption/cat-adoption/">Cat Adoption</a> <br/>  
          {/* <a href="https://www.petfinder.com/">Learn More</a>      */}
        </p>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
        <Image className="homeimg"src='https://images.unsplash.com/photo-1513711819719-f60aeb32b10f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' />
      </Grid.Column>
      <Grid.Column width={10} >
      </Grid.Column>
      <Grid.Column width={3}>
        <Image className="homeimg" src='https://images.unsplash.com/photo-1545331137-93e08496d4f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
         
      </div>
        

                
        


    )
}


   
export default HomeComponent



 