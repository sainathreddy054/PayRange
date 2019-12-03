import React from 'react'
import './ListItem.css'

const ListItem = ({ device, key, deleteListItem }) => {
    return (
        <div className='list-item'>
            <div className='list-id'>
                <p> {device.id} </p>
            </div>
            <div className='list-details'>
                {device.label} <br /> {device.status}
            </div>
            <div className='list-delete'>
                <button id="btn-delete" onClick={() => deleteListItem()}> - </button>
            </div>
        </div>
    )
}

export default ListItem