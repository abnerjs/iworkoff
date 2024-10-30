import React from 'react'
import './Searchbar.css'
import { IoSearchOutline } from "react-icons/io5"

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div className="searchbar">
            <IoSearchOutline className='searchIcon' />
            <input type="text" name="" id="" className="searchbar-input" placeholder='Procurar por colaborador ou grupo' />
        </div>
    )
}