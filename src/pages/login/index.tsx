import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <div className='flex-1 container mx-auto mt-7 flex flex-col items-center'>
        <h1 className='text-center text-primary text-3xl'>Sign In</h1>
        <Link className='text-center text-blue-700 hover:underline text-sm mt-3' href="/register">Need an account?</Link>
        <form className='flex flex-col items-end w-1/3'>
            <input placeholder='Email' type="email" className='w-full border rounded px-5 py-2 mt-5 
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'></input>
            <input placeholder='Password' type="password" className='w-full border rounded px-5 py-2 mt-3
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'></input>
            <button type='submit' className='bg-primary text-white px-5 py-2 mt-3 rounded-md hover:bg-slate-800'>Sign In</button>
        </form>
    </div>
  )
}

export default index