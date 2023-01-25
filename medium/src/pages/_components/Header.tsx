import React from 'react'

function Header() {
  return (
    <nav className='py-2 px-6 bg-gray-100'>
      <div className='flex justify-between'>
        <span>Medium clone</span>
        <ul className='flex gap-4'>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Sign in</a>
          </li>
          <li>
            <a>Sign up</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header