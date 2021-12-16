import React, { useState, useEffect } from 'react'
import axios from 'axios'
import schema from './validation/formSchema';
import * as yup from 'yup';
//Components
import User from './components/User'
import Form from './components/Form'


const initialFormValues = {
  //text
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  //checkbox
  tos: false,
}

const initialFormErrors = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
}

// const initialDisabled = true;
// const initialUsers= [];
const disableSubmit= true;

//*****FUNCTION START*****//

function App()  {

//SET STATE//
  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(disableSubmit)
  const [errors, setErrors] = useState(initialFormErrors)

//HELPER FUNCTIONS//

const getUsers = () => {
  axios.get('https://reqres.in/api/users')
  .then(resp =>{
    setUsers(resp.data)
  })
  .catch(err => 
    console.error(err)
  )
}

const postUser = (newUser) => {
  axios.post('https://reqres.in/api/users', newUser)
  .then(resp =>{
    setUsers([ ...users, resp.data]);
    console.log()
  })
  .catch(err => 
    console.error(err)
  )
  .finally(()=> {
    setFormValues(initialFormValues)
  })
}

//VALIDATE FUNCTION HERE

const validate = (name, value) => {
  yup.reach(schema, name)
    .validate(value)
    .then(() => setErrors({ ...errors, [name]: '' }))
    .catch(err => setErrors({ ...errors, [name]: err.errors[0] }))
}

  const updateForm = (inputName, inputValue) => {
    validate(inputName, inputValue)
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  const submitForm = () => {
    const newUser = {
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim()
    }
    postUser(newUser)
  }

  //Side Effects//
  // useEffect(()=>{
  //   getUsers()
  // },[])

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  //RETURN STATEMENT//

  return (
    <div className="App">
     <h1> User Onboarding</h1>

      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
        disabled={disabled}
        errors={errors}
      />

    {
        users.map((user) => {
            <User key={user.id} details={user} />
            return <User />
        })
      }

    </div>
  );
}

export default App;
