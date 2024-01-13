import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export default function Register() {
    return (
        <div className='font-sans flex justify-center items-center min-h-screen'>
            <div className="border-2 border-gray-300 rounded-2xl w-[350px] h-[466.41px]">
                <div className="px-[44px] pt-[40px] pb-[8px]">
                    <img src="../src/assets/devchallenges.svg" alt="logo" className='w-[110px]' />
                    <p className='text-[13.23px] my-5 text-gray-800'><strong>Join thousands of learners from<br /> around the world</strong></p>
                    <p className='text-xs mb-5'>Master web development by making real-life<br /> projects. There are multiple paths for you to<br /> choose</p>
                    <form action="./edit/registrardb.php" method="post">
                        <div className="relative mb-[10px]">
                            <FontAwesomeIcon icon={faEnvelope} className='absolute ml-2.5 mt-2 text-[#828282]' />
                            <input type="email" name="Email" placeholder="Email" className='w-full px-9 py-[4px] text-[14px] border border-gray-300 rounded-md'/>
                        </div>
                        <div className="relative mb-[10px]">
                            <FontAwesomeIcon icon={faLock} className='absolute ml-2.5 mt-2 text-[#828282]' />
                            <input type="password" name="contraseña" placeholder="Password" className='w-full px-9 py-[4px] text-[14px] border border-gray-300 rounded-md'/>
                        </div>
                        <button className='bg-blue-500 text-white border-none rounded-md px-7 py-[5px] cursor-pointer w-full text-xs mt-2 mb-4' type="submit">Start coding now</button>
                    </form>
                </div>
                <div className="text-center">
                    <p className='text-gray-500 text-[10.50px] mb-5'>or continue with these social profile</p>
                    <div className='flex justify-center'>
                    <a href="#"><img src="../src/assets/Google.svg" alt="google" className='w-[34px] mx-2'/></a>
                    <a href="#"><img src="../src/assets/Facebook.svg" alt="facebook" className='w-[34px] mx-2'/></a>
                    <a href="#"><img src="../src/assets/Twitter.svg" alt="twitter" className='w-[34px] mx-2'/></a>
                    <a href="#"><img src="../src/assets/Gihub.svg" alt="gihub" className='w-[34px] mx-2'/></a>
                    </div>
                    <p className='text-[10.50px] text-gray-500 mt-5'>Adready a member? <a className='text-blue-500' href="/">Login</a></p>
                </div>
            </div>
        </div>
    )
}
