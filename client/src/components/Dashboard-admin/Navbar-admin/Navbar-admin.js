import React from 'react'
import './Navbar-admin.css'
import Gestionserveur from './Gestionserveur'

const Navbaradmin = () => {
  return (
    <div className='box-menu'>
    <div className='navbar'>
    <div className='nav-logo'>
        <img src='./images/logo.png' alt='logo'></img>
    </div>
    <div className='nav-icon'>
    <i class="fa-solid fa-building-shield"></i>
    </div>
</div>
<div className='box-content'>
<div className='menu'>
    <ul>
     <li><i class="fa-solid fa-address-card"></i> Profil</li>
        <li><i class="fa-solid fa-users"></i> Gestion Produits</li>
        <li><i class="fa-solid fa-paste"></i> Gestion users</li>
        <li><i class="fa-solid fa-arrow-right-from-bracket"></i> Log Out</li>
    </ul>

</div>

<div className='content'>
<Gestionserveur />
</div>
</div>
</div>
  )
}

export default Navbaradmin
