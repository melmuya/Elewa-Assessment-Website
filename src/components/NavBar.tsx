// import { Link } from 'react-router-dom'
import React from 'react';
import './NavBar.css'

interface Navlink {
  path: string;
  name: string;
}

const NavBar: React.FC = () => {

  const Navlinks: Navlink[] = [
    {
      path: '/about',
      name: 'About us'
    },
    {
      path: '/social-impact',
      name: 'Social impact'
    },
    {
      path: '/Invest',
      name: 'Invest'
    }
  ]

  

  return (
    <div>
      <header>
        <nav className='navbar'>
          <h3>Elewa Group</h3>
          <div>
            {Navlinks.map((link, index) => (
            <div className="nav-link" key={index}>
            <a href={link.path}>{link.name}</a>
            </div>))}
          </div>
        </nav>
      </header>
      
    </div>
  );
}

export default NavBar;
