import React from 'react';
import Navbar from '../components/Navbar';

export default function Perfil() {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center mt-[35px] mb-[20px]">
                <h1 className='mb-[5px] text-2xl font-bold'>Personal info</h1>
                <p className='mb-[5px]'>Basic info, like your name and photo</p>

                <div className='border-2 border-gray-300 rounded-2xl w-[624.42px] h-[350px]'>
                    <div className="flex justify-between p-4">
                        <div>
                            <p className="text-base">Profile</p>
                            <p className="text-xs pb-2">Some info may be visible to other people</p>
                        </div>
                        <a href="/edit" className="border border-gray-500 rounded-md px-6 py-0.5 text-xs text-gray-500 hover:bg-blue-300 transition duration-300 h-[25px] mt-2">Edit</a>
                    </div>

                    <table className='w-full'>
                        <tbody>
                            <tr>
                                <td className="text-[#BDBDBD] text-xs px-4 border-t border-gray-300 py-6">NAME</td>
                                <td className="result text-base border-t border-gray-300">name</td>
                            </tr>
                            <tr>
                                <td className="text-[#BDBDBD] text-xs px-4 border-t border-gray-300 py-6">EMAIL</td>
                                <td className="result text-base border-t border-gray-300">email</td>
                            </tr>
                            <tr>
                                <td className="text-[#BDBDBD] text-xs px-4 border-t border-gray-300 py-6">PASSWORD</td>
                                <td className="result text-base border-t border-gray-300">password</td>
                            </tr>
                            <tr>
                                <td className="text-[#BDBDBD] text-xs px-4 border-t border-gray-300 py-6">FECHA DE CREACION</td>
                                <td className="result text-base border-t border-gray-300">create_at</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}