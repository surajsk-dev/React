import React from 'react'

class Student extends React.Component{

    // constructor runs before anything it is first
    constructor(props){
        super(props)
        this.state={
            // inintial color
            favoriteColor:'Red'
        }
        console.warn('constructor')
    }

    // getDerivedStateFromProps runs right before render
    static getDerivedStateFromProps(props,state){

        return{

            // because it runs befor render color will be yellow that we pass as props
            favoriteColor : props.favCol

        }
        
        
    }
    render(){
        return (
            <div>
                <h1>My favorite color is: {this.state.favoriteColor} </h1>
            </div>
        )
    }

}

export default Student;