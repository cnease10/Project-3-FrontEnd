import React from 'react'
import {Link} from 'react-router-dom'
import { Segment, Button} from 'semantic-ui-react'


//functional / show only component that will be at the
//top of every page

//put that cute paw icon outside of this list and inside of the header

const FooterComponent = () => {
    return (
        <Segment stacked>
            <Button><Link to="/letmein">Admin</Link></Button>
        </Segment>
    )
}

export default FooterComponent