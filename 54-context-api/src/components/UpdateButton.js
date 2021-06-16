import React from 'react'

// import Context
import {CommonContext} from './CommonContext';

class UpdateButton extends React.Component{
    render(){
        return(
            <CommonContext.Consumer>
                {/* it takes a call back with color as props */}
                {
                    ({updateColor})=>(
                        <div>
                        <button onClick={()=>updateColor('yellow')}>Update Yellow</button>
                        <button onClick={()=>updateColor('blue')}>Update Blue</button>
                        <button onClick={()=>updateColor('red')}>Update Red</button>

                        </div>
                    )
                }
            </CommonContext.Consumer>
        )
    }
}

export default UpdateButton;