import React from 'react'
import Aside from '../components/Aside'
import Nav from '../components/Nav'

export default function Dashboard() {
    return (
        <div className='flex bg-gray-100'>
            <Aside />
            <div className='w-full flex flex-col h-screen'>
                <Nav />
                <div class="w-full border-t flex flex-col">
                <h2 class="text-gray-700 m-3 font-semibold text-2xl">Dashboard</h2>
                <div class="w-4/6 flex-grow p-6 text-gray-700 bg-white ml-3">
                    <p>Bienvenido</p>
                    <p>Selecciona la opcion que quieras realizar en las pestañas del menu de la izquierda</p>
                </div>
            </div>
            </div>
        </div>
    )
}
