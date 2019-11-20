import React from 'react'
import {Link} from 'react-router-dom'
import {Header, List} from 'semantic-ui-react'

//functional / show only component that will be at the
//top of every page
const HeaderComponent = () => {
    return (
        <Header>
            <List>
                <List.Item>
                    <Link to='/'>Home</Link>
                </List.Item>
                <List.Item>
                    <Link to="/shelters">Shelters</Link>
                </List.Item>
            </List>
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