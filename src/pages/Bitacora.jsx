import React, { useEffect, useState } from 'react'
import Aside from '../components/Aside'
import Nav from '../components/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'

export default function Bitacora() {
    const [bitacoras, setBitacoras] = useState(null);
    const [menuVisible, setMenuVisible] = useState(true);

    useEffect(() => {
        const getBitacoras = async () => {
            const res = await fetch("http://127.0.0.1:8000/api/auth/bitacora")
            const data = await res.json()
            setBitacoras(data)
        }
        getBitacoras();
    }, [])

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };


  return (
    
    <div className='flex bg-gray-200'>
    <Aside menuVisible={menuVisible} />
    <div className='w-full flex flex-col h-screen'>
        <Nav toggleMenu={toggleMenu} />
        <div className="w-full border-t flex flex-col">
            <h2 className="text-gray-700 m-3 font-semibold text-2xl">Bitacora</h2>
            <div className="w-11/12 flex-grow p-6 text-gray-700 bg-white mx-3 rounded-xl">
                <div className="flex justify-between items-center mb-4">
                    <p className="font-semibold">Información de la Bitacora </p>

                    {/* <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-normal rounded text-sm px-4 py-2 text-center" type="button">
                        Agregar Rol
                    </button> */}
                </div>
                <hr />
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className="text-left">#</th>
                            <th className="text-left">Nombre</th>
                            <th className="text-left">Descripcion</th>
                            <th className="text-left">Fecha</th>
                            <th className="text-left">Hora</th>
                            <th className="text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {bitacoras && bitacoras.map((bitacora, index) => (
                        <tr className="border-y-2" key={index}>
                            <td>{index + 1}</td>
                            <td>{bitacora.user_id}</td>
                            <td>{bitacora.descripcion}</td>
                            <td>{bitacora.fecha}</td>
                            <td>{bitacora.hora}</td>
                            <td className="flex">
                                <a className="mr-5" href="/edit"><FontAwesomeIcon icon={faPenToSquare} /></a>
                                <form action="/Bitacora/delete" method="post">
                                    <input type="number" hidden defaultValue="aaaa" name="id" />
                                    <button type="submit"><FontAwesomeIcon icon={faTrashCan} /></button>
                                </form>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    </div>
</div>
  )
}
