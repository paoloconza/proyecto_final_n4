import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpenReader, faLink, faPeopleGroup, faUserGear, faUsersGear } from '@fortawesome/free-solid-svg-icons'

export default function Aside({ menuVisible }) {
  const asideClass = `bg-gray-800 relative h-screen w-72 md:w-64 ${
    menuVisible ? 'hidden sm:block' : 'hidden'
  } shadow-xl`;
  return (
    <div>
        <aside className={asideClass}>
            <div className="p-3 flex items-center">
                <FontAwesomeIcon icon={faUserGear} className="h-8 w-8 rounded-full text-white"/>
                <p className="text-white text-2xl font-semibold ml-3 mb-2">Administración</p>
            </div>
            <hr className="mx-0.5"/>
            <div className="p-3">
               
                    <p className="text-white">Paolo Conza</p>
                    <p className="text-white text-sm">Administrador</p>
                  </div>
                  <hr className="mx-0.5"/>
            
                  <nav className="text-white text-sm pt-3">
                    <p className="text-center text-xl font-semibold my-2 mb-4">General y Seguridad</p>
                    <a href="/roles" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6">
                    <FontAwesomeIcon icon={faUsersGear} className="h-5 mr-2 text-white"/>
                      Roles
                    </a>
                    <a href="/usuarios" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6">
                    <FontAwesomeIcon icon={faPeopleGroup} className="h-5 mr-2 text-white"/>
                      Usuarios
                    </a>
                    <a href="/bitacora" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6">
                    <FontAwesomeIcon icon={faBookOpenReader} className="h-5 mr-2 text-white"/>
                      Bitacoras
                    </a>
                    <a href="/paginas" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6">
                    <FontAwesomeIcon icon={faLink} className="h-5 mr-2 text-white"/>
                      Paginas
                    </a>
                </nav>
        </aside>
    </div>
  )
}
