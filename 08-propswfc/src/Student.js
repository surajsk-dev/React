function Student(props){
    return(
        <div>
            {/* passing normal data props */}
            {/* <h1>{props.name}</h1>
            <h2>{props.email}</h2>
            <h2>{props.others.address}</h2> */}

            {/* change data from button click use props */}
            <h1>{props.name}</h1>
        </div>
    )
}

export default Student;