// import forwardRef
import {forwardRef} from 'react'

function User(props,ref){
    return(
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
}

export default forwardRef(User);