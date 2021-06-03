import React from 'react';

// Here, we will update color on button click from red to blue
// Initial color will be 'red' but since we use getDerivedStateFromProps() and it runs on every update 
// before render it runs and color will become yellow as we mention in getDerivedStateFromProps()


class Student extends React.Component{

    // initial color red
    constructor(props){
        super(props)
        this.state={
            favoriteColor : 'red'
        }
    }

    // getDerivedStateFromProps() runs before render() and on every update
    static getDerivedStateFromProps(props,state){
        return{
            favoriteColor : props.favCol
        }
    }

    // on button click
    changeColor=()=>{

        this.setState({
            favoriteColor:'blue'
        })
    }
    
    render(){
       
        return(
            <div>
                <h1>My favorite color is: {this.state.favoriteColor} </h1>
               <button onClick={this.changeColor}>Change Color</button>
            </div>
        )
    }
}

export default Student;