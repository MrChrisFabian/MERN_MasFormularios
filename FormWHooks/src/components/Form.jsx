
import { useState } from 'react'
import './Form.css'

const Form = () => {
    const [password, setPassword] = useState("")
    const [adviseName, setAdviseName] = useState("")
    const [adviseLastName, setAdviseLastName] = useState("")
    const regexEmail = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')
    const [adviseEmail, setAdEmail] = useState("")
    const regexPass = new RegExp('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$')
    const [adPassword, setADPasss] = useState("")
    const [adConfirPass, setadConPass] = useState("")


    const createUser = (e) => {
        e.preventDefault();

    }
    const nameHandler = (e) => {
        if (e.target.value.length < 1) {
            setAdviseName("Ingrese un nombre")
        }
        else if (e.target.value.length < 3) {
            setAdviseName("Ingrese el nombre Completo")
        } else {
            setAdviseName("")

        }
    }
    const lastnameHandler = (e) => {
        if (e.target.value.length < 1) {
            setAdviseLastName("Ingrese un apellido")
        }
        else if (e.target.value.length < 3) {
            setAdviseLastName("Ingrese el apellido Completo")
        } else {
            setAdviseLastName("")

        }
    }
    const emailHandler = (e) => {
        if (!regexEmail.test(e.target.value)) {
            setAdEmail("Ingrese un email valido")
        }
        else {
            setAdEmail("")
        }
    }
    const passHandler = (e) => {
        if (!regexPass.test(e.target.value)) {
            setADPasss("Al menos una mayusculas, minimo 8 caracteres")
            setPassword(e.target.value)
        } else {
            setADPasss("")
        }
    }
    const passConfirmHandler = (e) => {
        if (!(password == e.target.value)) {
            setadConPass("Las COntraseñas no coinciden")
        } else {
            setadConPass("")
        }
    }

    return (
        <form onSubmit={createUser}>
            <div className="contenedor">
                <p className="texto">First Name</p>
                <input onChange={nameHandler} type="text" />
                <p className='error' >{adviseName}</p>
            </div>

            <div className="contenedor">
                <p className="texto">Last Name</p>
                <input onChange={lastnameHandler} type="text" />
                <p className='error' >{adviseLastName}</p>
            </div>

            <div className="contenedor">
                <p className="texto">Email</p>
                <input onChange={emailHandler} type="email" />
                <p className='error' >{adviseEmail}</p>

            </div>

            <div className="contenedor">
                <p className="texto">Password</p>
                <input onChange={passHandler} type="password" />
                <p className='error' >{adPassword}</p>
            </div>

            <div className="contenedor">
                <p className="texto">Confirm password</p>
                <input onChange={passConfirmHandler} type="password" />
                <p className='error' >{adConfirPass}</p>
            </div>

            <div>
                <button>Registro</button>
            </div>
        </form>
    )
}

export default Form