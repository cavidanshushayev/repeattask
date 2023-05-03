

const Login = ({ users, setIsLoggedIn,user ,setUser }) => {

    
    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value });

    }

    function handleSubmit(e) {
        e.preventDefault();
        // find user
        let userFound = users.find((item) => (item.username === user.username && item.password === user.password))
        if (userFound === undefined)
            userFound = false;
        else
            userFound = true; 

        setIsLoggedIn(userFound);

    }
    return (

        <>

            <h1>Login</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input name="username" onChange={(e) => handleChange(e)} type='text' placeholder='username'></input>
                <input name="password" onChange={(e) => handleChange(e)} type='password' placeholder='password'></input>
                <button type='sumbit'> Login</button>
            </form>
        </>
    )
}

export default Login