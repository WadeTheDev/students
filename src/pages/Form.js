import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import '../App.css'

const Form = () => {

    const [name, setName] = useState('')

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const student = { name: name }
        const request = await fetch('http://localhost:5000/students',{
            method: 'POST',
            header: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(student)
        })
        const response = await request.json()


    }
 
    return(
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='name' value={name} onChange={handleNameChange}/>
        <button type='submit'>Add New Student</button>
    </form>
    </>
    )
}

export default Form