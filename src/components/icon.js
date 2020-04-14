import React from 'react'
import { FaRegCircle } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'


const Icon = ({name}) => {
    switch (name) {
        case "Circle":
                return <FaRegCircle />            
        case "Cross":
                return <IoMdClose />  
        default:
                return null
    }
}

export default Icon;