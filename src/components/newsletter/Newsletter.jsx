import React from 'react'

function NewsletterBox() {
   const onSubmitHandler =(e)=>{
    e.preventDefault();
   }

    return (
        <div className='text-center w-full pt-1 pb-2  items-center border-t-[1px] font-titleFont border-t-black mt-10' onSubmit={onSubmitHandler}>
             <p className='text-3xl font-bold text-slate-950 mt-5'>Subscribe</p>
             <p className='text-gray-800 mt-3 text-lg'>Sign up to be the first to get update</p>
             <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
                <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your eamil' required/>
                <button type='submit' className='bg-slate-950 text-white text-xs px-10 py-4'>SIGN UP</button>
             </form>
        </div>
    )
}

export default NewsletterBox
