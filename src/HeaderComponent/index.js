import React from 'react'
import {Header, Container, List,Button, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import './headercomponent.css'
//functional / show only component that will be at the
//top of every page
//put that cute paw icon outside of this list and inside of the header
const HeaderComponent = (props) => {
    return (
<Container className='header' textAlign='left' fluid>
        <Header>
            <List horizontal>
                <List.Item >
                    <Button className="ui color1 button"  tabIndex onClick={props.back}><Icon name="home"/>Home</Button>
                </List.Item>
                <List.Item>
                   <Button  className="ui color1 button"  tabIndex onClick={props.shelter}><Icon name="heart"/>Shelters</Button>
                </List.Item>
                <List.Item > 
                    <Button className="ui color1 button" tabIndex onClick={props.animals}><Icon name='paw'/>All Animals</Button>
                </List.Item>
            </List>
            <Link className="ui color1 button rightfloat" to="/letmein"><Icon name="user outline"/>Admin</Link>
        </Header>
        </Container>
    )
}
export default HeaderComponent
