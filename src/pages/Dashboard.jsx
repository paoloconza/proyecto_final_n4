import React, { useState } from 'react'
import Aside from '../components/Aside'
import Nav from '../components/Nav'

export default function Dashboard() {
    const [menuVisible, setMenuVisible] = useState(true);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div className='flex bg-gray-200'>
            <Aside menuVisible={menuVisible} />
            <div className='w-full flex flex-col h-screen'>
                <Nav toggleMenu={toggleMenu} />
                <div className="w-full border-t flex flex-col">
                    <h2 className="text-gray-700 m-3 font-semibold text-2xl">Dashboard</h2>
                    <div className="w-4/6 flex-grow p-6 text-gray-700 bg-white ml-3 rounded-xl">
                        <p>Bienvenido</p>
                        <p>Selecciona la opcion que quieras realizar en las pestañas del menu de la izquierda</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
