function User(props){
    return(
        <div>
        <h1>Name: {props.data.name} Email: {props.data.email}</h1>
        
        </div>
    )
}

export default User;