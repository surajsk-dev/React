import React from 'react';

// Here, we will observe shouldComponentUpdate() it gives boolean true,false. 
// this runs on every update. we can specify whether to update render or not
// here, we want to change color from red to blue by button click
// but it does not change change because of  shouldComponentUpdate() because we set it as false

class Student extends React.Component{

    // initial color
    constructor(props){
        super(props)
        this.state={
            favoriteColor : 'Red'
        }
    }

    // shouldComponentUpdate() set to false to not render update
    shouldComponentUpdate(){
        console.warn("this.shouldComponentUpdate")
        return false;
    }

    colorChange=()=>{
        this.setState({
            favoriteColor:'blue'
        })
        console.warn('color change')
    }

    render(){
        return(
            <div>
                <h1>My favorite color is: {this.state.favoriteColor} </h1>

                <button onClick={this.colorChange}>change color</button>
            </div>
        )
    }
    

}

export default Student;
