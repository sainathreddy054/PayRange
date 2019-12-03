import React from 'react'
import './Header.css'

const Header = ({displayText, addBtn, addListItem}) => {
    return (
        <div className='page-header'>
           <h2> {displayText} </h2>
           {addBtn ? 
                <div className='add-btn'> 
                    <button id="add-list" onClick={() => addListItem()}> + </button> 
                </div>  
            : null}             
        </div>
    )
}

export default Header