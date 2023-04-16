import React from 'react'
import { useNavigate } from 'react-router-dom'

const EmployeeList = () => {

   const navigate = useNavigate();

  return (
    <div className='container mx-auto my-8'>
      <div className='h12'>
         <button 
         onClick={() => navigate("/addEmployee")}
         className='rounded bg-slate-600 text-white px-6 py-2 font-semibold'>Add Employee</button>
      </div>
      <div className='flex shadow border-b'>
         <table className='min-w-full'>
            <thead className='bg-grey-50'>
               <tr>
                  <th className='text-left font-medium text-grey-50 uppercase tracking-wider py-3 px-6'>First Name</th>
                  <th className='text-left font-medium text-grey-50 uppercase tracking-wider py-3 px-6'>Last Name</th>
                  <th className='text-left font-medium text-grey-50 uppercase tracking-wider py-3 px-6'>Email</th>
                  <th className='text-right font-medium text-grey-50 uppercase tracking-wider py-3 px-6'>Actions</th>
               </tr>
            </thead>
            <tbody className='bg-white'>
               <tr>
                  <td className='text-left px-6 py-4 whitespace-nowrap'><div className='text-sm text-grey-500'>Ibrahim</div>
                  </td>
                   <td className='text-left px-6 py-4 whitespace-nowrap'><div className='text-sm text-grey-500'>Malgwi</div>
                  </td>
                   <td className='text-left px-6 py-4 whitespace-nowrap'><div className='text-sm text-grey-500'>ibrahim@gmail.com</div>
                  </td>                 
                  <td className='text-right px-6 py-4 whitespace-nowrap font-medium text-sm '>
                     <a href='#' className='text-indigo-600 hover:text-indigo-800 px-4'>Edit</a>
                     <a href='#' className='text-indigo-600 hover:text-indigo-800'>Delete</a>
                  </td>
               </tr>
            </tbody>
         </table>         
      </div>
    </div>
  )
}

export default EmployeeList