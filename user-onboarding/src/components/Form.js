import React from 'react'

export default function Form(props) {

    const { values, update, submit } = props

    const onSubmit = event => {
            event.preventDefault()
            submit()
        }

    const onChange = event => {

    }

   
    return(
        <form>
            <div className='text-inputs'>
                <label>Name

                </label>

                <label>Email

                </label>

                <label>Password

                </label> 
            </div>
        </form>
    )
}