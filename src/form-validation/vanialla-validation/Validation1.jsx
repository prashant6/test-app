import { useState } from 'react'
import styles from './validation1.module.css'


// it'a simple vanilla validation without any external library, where we have handled isloading, errors 

function Validation1() {
    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    })
    const [formErrors, setFormErrors] = useState({
        email: false,
        password: false
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
        <form onSubmit={handleSubmit} className={styles.form__container}>
            <div className={styles.fieldBlock}>
                <label htmlFor='email' className={styles.fieldBlock__label}>Email: </label>
                <input
                    id='email'
                    name='email'
                    type='text'
                    className={styles.fieldBlock__input}
                    placeholder='Email'
                    value={formValues?.email}
                    onChange={handleform}
                />
                {formErrors?.email && <div className={styles.error}>Error in Email</div>}
            </div>

            <div className={styles.fieldBlock}>
                <label htmlFor='password' className={styles.fieldBlock__label}>Password: </label>
                <input
                    id='password'
                    name='password'
                    type='password'
                    className={styles.fieldBlock__input}
                    value={formValues?.password}
                    onChange={handleform}
                />
                {formErrors?.password && <div className={styles.error}>Error in Password</div>}
            </div>

            <button 
            type='submit'
            disabled={isloading ? true : false}
            className={styles.submtbtn}
            >
                {isloading ? "Loading..." : "Submit"}
            </button>
        </form>
    )
}

export default Validation1