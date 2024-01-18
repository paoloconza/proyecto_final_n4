import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCog, faSignOut, faSortDown, faTv, faUser, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

export default function Nav({ toggleMenu }) {
//   const [menuVisible, setMenuVisible] = useState(false);

//   const toggleMenu = () => {
//     setMenuVisible(!menuVisible);
//   };
const [menuVisible, setMenuVisible] = useState(false);

const despliegeMenu = () => {
  setMenuVisible(!menuVisible);
};
  return (
    <div className='bg-gray-800'>
      <nav className="bg-white mr-3 rounded-md">
        <div className="relative flex items-center justify-between h-10 m-3">
          <div className="flex-1 flex items-center justify-center sm:justify-start">
            <button
              className="px-4 py-2 text-gray-800 text-sm rounded-lg hover:bg-gray-200"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
            <a className="ml-6 text-[15px] font-bold text-gray-700" href="/dashboard">
              Home
            </a>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="ml-3 relative">
              <div>
                <button
                  type="button"
                  className="flex text-sm text-[15px] font-bold text-gray-700 rounded-full"
                  onClick={despliegeMenu}
                >
                  <p className='mr-2'>Bienvenido</p>
                  <FontAwesomeIcon icon={faSortDown} />
                </button>
              </div>

              {menuVisible && (
                <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg py-1 bg-white">
                  <a href="/perfil" className="block px-6 py-2 text-sm text-gray-700 hover:font-extrabold">
                  <FontAwesomeIcon className='mr-3' icon={faUserAstronaut} />My Profile
                  </a>
                  <a href="/dashboard" className="block px-6 py-2 text-sm text-gray-700 hover:font-extrabold">
                  <FontAwesomeIcon className='mr-3' icon={faTv} />Dashboard
                  </a>
                  <a href="/" className="block px-6 py-2 text-sm text-gray-700 hover:font-extrabold">
                  <FontAwesomeIcon className='mr-3' icon={faSignOut} />Logout
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
