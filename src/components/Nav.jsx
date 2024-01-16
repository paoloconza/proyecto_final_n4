import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
  return (
    <div>
        <nav className="bg-white">
                <div className="relative flex items-center justify-between h-10 m-2">
                    <div className="flex-1 flex items-center justify-center sm:justify-start">
                        <button id="sidebarBtn" className="px-4 py-2 text-gray-700 text-sm rounded-lg hover:bg-gray-200">
                            {/* <i className="fas fa-bars"></i> */}
                            <FontAwesomeIcon icon={faBars}/>
                        </button>
                        <a className="ml-6" href="/dashboard">Home</a>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                        <div className="ml-3 relative">
                            <div>
                                <button type="button" className="flex text-sm rounded-full" id="profileBtn">
                                    <p>Bienvenido</p>
                                </button>
                            </div>

                            <div id="profileDiv" className="hidden absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                                    <i className="fas fa-user mr-2"></i>Your Profile
                                </a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                                    <i className="fas fa-cog mr-2"></i>Settings
                                </a>
                                <a href="/index.php" className="block px-4 py-2 text-sm text-gray-700">
                                    <i className="fas fa-sign-out-alt mr-2"></i>Sign out
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
    </div>
  )
}
