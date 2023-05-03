import { useState } from "react";
import Welcome from "./Welcome";
import Login from "./Login";
import  { users} from "./users.js";
function App() {

  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [user, setUser] = useState({});
  return (
    <>

      <div >
        {isLoggedIn ? <Welcome username={user}/> : <Login user={user}  setUser={setUser} setIsLoggedIn={setIsLoggedIn} users={users}/>  }
           </div>

    </>

  )
}

export default App;
