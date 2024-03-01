
import { useState } from 'react'
import './Form.css'

const Form = () => {
    const [name, setName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmP, setConfirmP] = useState("")
    return (
        <>
            <div className="contenedor">
                <p className="texto">First Name</p>
                <input onChange={(e) => {
                    setName(e.target.value)
                }} type="text" />
            </div>
            <div className="contenedor">
                <p className="texto">Last Name</p>
                <input onChange={(e) => {
                    setLastName(e.target.value)
                }} type="text" />
            </div>
            <div className="contenedor">
                <p className="texto">Email</p>
                <input onChange={(e) => {
                    setEmail(e.target.value)
                }} type="email" />
            </div>
            <div className="contenedor">
                <p className="texto">Password</p>
                <input onChange={(e) => {
                    setPassword(e.target.value)
                }} type="password" />
            </div>
            <div className="contenedor">
                <p className="texto">Confirm password</p>
                <input onChange={(e) => {
                    setConfirmP(e.target.value)
                }} type="password" />
            </div>

            <div>
                <h4>Your Form Data.</h4>
                <p>First Name: {name} </p>
                <p>Last Name: {lastname}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmP}</p>
            </div>
        </>
    )
}

export default Form