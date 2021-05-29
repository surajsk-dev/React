import React from 'react';

class Student extends React.Component{
    render(){
        return(
            <div style={{backgroundColor:'skyblue', padding:'5px',marginBottom:'10px'}} >
                {/* passing data */}
                {/* <h1>Name: {this.props.name} </h1>
                <h2>Email:{this.props.email} </h2> */}
                
                {/* changing data on button click */} 
                <h1> Name: {this.props.name} </h1>
            </div>
        )
    }
}

export default Student;