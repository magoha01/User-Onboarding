import React from 'react'

export default function Form(props) {

    const { values, update, submit, disabled, errors } = props

    const onSubmit = event => {
            event.preventDefault()
            submit()
        }

    const change = event => {
        const { value, checked, type, name } = event.target;
        const useValue = type === 'checkbox' ? checked : value;
        update(name, useValue);
    }

    
   
    return(
        <form>
        
        <div className='form container'>
            <div className='text-inputs'>
                <label>First Name:
                    <input
                        name='first_name'
                        type='text'
                        placeholder="Enter first name"
                        maxLength='30'
                        value={values.first_name}
                        onChange={change}
                    />
                </label>

                <label>Last Name:
                    <input
                        name='last_name'
                        type='text'
                        placeholder="Enter last name"
                        maxLength='30'
                        value={values.last_name}
                        onChange={change}
                    />
                </label>

                <label>Email:
                    <input
                        name='email'
                        type='email'
                        placeholder='Enter email'
                        value={values.email}
                        onChange={change}
                    />  
                </label>

                <label>Password:
                    <input
                        type='password'
                        name='password'
                        // value=''
                        onChange={change}
                    />  
                </label> 
            </div>

            <div className = 'checkbox-inputs'>
                <label> Terms of Service
                    <input
                        type='checkbox'
                        name='tos'
                        checked={values.tos}
                        onChange={change}
                    />
                </label>
            </div>

            <div className='errors'>
                <div>{errors.first_name}</div>
                <div>{errors.first_name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.tos}</div>
            </div>

            <div className='submit-button'>
            <button disabled={disabled}>Submit</button>
            </div>

           </div> 
        </form>
    )
}