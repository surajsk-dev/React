import React from 'react'
class Student extends React.Component{

    // constructor will be called before anything
    constructor(props){
        super(props)
        this.state={
            name:'Suraj'
        }
        console.log('construction')
    }
    render(){
        return(
            <div>
                <h1>Student Name is: {this.state.name} </h1>
            </div>
        )
    }
}

export default Student;