import Login from "./pages/Login"

import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Error from "./pages/Error";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="homepage" element={ <Home/> } />
        <Route path="profile" element={ <Profile/> } />
        <Route path="error" element={ <Error/> } />


      </Routes>
    </div>
  );
}

export default App;
