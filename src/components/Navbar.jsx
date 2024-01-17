import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-5">
            <img src="../src/assets/devchallenges.svg" alt="logo" className="w-[150px]" />
            <div className="group">
                <p className='p-2 group-hover:cursor-pointer'>usuario <FontAwesomeIcon icon={faUserTie} /></p>
                
                <ul className="hidden absolute border border-gray-300 border-solid rounded-10px p-4 -mt-2 -ml-16 group-hover:block">
                    <li>
                        <a href="perfil" className="block p-2 hover:bg-blue-200">My Profile</a>
                    </li>
                    <li>
                        <a href="dashboard" className="block p-2 hover:bg-blue-200">Dashboard</a>
                    </li>
                    <li>
                        <hr className="border-t border-gray-300 my-2" />
                    </li>
                    <li>
                        <a href="/" className="block p-2 hover:bg-blue-200">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}