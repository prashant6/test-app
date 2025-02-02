import {useState} from 'react'
import styles from './reacthookformvalidation.module.css'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})

function ReactHookFormValidation() {

    // const form = useForm() --> simplest form to use react-hook-form
    const {register, handleSubmit, setError, formState: { errors, isSubmitting}} = useForm({
        defaultValues: {
            // email: '',
            email: 'test@gmail.com',
            password: ''
        },
        resolver: zodResolver(schema)
    })

    const onSubmit = async (data) => {
        try {
            await new Promise(resolve => setTimeout(() => resolve(), 1000))
            throw new Error("Something went wrong");
            console.log('data: ', data)
        } catch (error) {
            // setError('email', {
            //     message: 'This email is already taken'
            // })
            console.log('error: ', error.name, error.message, typeof error)
            setError('root'), {
                // message: 'This email is already taken'
                message: error.message
            }
        }
    }

    return(
        <>
            <form className={`${styles.form__container}`} onSubmit={handleSubmit(onSubmit)}>

                <div className={`${styles.fieldBlock}`}>
                    <label htmlFor='email' className={`${styles.fieldBlock__label}`}>Email: </label>
                    <input
                        id='email'
                        name='email'
                        type='text'
                        {...register('email',
                            // *********** after connecting with zod, react-hook-forms built in validation is not required ***********

                            // {
                            //     required: 'Email is required',
                            //     pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, -----> pattern for email validation
                            //     validate: (value) => {
                            //         if(!value.include('@')) {
                            //             return 'Email must include @'
                            //         }
                            //         return true
                            //     }

                            // }

                        )}
                        className={`${styles.fieldBlock__input}`}
                        />
                        {errors.email && <div style={{color: 'red'}}>{errors?.email.message}</div>}
                </div>


                <div className={`${styles.fieldBlock}`}>
                    <label htmlFor='password' className={`${styles.fieldBlock__label}`}>Password: </label>
                    <input
                        id='password'
                        name='password'
                        type='password'
                        {...register('password',
                            // *********** after connecting with zod, react-hook-forms built in validation is not required ***********

                            // {
                            //     required: 'Password is required',
                                // minLength: 8
                                // minLength: {
                                // value: 8,
                                // message: 'Password must have atleast 8 characters
                                // }
                            //     validate: (value) => {
                            //         if(!value.include('@')) {
                            //             return 'Email must include @'
                            //         }
                            //         return true
                            //     }

                            // }

                        )}
                        className={`${styles.fieldBlock__input}`}
                        />
                        {errors.password && <div style={{color: 'red'}}>{errors?.password.message}</div>}
                </div>

                <button
                    type='submit'
                    className={`${styles.submtbtn}`}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Loading...' : 'Submit'}
                </button>
            </form>

        </>
    )



    
}

export default ReactHookFormValidation