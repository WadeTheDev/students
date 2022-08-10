import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import '../App.css'

const Home = () => {

const [students, setStudents] = useState([])

useEffect(() => {
    getStudents()
}, [])

const getStudents = async() => {
    const request = await fetch('http://localhost:5000/students')
    const response = await request.json()
    setStudents(response)
    console.log(response)
}


return ( 
    <>
    <h1>Hello</h1>
    <div>
    {students.map((student) => {
        return(
        <h2>{student.name}</h2>
        )
    })}
    </div>
    </>
)
}

export default Home