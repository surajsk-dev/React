import React from 'react'

// import Context
import {CommonContext} from './CommonContext';

class Footer extends React.Component{
    render(){
        return(
            <CommonContext.Consumer>
                {/* it takes a call back with color as props */}
                {
                    ({color})=>(
                        <h1 className='footer' style={{backgroundColor:color}}>Footer Page.</h1>
                    )
                }
            </CommonContext.Consumer>
        )
    }
}

export default Footer;