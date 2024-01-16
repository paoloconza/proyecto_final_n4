import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // Realizar una solicitud POST a tu endpoint de login
            const response = await fetch('http://127.0.0.1:8000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                // Manejar la respuesta exitosa, por ejemplo, redirigir a otra página
                console.log('Inicio de sesión exitoso');
                // Redirigir a la página de inicio de sesión
                navigate('/perfil');
            } else {
                // Manejar la respuesta de error del servidor
                const errorData = await response.json();
                setError(errorData.message || 'Error en el inicio de sesión');
            }
        } catch (error) {
            // Manejar el error de red, etc.
            console.error('Error en el inicio de sesión', error);
        }
    };

    return (
        <div className='font-sans flex justify-center items-center min-h-screen '>
            <div className="border-2 border-gray-300 rounded-2xl w-[350px] h-[404.31px]">
                <div className="px-[44px] pt-[40px] pb-[8px]">
                    <img src="../src/assets/devchallenges.svg" alt="logo" className='w-[110px]' />
                    <p className='text-[13.23px] my-5 text-gray-800'><strong>Login</strong></p>
                    <form onSubmit={handleLogin}>
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
                                name='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Password'
                                className='w-full px-9 py-[4px] text-[14px] border border-gray-300 rounded-md'
                            />
                        </div>
                        <button type="submit" className='bg-blue-500 text-white border-none rounded-md px-7 py-[5px] cursor-pointer w-full text-xs mt-2 mb-4'>Login</button>
                    </form>
                    {error && <p className='text-red-500 text-[10.50px]'>{error}</p>}
                </div>
                <div className="text-center">
                    <p className='text-gray-500 text-[10.50px] mb-5'>or continue with these social profile</p>
                    <div className='flex justify-center'>
                        <a href="#"><img src="../src/assets/Google.svg" alt="google" className="w-[34px] mx-2" /></a>
                        <a href=""><img src="../src/assets/Facebook.svg" alt="facebook" className="w-[34px] mx-2" /></a>
                        <a href=""><img src="../src/assets/Twitter.svg" alt="twitter" className="w-[34px] mx-2" /></a>
                        <a href=""><img src="../src/assets/Gihub.svg" alt="gihub" className="w-[34px] mx-2" /></a>
                    </div>
                    <p className='text-[10.50px] text-gray-500 mt-5'>Don't have an account yet? <a className='text-blue-500' href="/register">Register</a></p>
                </div>
            </div>
        </div>
    )
}
