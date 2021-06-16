import {useRef, useEffect} from 'react'

function User(props){

    //   storing  DOM
    const lastVal = useRef();

    useEffect(()=>{
        // getting previous value from props and setting it
        lastVal.current = props.count;
    })

    // setting previous value from useEffect
    const previousVal = lastVal.current;

    return(
        <div>
            <h1>User Component - Child</h1>
            <h2>Current Value: {props.count} </h2>
            <h2>Previous Value: {previousVal} </h2>
        </div>
    )
}

export default User;