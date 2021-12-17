import React from 'react'
import styled from 'styled-components'

const FormContainer = styled.div`
    margin: 2%;

    div{
        /* border: 1px solid white; */
        display: flex;
        align-content: center;
        justify-content: center;
    }
    
    form{
        background-color: teal;
        padding: 5%;
        border-radius: 1.6rem;
        /* border: 1px solid white; */
    }

    input{
        display: flex;
        flex-direction: row;
    }

    label{
        margin: 2%;
        font-weight: bold;
        color: white;
        text-align: center;
    }
   
   & .errors {
       color: orange;
       font-size: 1.2rem;
       
   }
`
const Submit = styled.button`
padding: 1% 2%;
color: black;
border: 1px solid white;
font-weight: bold;
background-color: white;

`



export default function Form(props) {

    const { values, update, submit, disabled, errors } = props

    const onSubmit = event => {
            event.preventDefault()
            submit()
        }

    const change = event => {
        const { value, tos, type, name } = event.target;
        const useValue = type === 'checkbox' ? tos : value;
        update(name, useValue);
    }

    return(
    <FormContainer className='form-container'>
        <form onSubmit={onSubmit}>
       
            <div className='text-inputs'>
                <label>First Name:
                    <input
                        name='first_name'
                        type='text'
                        placeholder="First Name"
                        minLength='3'
                        value={values.first_name}
                        onChange={change}
                    />
                </label>

                <label>Last Name:
                    <input
                        name='last_name'
                        type='text'
                        placeholder="Last Name"
                        maxLength='30'
                        value={values.last_name}
                        onChange={change}
                    />
                </label>

                <label>Email:
                    <input
                        name='email'
                        type='email'
                        placeholder='Email'
                        value={values.email}
                        onChange={change}
                    />  
                </label>

                <label>Password:
                    <input
                        type='password'
                        name='password'
                        placeholder="Password"
                        value={values.password}
                        onChange={change}
                    />  
                </label> 
            </div>

            <div className = 'checkbox-inputs'>
               <label> Terms of Service: 
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
                <div>{errors.last_name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.tos}</div>
            </div>

            <div className='submit-button'>
            <Submit disabled={disabled} id='submitBtn'>Submit</Submit>
            </div>

           
        </form>
    </FormContainer> 
    )
}