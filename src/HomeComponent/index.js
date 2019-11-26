import React from 'react'
import {Grid, Image, Header, Icon, Statistic, Divider} from 'semantic-ui-react'
import './homecomponent.css'


   
const HomeComponent = () => {
    return(

      <Grid >
        <Grid.Row>
        <Grid.Column width={3}>

        {/* <Image className="homeimg"src='https://images.unsplash.com/photo-1526377242861-e4d7afe69623?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1046&q=80' /> */}
        </Grid.Column>
        <Grid.Column width={10}>
          <h1 className="homeh1 offcenter">Animal Allies<Icon name="paw"/></h1>
          <Header as="h1"  className="ui colorfour header topspace" > Here to help you find the perfect pet</Header>
          <Divider horizontal></Divider>
            <Statistic.Group widths='three' className="stat background">
              <Statistic>
              <Statistic.Value><Icon name="paw"/>50,000</Statistic.Value>
                <p className="ui stat " >Rescues</p>
              </Statistic>

              <Statistic> 
              <Statistic.Value text className="space">
                Thirty
                <br />
                Thousand
              </Statistic.Value>
                <p className="ui stat space ">Adoptions</p>
              </Statistic>

              <Statistic>
              <Statistic.Value>
                <Icon name="heart"/> 368 
                <br/>
              </Statistic.Value>
               <p className="ui stat space ">Partner Shelters</p>
              </Statistic>
              </Statistic.Group>
        </Grid.Column>
        <Grid.Column width={2}>
        </Grid.Column>
        <Grid.Column width={2}>
        </Grid.Column>
      </Grid.Row>
     
      {/* <Grid.Row className="hiddenrow">
        <Grid.Column width={3} > */}
          {/* <Image className="homeimg"src='https://images.unsplash.com/photo-1513711819719-f60aeb32b10f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' /> */}
        {/* </Grid.Column>
        <Grid.Column width={10} >
        
        </Grid.Column>
        <Grid.Column width={3} > */}
          {/* <Image className="homeimg" src='https://images.unsplash.com/photo-1526377242861-e4d7afe69623?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1046&q=80' /> */}
        {/* </Grid.Column>
      </Grid.Row> */}

    </Grid>
         
     
        

                
        


    )
}


   
export default HomeComponent



 