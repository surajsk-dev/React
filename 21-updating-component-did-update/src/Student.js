import React from 'react';


// componentDidMount() runs after update

class Student extends React.Component{

    constructor(props){
        super(props)
        this.state={
            favoriteColor:'Red'
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                favoriteColor: 'blue'
            })
        }, 1000);
    }

    

    componentDidUpdate(){
        document.getElementById('div1').innerHTML="After update color is : " + this.state.favoriteColor

    }

    render(){
        return(
            <div>
                <h1>My Favorite Color is : {this.state.favoriteColor} </h1>
                <div id="div1"></div>
                
            </div>
        )
    }

}

export default Student;