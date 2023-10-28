import React from 'react'
import '../css/navItem.css'

const NavItem = ({nav}) => {
  return (
    <div>
      <li>
        <a href={nav.link}>
            {nav.name}
        </a>
      </li>
    </div>
  )
}

export default NavItem
