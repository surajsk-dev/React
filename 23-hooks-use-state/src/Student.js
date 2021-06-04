import {useState} from 'react';

function Student(){
    const [data, setdata] = useState('Suraj')
    return(
        <div>
            <h1>Name: {data} </h1>
            <button onClick={()=>setdata('Bunty')} >Change Name</button>
            </div>
    )
}

export default Student;