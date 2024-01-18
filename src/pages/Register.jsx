import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUserTie } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rol_id, setRol_id] = useState(1);
    const [error, setError] = useState('');


    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            // Realizar una solicitud POST a tu endpoint de registro
            const response = await fetch('http://127.0.0.1:8000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password, rol_id }),
            });

            if (response.ok) {
                // Manejar la respuesta exitosa, por ejemplo, redirigir a otra página
                console.log('Registro exitoso');
                // Redirigir a la página de inicio de sesión
                navigate('/');
            } else {
                // Manejar la respuesta de error del servidor
                const errorData = await response.json();
                setError(errorData.message || 'Error en el registro');
            }
        } catch (error) {
            // Manejar el error de red, etc.
            console.error('Error en el registro', error);
        }
    };

    return (
        <div className='font-sans flex justify-center items-center min-h-screen'>
            <div className="border-2 border-gray-300 rounded-2xl w-[350px] h-[520px]">
                <div className="px-[44px] pt-[40px] pb-[8px]">
                    <img src="../src/assets/devchallenges.svg" alt="logo" className='w-[110px]' />
                    <p className='text-[13.23px] my-5 text-gray-800'><strong>Join thousands of learners from<br /> around the world</strong></p>
                    <p className='text-xs mb-5'>Master web development by making real-life<br /> projects. There are multiple paths for you to<br /> choose</p>
                    <form onSubmit={handleRegister}>
                        <div className="relative mb-[10px]">
                            <FontAwesomeIcon icon={faUserTie} className='absolute ml-2.5 mt-2 text-[#828282]' />
                            <input
                                type='text'
                                name='name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Name'
                                className='w-full px-9 py-[4px] text-[14px] border border-gray-300 rounded-md'
                            />
                        </div>
                        <div className="relative mb-[10px]">
                            <FontAwesomeIcon icon={faEnvelope} className='absolute ml-2.5 mt-2 text-[#828282]' />
                            <input
                                type='email'
                                name='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Email'
                                className='w-full px-9 py-[4px] text-[14px] border border-gray-300 rounded-md'
                            />
                        </div>
                        <div className="relative mb-[10px]">
                            <FontAwesomeIcon icon={faLock} className='absolute ml-2.5 mt-2 text-[#828282]' />
                            <input
                                type='password'
                                name='contraseña'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Password'
                                className='w-full px-9 py-[4px] text-[14px] border border-gray-300 rounded-md'
                            />
                        </div>
                        <div>
                            {/* <FontAwesomeIcon icon={faLock} className='absolute ml-2.5 mt-2 text-[#828282]' /> */}
                            {/* <input
                                type='number'
                                name='rol'
                                value={rol_id}
                                onChange={(e) => setRol_id(e.target.value)}
                                placeholder='rol'
                                className='w-full px-9 py-[4px] text-[14px] border border-gray-300 rounded-md'
                            /> */}
                            <input
                                type='hidden'
                                name='rol_id'
                                value={rol_id}
                            />
                        </div>
                        <button className='bg-blue-500 text-white border-none rounded-md px-7 py-[5px] cursor-pointer w-full text-xs mt-2 mb-4' type="submit">Start coding now</button>
                    </form>
                    {error && <p className='text-red-500 text-[10.50px]'>{error}</p>}
                </div>
                <div className="text-center">
                    <p className='text-gray-500 text-[10.50px] mb-5'>or continue with these social profile</p>
                    <div className='flex justify-center'>
                        <a href="#"><img src="../src/assets/Google.svg" alt="google" className='w-[34px] mx-2' /></a>
                        <a href="#"><img src="../src/assets/Facebook.svg" alt="facebook" className='w-[34px] mx-2' /></a>
                        <a href="#"><img src="../src/assets/Twitter.svg" alt="twitter" className='w-[34px] mx-2' /></a>
                        <a href="#"><img src="../src/assets/Gihub.svg" alt="gihub" className='w-[34px] mx-2' /></a>
                    </div>
                    <p className='text-[10.50px] text-gray-500 mt-5'>Adready a member? <a className='text-blue-500' href="/">Login</a></p>
                </div>
            </div>
        </div>
    )
}
