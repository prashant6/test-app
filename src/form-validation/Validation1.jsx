import React from 'react'
import { useState } from 'react'

// it'a simple vanilla validation without any external library where we have handled isloading, errors and 

function Validation1() {
    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    })
    const [formErrors, setFormErrors] = useState({
        email: '',
        password: ''
    })
    const [isloading, setIsloading] = useState(false)

    const handleform = (e) => {
        const { name, value } = e.target

        setFormValues(prev => ({
            ...prev,
            [name]: value
        }))

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsloading(true)
        await new Promise(resolve => setTimeout(() => {
            setIsloading(false)
            resolve()
        }, 1000))
        console.log('form:', formValues)
    }

    return (
        <form onSubmit={handleSubmit} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <div>
                <label htmlFor='email'>Email: </label>
                <input
                    id='email'
                    name='email'
                    placeholder='Email'
                    value={formValues?.email}
                    onChange={handleform}
                />
                {formErrors?.email && <div style={{color: 'red'}}>Invalid Email</div>}
            </div>

            <div>
                <label htmlFor='password'>Password: </label>
                <input
                    id='password'
                    name='password'
                    value={formValues?.password}
                    onChange={handleform}
                />
                {formErrors?.password && <div style={{color: 'red'}}>Invalid Password</div>}
            </div>

            <button type='submit'>{isloading ? "Loading..." : "Submit"}</button>
        </form>
    )
}

export default Validation1