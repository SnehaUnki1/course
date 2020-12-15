import React from 'react';
import  {Link} from 'react-router-dom';

export default function Menu(){
    //https://bpcourse.herokuapp.com/course
    return(
        <div>
            <nav className="navbar navbar-expand-md bg-primary navbar-dark">
                <Link to='/' className="navbar-brand">UserInfo</Link>

                
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/dash" className="nav-link">DashBord</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/create" className="nav-link">Create</Link>
                        </li>
                        
                    </ul>
                

               
            </nav>
            
        </div>
    )
}