import React from 'react';

// componentWillUnmount() is just before removing an component from dom
// here we will remove component from dom on button click

class Student extends React.Component{

    // initial values
  constructor(props){
    super(props)
    this.state={
        show:true
    }
}

    componentWillUnmount(){
        alert('component will unmount')
    }

    render(){
        return(
            <div>
            
                <h1>This is Student component</h1>
                
            
            </div>
        )
    }
}

export default Student;