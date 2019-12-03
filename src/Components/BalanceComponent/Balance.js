import React from 'react'
import './Balance.css'

const Balance = ({balance, addBalance}) => {
    return (
        <div className='balance-screen'>
           <p> Balance: ${balance}.00 </p>
           <button className='balance-add' onClick={() => addBalance()}> + </button>             
        </div>
    )
}

export default Balance