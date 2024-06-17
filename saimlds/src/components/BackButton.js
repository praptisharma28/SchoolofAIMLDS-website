import React from 'react'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
    const navigate = useNavigate()
    return (
        <div className='back-button-container'>
                <button onClick={()=>navigate("/")} className='back-button'>←</button>
        </div>
    )
}

export default BackButton