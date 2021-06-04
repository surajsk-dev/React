import React,{useState,useEffect} from 'react';

function Passingstate(){
    
    // useState
    const [data, setData] = useState(10);
    const [count, setCount] = useState(100);

    // useEffect with condition data
    useEffect(() => {
        console.warn('data from useEffect' + data)
    }, [data])

     // useEffect with condition count
     useEffect(() => {
        alert('count from useEffect' + count)
    }, [count])

    return(
        <div>
            <h1>Data :: {data}</h1>
            <h1>Count :: {count}</h1>

            {/* update */}
            <button onClick={()=>setData(data+1)} >Update Data</button>
            <button onClick={()=>setCount(count+1)} >Update Count</button>
        </div>
    )


}

export default Passingstate;