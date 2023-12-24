import React from 'react'
import style from "./style.module.css"
const Navbar = ({data}) => {
  return (
    <div className='w-full px-20 py-3 flex items-center justify-between'>
        <h2 className={`${style.a} ${style.b}`} >Orange</h2>
      <div className='p-2 flex bg-orange-300  rounded-md mr-4 gap-2'>
       <h2>Favoriate</h2>
       <h2>{data.filter((items)=>items.added).length}</h2>
      </div>
         
    </div>
  )
}

export default Navbar