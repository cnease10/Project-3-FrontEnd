import React from 'react'
import {Link} from 'react-router-dom'
import {Header, List} from 'semantic-ui-react'
import './headercomponent.css'


//functional / show only component that will be at the
//top of every page

//put that cute paw icon outside of this list and inside of the header

const HeaderComponent = () => {
    return (
        <Header>
                <div class="header1">
            <List>
                <List.Item>
                    Home
                </List.Item>
                <List.Item>
                   Shelters
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