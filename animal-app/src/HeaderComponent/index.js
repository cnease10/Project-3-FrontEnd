import React from 'react'
import {Header, List,Button} from 'semantic-ui-react'
import './headercomponent.css'


//functional / show only component that will be at the
//top of every page

//put that cute paw icon outside of this list and inside of the header

const HeaderComponent = (props) => {
    return (
        <Header>
                <div class="header1">
            <List>
                <List.Item>
                    <Button onClick={props.back}>Home</Button>
                </List.Item>
                <List.Item>
                   <Button onClick={props.shelter}>Shelters</Button>
                </List.Item>
                <List.Item>
                    <Button onClick={props.animals} >Animals</Button>
                </List.Item>
            </List>
            </div>
        </Header>
    )
}

export default HeaderComponent
// {/* <List.Item>
//     <Link to='/login'>Login</Link>
// </List.Item> */}
// {/* <List.Item>
//     <Link to="/dogs">Dogs</Link>
// </List.Item> */}