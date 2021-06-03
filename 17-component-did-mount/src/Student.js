import React from 'react';

// Here, First color will be red but after component is rendered and after 1 sec it will  change to blue color
// this we do using componentDidMount() from mount phase
// componentDidMount() runs after component is rendered


class Student extends React.Component{

    // initial color red
    constructor(props){
        super(props);
        this.state={
            favoriteColor : 'Red'
        }
    }


    // componentDidMount() runs after component is rendered
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                favoriteColor : 'Blue'
            })
        }, 1000)
    }

    render(){
        return (
            <div>
                <h1>My Favorite color is : {this.state.favoriteColor}</h1>
            </div>
        )
    }
}

export default Student;