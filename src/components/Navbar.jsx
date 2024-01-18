import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut, faSortDown, faTv, faUserAstronaut } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {

    const [menuVisible, setMenuVisible] = useState(false);

    const despliegeMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <nav className="flex justify-between items-center p-5">
            <img src="../src/assets/devchallenges.svg" alt="logo" className="w-[150px]" />
            <div>
                <div>
                    <button
                        type="button"
                        className="flex text-[15px] font-bold text-gray-700 rounded-full"
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
        </nav>
    );
}