import React from 'react'

// import Context
import {CommonContext} from './CommonContext';

class Header extends React.Component{
    render(){
        return(
            <CommonContext.Consumer>
                {/* it takes a call back with color as props */}
                {
                    ({color})=>(
                        <h1 style={{backgroundColor:color}}>Header Page.</h1>
                    )
                }
            </CommonContext.Consumer>
        )
    }
}

export default Header;