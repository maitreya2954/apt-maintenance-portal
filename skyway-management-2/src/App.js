
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import TenantDashboard from "./pages/TenantDashboard"
import ManagerDashboard from "./pages/ManagerDashboard"
import TeamDashboard from "./pages/TeamDashboard"
import NewRequest from "./pages/NewRequest"
import Header from "./components/Header"
import RequestStatusUpdate from "./pages/RequestStatusUpdate"
import './App.css';

import { BrowserRouter as Router, Route,Routes } from "react-router-dom";

function App() {
  return (
   <Router>
    <Header/>
    
    <Routes>
    <Route path='/team' element={<TeamDashboard/>}/>
    <Route path='/team/requestview' element={<RequestStatusUpdate/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/newrequest' element={<NewRequest/>}/> 
   <Route path='/login' element={<Login/>}/>
   <Route path='/about' element={<About/>}/>
   <Route path='/contact' element={<Contact/>}/> 
   <Route path='/tenant' element={<TenantDashboard/>}/> 
   <Route path='/manager' element={<ManagerDashboard/>}/> 
   <Route path='/team' element={<TeamDashboard/>}/> 
   
   </Routes> 
   </Router> 

    
 
  );
}

export default App;
