function User(props){
    const data=[
        {
            name:'Tommy',
            email:'tommy@test.com'
        },
        {
            name:'Grace',
            email:'grace@test.com'
        }
    ]

    return(
        <div>
            <h1>Child Component</h1>
            <button onClick={()=>props.alert(data)}>click to transfer data to parent</button>
        </div>
    )
}

export default User;