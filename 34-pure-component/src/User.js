import React from 'react';

class User extends React.PureComponent{

    render(){
        console.warn('User Component re-rendering')
        return(
            <div>
            <h1>User Component {this.props.count} </h1>
            
            </div>
        )
    }
}

export default User;