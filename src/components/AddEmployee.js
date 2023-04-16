import React from 'react'

const AddEmployee = () => {
  return (
    <div className='flex max-w-2xl mx-auto shadow border-b'>
      <div className='px-9 py-8'>
         <div className='font-thin text-2xl tracking-wider'>
            <h1>Add new Employee</h1>
         </div>
         <div className='item-center justify-center h-14 w-full my-4'>
            <label className='block text-grey-600 text-sm font-normal'>First Name</label>
            <input type='text' className='h-10 w-96 border mt-2 px-2 py-2'></input>
         </div>
         <div className='item-center justify-center h-14 w-full my-4'>
            <label className='block text-grey-600 text-sm font-normal'>Last Name</label>
            <input type='text' className='h-10 w-96 border mt-2 px-2 py-2'></input>
         </div>
         <div className='item-center justify-center h-14 w-full my-4'>
            <label className='block text-grey-600 text-sm font-normal'>Email</label>
            <input type='text' className='h-10 w-96 border mt-2 px-2 py-2'></input>
         </div>
         <div className='item-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
            <button className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-2'>Save</button>
            <button className='rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-2'>Clear</button>
         </div>
      </div>
    </div>
  )
}

export default AddEmployee