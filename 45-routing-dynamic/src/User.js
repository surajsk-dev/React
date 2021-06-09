// import withRouter for params props
import {withRouter} from 'react-router-dom'

function User(props){
    console.warn(props)
    return(
        <div>
       <h1>My Name is {props.match.params.name}</h1> 
       <p>My id is {props.match.params.id} and i live in {props.match.params.address} </p>
        
        </div>
    )
}

// withRouter is Hoc so wrap with user
export default withRouter(User);