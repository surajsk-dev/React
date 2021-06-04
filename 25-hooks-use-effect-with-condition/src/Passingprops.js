import React,{useState,useEffect} from 'react';

function Passingprops(props){
    
    // useEffect with condition data
    useEffect(() => {
        console.warn('data from useEffect' + props.data)
    }, [props.data])

     // useEffect with condition count
     useEffect(() => {
        alert('count from useEffect' + props.count)
    }, [props.count])

    return(
        <div>
            <h1>Data :: {props.data}</h1>
            <h1>Count :: {props.count}</h1>

            
        </div>
    )


}

export default Passingprops;