import React from 'react'
import {Header, Container, List, Button, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import './headercomponent.css'
//functional / show only component that will be at the
//top of every page
//put that cute paw icon outside of this list and inside of the header
const HeaderComponent = (props) => {
    return (
/* <Container className='header' textAlign='left' fluid> */
        <Header className="nav header">
            <List horizontal className="nav list">
                <List.Item className="nav item" >
                    <Button className="ui color1 button"  tabIndex onClick={props.back}><Icon name="home"/>Home</Button>
                </List.Item>
                <List.Item className="nav item" >
                   <Button  className="ui color1 button"  tabIndex onClick={props.shelter}><Icon name="heart"/>Shelters</Button>
                </List.Item>
                <List.Item className="nav item" >
                <a className="ui color1 button" href="https://www.petfinder.com/"><Icon name="folder open"/>Resources</a> 
                </List.Item>
            </List>
            <Link className="ui color1 button rightfloat" to="/letmein"><Icon name="user outline"/>Admin</Link>
            
        </Header>
        // </Container>
    )
}
export default HeaderComponent
