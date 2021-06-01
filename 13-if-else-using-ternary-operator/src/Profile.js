import {useState} from 'react'
function Profile(){
    // two condition
    // const [logIn, setLogIn] = useState(false)
    
    // multiple condition checking
    const [logIn, setLogIn]= useState(1)
    return (
        <div>
             {/* two condition 
             {
                logIn?
                <h1>Loged In</h1>
                : <h1>Guest User</h1>

            }
            <button onClick={()=>setLogIn(!logIn)} >logIn</button>  */}


            {/* multiple condition */}

            {
                logIn==1?
                <h1>LoggedIn as user 1 </h1>
                :logIn==2?
                <h1>LoggedIn as user 2 </h1>
                : <h1>LoggedIn as user 3</h1>

            }

            <button onClick={()=>setLogIn(1)}>user 1</button>
            <button onClick={()=>setLogIn(2)}>user 2</button>
            <button onClick={()=>setLogIn(3)}>user 3</button>

            
        
        </div>
    )
}

export default Profile;