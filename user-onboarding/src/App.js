import React, { useState, useEffect } from 'react'
import axios from 'axios'
//components
import User from './components/User'
import Form from './components/Form'

import './App.css';

const initialFormValues = {
  //text
  name: '',
  email: '',
  password: '',
  //checkbox
  tos: '',
}

// const initialDisabled = true;
const initialFriends= [];

//*****FUNCTION START*****//

function App()  {

//SET STATE//
  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues);
  // const [error, setError] = useState("");



//HELPER FUNCTIONS//

const getUsers = () => {
  axios.get('https://reqres.in/api/users/2')
  .then(resp =>{
    setUsers(resp.data)
  })
  .then(err =>{
    debugger
  })
}

const postNewUser = (newUser) => {
  axios.post('https://reqres.in/api/users/2', newUser)
  .then(resp =>{
    setUsers([ ...users, resp.data]);
  })
  .catch(err => {
    debugger;
  })
  .finally(()=> {
    setFormValues(initialFormValues)
  })
}

//VALIDATE FUNCTION HERE

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  const submitForm = () => {

    const newUser = {

      name: formValues.first_name.trim(),
      email: formValues.email.trim(),
    }

  }


  //RETURN STATEMENT//

  return (
    <div className="App">

      <h1> User Onboarding</h1>

      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

    </div>
  );
}

export default App;
