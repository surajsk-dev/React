import React from 'react';

// using getSnapshotBeforeUpdate() we can access before update data.
// componentDidMount() must be used with getSnapshotBeforeUpdate()

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

    getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById('div1').innerHTML="Before update color is : " + prevState.favoriteColor
    }

    componentDidUpdate(){
        document.getElementById('div2').innerHTML="After update color is : " + this.state.favoriteColor

    }

    render(){
        return(
            <div>
                <h1>My Favorite Color is : {this.state.favoriteColor} </h1>
                <div id="div1"></div>
                <div id="div2"></div>
            </div>
        )
    }

}

export default Student;